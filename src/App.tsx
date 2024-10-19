import { css, cx } from "@emotion/css";
import { desaturatedDarkCyan, lightGrayCyanBackground, filterContext } from "./data/data";
import FilterBar from "./components/FilterBar/FilterBar";
import JobList from "./components/JobList/JobList";
import { useReducer } from "react";
import { filterReducer } from "./utils/filterUtils";
import { useMainHeight } from "./utils/hooks";
import bgImgDesktop from "/images/bg-header-desktop.svg";
import bgImgMobile from "/images/bg-header-mobile.svg";

function App() {
  const [filters, filterDispatch] = useReducer(filterReducer, []);
  const mainHeight = useMainHeight(filters);

  const mainContentHeight = css`
    height: ${mainHeight};
  `;

  return (
    <>
      <header className={header}>
        <picture>
          <source media="(max-width: 600px)" srcSet={bgImgMobile} />
          <img src={bgImgDesktop} alt="Background image for the header section" />
        </picture>
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

  picture img {
    width: 100%;
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
