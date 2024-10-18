import { css } from "@emotion/css";
import { desaturatedDarkCyan, jobContext, veryDarkGrayCyan } from "../../../../../data/data";
import SpecialContent from "./SpecialContent";
import { useContext } from "react";

export default function UpperJobDetails() {
  const jobItem = useContext(jobContext);
  const { company, ifNew, featured } = jobItem;

  return (
    <div className={upperJobDetails}>
      <p>{company}</p>
      {ifNew && <SpecialContent content="New!" backgroundColor={desaturatedDarkCyan} />}
      {featured && <SpecialContent content="Featured" backgroundColor={veryDarkGrayCyan} />}
    </div>
  );
}

const upperJobDetails = css`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: -1.5em;

  > p:first-child {
    font-family: "League Spartan Bold";
    font-size: 1.1em;
    color: ${desaturatedDarkCyan};
  }

  @media (max-width: 600px) {
    margin-bottom: -1em;
  }
`;
