import { StrictMode } from "react";
import ReactDOM from "react-dom";
import  MyApp  from "./MyApp";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
      <MyApp />
  </StrictMode>
);
