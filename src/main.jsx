import React from "react";
import ReactDOM from "react-dom/client";

// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import { SimpleForm } from "./02-useEffect/SimpleForm";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <SimpleForm />
  /* </React.StrictMode> */
);
