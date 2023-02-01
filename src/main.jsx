import React from "react";
import ReactDOM from "react-dom/client";


// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { ForWithCustomHook } from "./02-useEffect/ForWithCustomHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayaoutEffect/Layaout";
// import { Memorize } from "./06-memos/memorize";
import { MemoHook } from "./06-memos/MemoHook";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <MemoHook/>
  /* </React.StrictMode> */
);
