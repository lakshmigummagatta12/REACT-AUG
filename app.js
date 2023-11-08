import ReactDom from "react-dom";
import react from "react";
let header = react.createElement("h1",{},"HelloWorld");
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(header);