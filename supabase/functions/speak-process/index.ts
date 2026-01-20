import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Optimized in-memory cache for faster responses
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
    
    // Check cache first - instant response if cached
    const cached = scriptCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log("Cache hit for:", title);
      return new Response(JSON.stringify({ script: cached.script, cached: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Create a concise process summary for faster generation
    const stepsText = steps.map((step: { step: number; title: string; description: string }) => 
      `${step.step}. ${step.title}: ${step.description.slice(0, 80)}`
    ).join("\n");

    // Optimized shorter prompt for faster AI response (target: under 2 seconds)
    const prompt = `Simple Hindi/Hinglish audio guide for: "${title}"

Steps:
${stepsText}

RULES:
- MAX 120 words - be VERY concise!
- Simple Hindi/Hinglish for village users
- Start: "Namaskar! ${title} kaise karein..."
- End: "Bas itna hi! Simple hai na?"
- Use: "aap", "bahut aasaan", "tension mat lo"
- NO English jargon, NO markdown, NO asterisks

Script:`;

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
        max_tokens: 300, // Reduced for faster response
        temperature: 0.7, // Slightly lower for faster, more consistent output
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
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`/g, '')
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