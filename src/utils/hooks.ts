import { useEffect, useState } from "react";
import { jobs } from "../data/data";
import { getFilteredJobs } from "./filterUtils";

export function useMainHeight(filters: string[]): string {
  const [mainHeight, setMainHeight] = useState<"82vh" | "fit-content">("fit-content");

  useEffect(() => {
    const filteredJobs = filters.length === 0 ? jobs : getFilteredJobs(filters);

    if (filteredJobs.length < 3) {
      setMainHeight("82vh");
    } else {
      setMainHeight("fit-content");
    }
  }, [filters]);

  return mainHeight;
}

export function useClientWidth(): number {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return width;
}
