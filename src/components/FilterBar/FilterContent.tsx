import { css } from "@emotion/css";
import { FilterButtonProps } from "../../data/dataTypes";
import removeIcon from "/images/icon-remove.svg";
import { desaturatedDarkCyan, filterContext, lightGrayCyan, veryDarkGrayCyan } from "../../data/data";
import { useContext } from "react";

export default function FilterContent({ content }: FilterButtonProps) {
  const { filterDispatch } = useContext(filterContext);

  return (
    <span className={filterContent}>
      <span>{content}</span>
      <button onClick={() => filterDispatch && filterDispatch({ type: "removeFilter", filter: content })}>
        <img src={removeIcon} alt="X symbol for signifying to remove filter" />
      </button>
    </span>
  );
}

const filterContent = css`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 2em;
  background-color: ${lightGrayCyan};
  border-radius: 0.2em;

  span {
    padding: 2em 0.5em;
    color: ${desaturatedDarkCyan};
    font-family: "League Spartan Bold";
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 0.5em;
    background-color: ${desaturatedDarkCyan};
    border: none;
    border-radius: 0 0.2em 0.2em 0;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${veryDarkGrayCyan};
    }
  }
`;
