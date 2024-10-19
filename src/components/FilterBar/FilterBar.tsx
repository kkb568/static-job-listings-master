import { css, cx } from "@emotion/css";
import { darkGrayCyan, desaturatedDarkCyan, filterContext } from "../../data/data";
import FilterContent from "./FilterContent";
import { getFilterId } from "../../utils/mainUtils";
import { useContext } from "react";

export default function FilterBar() {
  const { filters, filterDispatch } = useContext(filterContext);

  const filterList = filters.map((filter) => {
    const filterId = getFilterId(filters, filter);

    return <FilterContent key={filterId} content={filter} />;
  });

  const filterBarVisible = css`
    visibility: ${filters.length === 0 ? "hidden" : "visible"};
  `;

  return (
    <span className={cx(filterBar, filterBarVisible)} aria-label="Filter bar for showing the filters">
      <span className={filterListStyle}>{filterList}</span>
      <button onClick={() => filterDispatch && filterDispatch({ type: "removeAllFilters", filter: null })}>Clear</button>
    </span>
  );
}

const filterBar = css`
  display: grid;
  align-items: center;
  width: 74em;
  height: fit-content;
  padding: 1em 0;
  background-color: white;
  border-radius: 0.3em;
  margin-top: -2em;
  margin-bottom: 4em;
  box-shadow: 0 10px 30px -20px ${desaturatedDarkCyan};

  > button {
    cursor: pointer;
    position: absolute;
    justify-self: end;
    margin-right: 2em;
    font-family: "League Spartan Bold";
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 1.1em;
    color: ${darkGrayCyan};

    &:hover {
      text-decoration: underline;
      color: ${desaturatedDarkCyan};
    }

    @media (max-width: 600px) {
      margin-right: 1em;
    }
  }

  @media (max-width: 1000px) {
    width: 39em;
  }

  @media (max-width: 600px) {
    width: 21em;
    margin-left: 1em;
  }
`;

const filterListStyle = css`
  display: flex;
  gap: 1em;
  margin-left: 2em;

  @media (max-width: 1000px) {
    width: 30em;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    width: 15em;
  }
`;
