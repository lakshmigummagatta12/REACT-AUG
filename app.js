import ReactDom from "react-dom/client";
import react from "react";
let header = react.createElement("h1",{},"Hello world");
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(header);