import { css } from "@emotion/css";
import FilterButton from "./FilterButton";
import { getFilterId } from "../../../../../utils/mainUtils";
import { useContext } from "react";
import { jobContext } from "../../../../../data/data";

export default function FilterButtons() {
  const jobItem = useContext(jobContext);
  const { role, level, languages, tools } = jobItem;

  const filterButtonsContent = [role, level, ...languages, ...tools];

  const filterButtonsList = filterButtonsContent.map((content) => {
    const contentId = getFilterId(filterButtonsContent, content);

    return <FilterButton key={contentId} content={content} />;
  });

  return <div className={filterButtonsStyle}>{filterButtonsList}</div>;
}

const filterButtonsStyle = css`
  display: flex;
  gap: 1em;

  @media (max-width: 600px) {
    width: 15em;
    flex-wrap: wrap;
  }
`;
