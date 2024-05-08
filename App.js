import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {id: "Parent"}, 
    ["I am Parent", React.createElement("div", {id: "children"}, 
    [React.createElement("h2", {id: "child1"},"I am h2"), React.createElement("h3", {id: "child2"},"I am h3")]
)]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);