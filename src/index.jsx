import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { MainPage } from "./components/MainPage.jsx";
import GenrePage from "./components/GenrePage.jsx";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/genres" element={<GenrePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

root.render(<App />);
