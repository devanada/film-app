import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailMovie from "../pages/DetailMovie";
import MyFavorite from "../pages/MyFavorite";
import TestPage from "../pages/TestPage";

export default class App extends Component {
  render() {
    return (
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
    );
  }
}
