import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { JobListing } from "@/data/jobs";

interface SavedJobsContextType {
  savedJobs: JobListing[];
  isJobSaved: (jobId: string) => boolean;
  toggleSaveJob: (job: JobListing) => boolean;
  removeJob: (jobId: string) => void;
}

const SavedJobsContext = createContext<SavedJobsContextType | undefined>(undefined);
const STORAGE_KEY = "sarkari-saved-jobs";

export function SavedJobsProvider({ children }: { children: ReactNode }) {
  const [savedJobs, setSavedJobs] = useState<JobListing[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedJobs));
  }, [savedJobs]);

  const isJobSaved = useCallback((jobId: string) => savedJobs.some(j => j.id === jobId), [savedJobs]);

  const toggleSaveJob = useCallback((job: JobListing) => {
    const exists = savedJobs.some(j => j.id === job.id);
    if (exists) {
      setSavedJobs(prev => prev.filter(j => j.id !== job.id));
    } else {
      setSavedJobs(prev => [...prev, job]);
    }
    return !exists;
  }, [savedJobs]);

  const removeJob = useCallback((jobId: string) => {
    setSavedJobs(prev => prev.filter(j => j.id !== jobId));
  }, []);

  return (
    <SavedJobsContext.Provider value={{ savedJobs, isJobSaved, toggleSaveJob, removeJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
}

export function useSavedJobs() {
  const ctx = useContext(SavedJobsContext);
  if (!ctx) throw new Error("useSavedJobs must be used within SavedJobsProvider");
  return ctx;
}
