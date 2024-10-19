import { css } from "@emotion/css";
import { JobItemProps } from "../../../data/dataTypes";
import { darkGrayCyan, desaturatedDarkCyan, jobContext } from "../../../data/data";
import FilterButtons from "./JobDetails/FilterButtons/FilterButtons";
import JobDetails from "./JobDetails/JobDetails";
import { useClientWidth } from "../../../utils/hooks";

export default function JobItem({ jobItem }: JobItemProps) {
  const { featured, company, position } = jobItem;
  const clientWidth = useClientWidth();

  const cyanLineOpacity = css`
    visibility: ${featured ? "visible" : "hidden"};
  `;

  return (
    <div className={jobItemStyle} aria-label={`${position} job application at ${company}`}>
      <div className={cyanLineOpacity} />
      <div className={jobContent}>
        <jobContext.Provider value={jobItem}>
          <JobDetails />
          {clientWidth <= 1000 && <div className={line} />}
          <FilterButtons />
        </jobContext.Provider>
      </div>
    </div>
  );
}

const jobItemStyle = css`
  width: fit-content;
  height: 5em;
  background-color: white;
  padding: 2em;
  margin-bottom: 2em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 10px 30px -20px ${desaturatedDarkCyan};

  > div:first-child {
    width: 5px;
    height: 9em;
    background-color: ${desaturatedDarkCyan};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.5em 0 0 0.5em;

    @media (max-width: 1000px) {
      height: 16em;
    }

    @media (max-width: 600px) {
      height: 20em;
    }
  }

  @media (max-width: 1000px) {
    align-items: flex-start;
    height: 12em;
    width: 35em;
  }

  @media (max-width: 600px) {
    margin-bottom: 4em;
    height: 16em;
    width: 17em;
    margin-left: 0.8em;
  }
`;

const jobContent = css`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;

  > div:last-child {
    position: absolute;
    justify-self: end;
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

const line = css`
  width: 100%;
  height: 1px;
  background-color: ${darkGrayCyan};
  opacity: 0.5;
  margin-bottom: 1.2em;

  @media (max-width: 600px) {
    width: 85%;
  }
`;
