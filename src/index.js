import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import MyComponent from "./Components/classBasedComponent";
// import MyStateComponent from "./Components/State/classComponent";
// import MyStateFunctionalComponent from "./Components/State/functionalComponent";
// import LifeCycleMethodsExample from "./Components/lifeCycleMethods/class";
// import FunctionalComponentWithHooks from "./Components/lifeCycleMethods/function";
// import EmptyArray from "./Components/Hooks/useEffect/emptyArray";
// import NoArray from "./Components/Hooks/useEffect/noArray";
// import ValuesInArray from "./Components/Hooks/useEffect/ValuesInArray";
// import Parent from "./Components/Hooks/useCallback/Parent";
// import InputRef from "./Components/Hooks/useRef";
import Todo from "./Components/TODO";
// import ApiCall from "./Components/API_Call";
import AppRoutes from "./Components/Routing/appRoutes";
import Counter from "./Components/Context_Counter/counter";
import { CounterProvider } from "./Components/Context_Counter/context/counterProvider";
import ViewCounter from "./Components/Context_Counter/viewCounter";
import Test from "./Components/Context_Counter/test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `50px`,
      }}
    >
      <CounterProvider>
        <Counter />
        <ViewCounter />
      </CounterProvider>

      <Test />

      {/* <Todo /> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
