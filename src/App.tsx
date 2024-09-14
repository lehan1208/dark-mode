import React, { useState } from "react";
import "./App.css";
import { Toggle } from "./components/Toggle";
import useLocalStorage from "use-local-storage";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className="App" dark-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hello world!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};
