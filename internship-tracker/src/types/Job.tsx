export interface Job {
  title: string;
  url: string;
  dateApplied?: string;
  company: string;
  addedOn: string;
  status: "APPLIED" | "OA" | "INTERVIEW" | "OFFER" | "REJECTED" | "NOT_APPLIED";
  notes?: string;
  jobSummary: string;
  location?: string;
  salary?: string;
  skills: string[];
}

export interface jobData {
  company: string;
  title: string;
  location: string;
  salary: string;
  skills: string[];
}
