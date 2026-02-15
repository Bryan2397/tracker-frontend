export interface Job {
  title: string;
  url: string;
  dateApplied?: string;
  company: string;
  addedOn: string;
  status: "APPLIED" | "OA" | "INTERVIEW" | "OFFER" | "REJECTED";
  notes?: string;
  jobSummary: string;
  location?: string;
}
