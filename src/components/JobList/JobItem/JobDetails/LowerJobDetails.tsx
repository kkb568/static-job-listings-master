import { css } from "@emotion/css";
import { darkGrayCyan, jobContext } from "../../../../data/data";
import { useContext } from "react";

export default function LowerJobDetails() {
  const jobItem = useContext(jobContext);
  const { postedAt, contract, location } = jobItem;

  return (
    <div className={lowerJobDetails}>
      <p>{postedAt}</p>
      <p>.</p>
      <p>{contract}</p>
      <p>.</p>
      <p>{location}</p>
    </div>
  );
}

const lowerJobDetails = css`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 20em;
  color: ${darkGrayCyan};
  margin-top: -1.5em;

  p:nth-child(2),
  p:nth-child(4) {
    margin-top: 0.5em;
  }

  @media (max-width: 600px) {
    margin-top: -1.2em;
  }
`;
