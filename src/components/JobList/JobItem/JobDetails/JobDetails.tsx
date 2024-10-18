import { css } from "@emotion/css";
import { desaturatedDarkCyan, jobContext, veryDarkGrayCyan } from "../../../../data/data";
import UpperJobDetails from "./UpperJobDetails/UpperJobDetails";
import LowerJobDetails from "./LowerJobDetails";
import { useContext } from "react";

export default function JobDetails() {
  const jobItem = useContext(jobContext);
  const { company, logo, position } = jobItem;

  return (
    <div className={jobDetails}>
      <img src={`/images/${logo}`} alt={`Logo for ${company} company`} />
      <div>
        <UpperJobDetails />
        <p>{position}</p>
        <LowerJobDetails />
      </div>
    </div>
  );
}

const jobDetails = css`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  align-items: center;

  > div:nth-child(2) > p {
    font-family: "League Spartan Bold";
    font-size: 1.4em;
    color: ${veryDarkGrayCyan};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${desaturatedDarkCyan};
    }

    @media (max-width: 600px) {
      font-size: 1.1em;
    }
  }

  @media (max-width: 600px) {
    display: block;

    img {
      width: 4em;
      margin-top: -4em;
    }
  }
`;
