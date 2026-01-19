import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory cache for faster responses
const scriptCache = new Map<string, { script: string; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { steps, title } = await req.json();
    
    // Create cache key
    const cacheKey = `${title}_${JSON.stringify(steps.map((s: { step: number }) => s.step))}`;
    
    // Check cache first
    const cached = scriptCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log("Returning cached script for:", title);
      return new Response(JSON.stringify({ script: cached.script, cached: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Create a friendly, easy-to-understand explanation of the process
    const stepsText = steps.map((step: { step: number; title: string; description: string }) => 
      `Step ${step.step}: ${step.title} - ${step.description}`
    ).join("\n");

    const prompt = `You are a helpful, friendly guide speaking in simple Hindi/Hinglish. Create a SHORT, conversational audio script for this government service process. The script will be read aloud to help villagers and first-time users.

Title: ${title}

Steps:
${stepsText}

CRITICAL RULES:
1. Keep it under 200 words - be concise!
2. Use SIMPLE Hindi/Hinglish that a village person can understand
3. Address user as "aap", "aapko"  
4. Start with a warm greeting like "Namaskar! Aaj hum seekhenge..."
5. Explain each step clearly but briefly
6. Add encouraging words like "bahut aasaan hai", "tension mat lo", "bas itna hi karna hai"
7. End with "Bas ho gaya! Dekha kitna simple tha?"
8. NO complex words, NO English jargon
9. Make it sound like a friend explaining, not a formal guide

Generate the conversational script directly (no formatting, no asterisks, no bullet points - just spoken words):`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "user", content: prompt }
        ],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please wait and try again." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to generate script" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const script = data.choices?.[0]?.message?.content || "";

    // Clean the script - remove any markdown formatting
    const cleanScript = script
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/#{1,6}\s/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    // Cache the result
    scriptCache.set(cacheKey, { script: cleanScript, timestamp: Date.now() });

    return new Response(JSON.stringify({ script: cleanScript }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
