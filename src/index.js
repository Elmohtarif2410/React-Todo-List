import react from "react";
import { createRoot } from "react-dom/client";

// import App componant
import App from "./App";


// create Root 
const root = createRoot(document.getElementById("root"));


// Rendering
root.render(
  <App />
)