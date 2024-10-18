import { css, cx } from "@emotion/css";
import { desaturatedDarkCyan, lightGrayCyanBackground, filterContext } from "./data/data";
import FilterBar from "./components/FilterBar/FilterBar";
import JobList from "./components/JobList/JobList";
import { useReducer } from "react";
import { filterReducer } from "./utils/filterUtils";
import { useClientWidth, useMainHeight } from "./utils/hooks";

function App() {
  const [filters, filterDispatch] = useReducer(filterReducer, []);

  const mainHeight = useMainHeight(filters);
  const clientWidth = useClientWidth();

  const mainContentHeight = css`
    height: ${mainHeight};
  `;

  const bgHeader = clientWidth <= 600 ? "bg-header-mobile.svg" : "bg-header-desktop.svg";

  return (
    <>
      <header className={header}>
        <img src={`/images/${bgHeader}`} alt="Background image for the header section" />
      </header>
      <main className={cx(mainContent, mainContentHeight)}>
        <filterContext.Provider value={{ filters, filterDispatch }}>
          <FilterBar />
          <JobList />
        </filterContext.Provider>
      </main>
    </>
  );
}

export default App;

const header = css`
  width: 100%;
  height: 18vh;
  background-color: ${desaturatedDarkCyan};

  img {
    width: inherit;
    height: 100%;
    object-fit: cover;

    @media (max-width: 600px) {
      object-fit: fill;
    }
  }
`;

const mainContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${lightGrayCyanBackground};

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;
