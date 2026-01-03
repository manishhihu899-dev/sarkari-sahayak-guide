import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Bookmark {
  serviceId: string;
  subServiceId: string;
  title: string;
  titleHi: string;
  savedAt: number;
}

interface BookmarkContextType {
  bookmarks: Bookmark[];
  isBookmarked: (serviceId: string, subServiceId: string) => boolean;
  toggleBookmark: (serviceId: string, subServiceId: string, title: string, titleHi: string) => boolean;
  removeBookmark: (serviceId: string, subServiceId: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const STORAGE_KEY = "sarkari-guide-bookmarks";

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const isBookmarked = (serviceId: string, subServiceId: string) => {
    return bookmarks.some(
      (b) => b.serviceId === serviceId && b.subServiceId === subServiceId
    );
  };

  const toggleBookmark = (serviceId: string, subServiceId: string, title: string, titleHi: string) => {
    const exists = isBookmarked(serviceId, subServiceId);
    
    if (exists) {
      setBookmarks((prev) =>
        prev.filter((b) => !(b.serviceId === serviceId && b.subServiceId === subServiceId))
      );
    } else {
      setBookmarks((prev) => [
        ...prev,
        { serviceId, subServiceId, title, titleHi, savedAt: Date.now() }
      ]);
    }
    
    return !exists; // returns new state: true if now bookmarked
  };

  const removeBookmark = (serviceId: string, subServiceId: string) => {
    setBookmarks((prev) =>
      prev.filter((b) => !(b.serviceId === serviceId && b.subServiceId === subServiceId))
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, isBookmarked, toggleBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within BookmarkProvider");
  }
  return context;
}
