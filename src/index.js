import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import  MyApp  from "./MyApp";


ReactDOM.render(
  <StrictMode>
      <MyApp />
  </StrictMode>,
  document.getElementById("root")
);
