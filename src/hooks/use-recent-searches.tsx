import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "sarkarisahayak_recent_searches";
const MAX_RECENT_SEARCHES = 8;

export const useRecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setRecentSearches(parsed);
        }
      }
    } catch (error) {
      console.error("Error loading recent searches:", error);
    }
  }, []);

  // Add a new search to history
  const addSearch = useCallback((query: string) => {
    if (!query || query.trim().length < 2) return;
    
    const trimmedQuery = query.trim();
    
    setRecentSearches((prev) => {
      // Remove if already exists (to move to top)
      const filtered = prev.filter(
        (search) => search.toLowerCase() !== trimmedQuery.toLowerCase()
      );
      
      // Add to beginning and limit
      const updated = [trimmedQuery, ...filtered].slice(0, MAX_RECENT_SEARCHES);
      
      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error("Error saving recent searches:", error);
      }
      
      return updated;
    });
  }, []);

  // Remove a specific search
  const removeSearch = useCallback((query: string) => {
    setRecentSearches((prev) => {
      const updated = prev.filter(
        (search) => search.toLowerCase() !== query.toLowerCase()
      );
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error("Error saving recent searches:", error);
      }
      
      return updated;
    });
  }, []);

  // Clear all history
  const clearHistory = useCallback(() => {
    setRecentSearches([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing recent searches:", error);
    }
  }, []);

  return {
    recentSearches,
    addSearch,
    removeSearch,
    clearHistory,
    hasHistory: recentSearches.length > 0,
  };
};
