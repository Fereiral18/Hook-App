import React from "react";
import ReactDOM from "react-dom/client";
import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { ForWithCustomHook } from "./02-useEffect/ForWithCustomHook";

// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from "./02-useEffect/SimpleForm";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <FocusScreen />
  /* </React.StrictMode> */
);
