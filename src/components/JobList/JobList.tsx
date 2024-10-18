import { useContext } from "react";
import { filterContext, jobs } from "../../data/data";
import JobItem from "./JobItem/JobItem";
import { getFilteredJobs } from "../../utils/filterUtils";

export default function JobList() {
  const { filters } = useContext(filterContext);

  const filteredJobs = filters.length === 0 ? jobs : getFilteredJobs(filters);

  const jobList = filteredJobs.map((job) => {
    const jobIndex = filteredJobs.indexOf(job);

    return <JobItem key={jobIndex} jobItem={job} />;
  });

  return <div>{jobList}</div>;
}
