import * as React from "react";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Footer from "../pages/footer";
import Blog from "../pages/blog";
import { ThemeContext } from "../ThemeContext";
import { themes } from "../theme";
import NavBar from "./navbar";
import BigProject from "../pages/bigprojects";
import OpenSourceProject from "../pages/opensourceprojects";
import Achievements from "../pages/achievements";
import Skills from "../pages/skills";
import Home from "../pages/home";

function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const themeColors = themes[theme];

  // const [toggle, setToggle] = React.useState(false)
  // bg-[#171c28]

  return (
      <div
        className="px-32 font-aper"
        style={{
          backgroundColor: themeColors.background,
          color: themeColors.text,
        }}
      >
        <NavBar onToggleTheme={toggleTheme} />
        <Home/>
        <Skills />
        <Experience />
        <Education />
        <OpenSourceProject />
        <BigProject/>
        <Achievements />
        <Blog />
        <Footer />
      </div>
  );
}

export default App;
