import { css } from "@emotion/css";
import { FilterButtonProps } from "../../../../../data/dataTypes";
import { desaturatedDarkCyan, filterContext, lightGrayCyan } from "../../../../../data/data";
import { useContext } from "react";

export default function FilterButton({ content }: FilterButtonProps) {
  const { filterDispatch } = useContext(filterContext);

  return (
    <button className={filterButtonStyle} onClick={() => filterDispatch && filterDispatch({ type: "addFilter", filter: content })}>
      {content}
    </button>
  );
}

const filterButtonStyle = css`
  cursor: pointer;
  border: none;
  background-color: ${lightGrayCyan};
  color: ${desaturatedDarkCyan};
  font-family: "League Spartan Bold";
  width: fit-content;
  height: 2.5em;
  padding: 0 0.5em;
  border-radius: 5px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${desaturatedDarkCyan};
    color: white;
  }
`;
