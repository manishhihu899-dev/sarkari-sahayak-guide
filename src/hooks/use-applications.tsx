import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface SavedApplication {
  id: string;
  applicationId: string;
  schemeName: string;
  schemeNameHi: string;
  schemeId: string;
  parentServiceId: string;
  portalUrl: string;
  dateAdded: string;
  notes?: string;
}

interface ApplicationsContextType {
  applications: SavedApplication[];
  addApplication: (app: Omit<SavedApplication, "id" | "dateAdded">) => void;
  removeApplication: (id: string) => void;
  updateApplication: (id: string, updates: Partial<SavedApplication>) => void;
}

const ApplicationsContext = createContext<ApplicationsContextType | undefined>(undefined);

const STORAGE_KEY = "sarkaari-sahayak-applications";

export const ApplicationsProvider = ({ children }: { children: ReactNode }) => {
  const [applications, setApplications] = useState<SavedApplication[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const addApplication = (app: Omit<SavedApplication, "id" | "dateAdded">) => {
    const newApp: SavedApplication = {
      ...app,
      id: crypto.randomUUID(),
      dateAdded: new Date().toISOString(),
    };
    setApplications(prev => [newApp, ...prev]);
  };

  const removeApplication = (id: string) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  const updateApplication = (id: string, updates: Partial<SavedApplication>) => {
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, ...updates } : app))
    );
  };

  return (
    <ApplicationsContext.Provider
      value={{ applications, addApplication, removeApplication, updateApplication }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export const useApplications = () => {
  const context = useContext(ApplicationsContext);
  if (!context) {
    throw new Error("useApplications must be used within ApplicationsProvider");
  }
  return context;
};
