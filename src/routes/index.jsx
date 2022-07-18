import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailMovie from "../pages/DetailMovie";
import MyFavorite from "../pages/MyFavorite";
import TestPage from "../pages/TestPage";

import { ThemeContext } from "../utils/context";

const App = () => {
  const [theme, setTheme] = useState("light");

  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <Router>
        <Routes>
          {/* if (path === "/") */}
          <Route path="/" element={<HomePage />} />
          {/* else if (path === "detail/:movie_id") */}
          {/* 
          :movie_id <~~~ path param
          yang ngedefine path param adalah kita sendiri sebagai developer
           */}
          <Route path="detail/:movie_id" element={<DetailMovie />} />
          {/* else if (path === "favorites") */}
          <Route path="favorites" element={<MyFavorite />} />
          <Route path="test" element={<TestPage />} />
          {/* else */}
          <Route path="*" element={<div>404 Error Not Found</div>} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
