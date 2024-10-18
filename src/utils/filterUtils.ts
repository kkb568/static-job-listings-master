import { jobs } from "../data/data";
import { FilterAction, Job } from "../data/dataTypes";

export function filterReducer(state: string[], action: FilterAction) {
  const { type, filter } = action;

  switch (type) {
    case "addFilter":
      return filter ? (state.includes(filter) ? state : [...state, filter]) : state;
    case "removeFilter":
      return state.filter((value) => value !== filter);
    case "removeAllFilters":
      return removeAllFilters(state);
    default:
      return state;
  }
}

function removeAllFilters(filters: string[]): string[] {
  const newFilters: string[] = [...filters];

  while (newFilters.length > 0) {
    newFilters.pop();
  }

  return newFilters;
}

export function getFilteredJobs(filters: string[]): Job[] {
  const filteredJobs: Job[] = [];

  for (let i = 0; i < jobs.length; i++) {
    const { role, level, languages, tools } = jobs[i];
    const jobDescriptions = [role, level, ...languages, ...tools];

    if (filters.every((filter) => jobDescriptions.includes(filter))) {
      filteredJobs.push(jobs[i]);
    }
  }

  return filteredJobs;
}
