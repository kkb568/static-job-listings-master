type JobLevel = "Senior" | "Midweight" | "Junior";
type JobContract = "Full Time" | "Part Time" | "Contract";
type ActionType = "addFilter" | "removeFilter" | "removeAllFilters";

export type Job = {
  company: string;
  logo: string;
  ifNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: JobLevel;
  postedAt: string;
  contract: JobContract;
  location: string;
  languages: string[];
  tools: string[];
};

export type JobItemProps = {
  jobItem: Job;
};

export type SpecialContentProps = {
  content: string;
  backgroundColor: string;
};

export type FilterButtonProps = {
  content: string;
};

export type FilterAction = {
  type: ActionType;
  filter: string | null;
};

export type FilterContextValue = {
  filters: string[];
  filterDispatch: React.Dispatch<FilterAction> | null;
};
