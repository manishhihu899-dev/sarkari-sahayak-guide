import { supabase } from '@/integrations/supabase/client';

export interface WebSearchResult {
  title: string;
  description: string;
  url: string;
  content: string;
  source: string;
}

export interface WebSearchResponse {
  success: boolean;
  error?: string;
  results?: WebSearchResult[];
}

export async function searchWeb(query: string, limit: number = 8): Promise<WebSearchResponse> {
  try {
    const { data, error } = await supabase.functions.invoke('web-search', {
      body: { query, limit },
    });

    if (error) {
      console.error('Web search error:', error);
      return { success: false, error: error.message };
    }

    return data;
  } catch (error) {
    console.error('Web search exception:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Search failed' 
    };
  }
}
