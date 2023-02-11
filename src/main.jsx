import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { ForWithCustomHook } from "./02-useEffect/ForWithCustomHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayaoutEffect/Layaout";
// import { Memorize } from "./06-memos/memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer"
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";


import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
  <MainApp />
  {/* </React.StrictMode>  */}
  </BrowserRouter>
);
