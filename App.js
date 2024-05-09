import React from "react";
import ReactDOM from "react-dom/client";


// using core React
const heading = React.createElement("div", {id: "Parent"}, 
    ["I am Parent", React.createElement("div", {id: "children"}, 
    [React.createElement("h2", {id: "child1"},"I am h2"), React.createElement("h3", {id: "child2"},"I am h3")]
)]
);

//  using JSX
const heading2 = (<h1 className="Par">This is created using JSX</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => <h1>This is Functional Component</h1>

root.render([heading, heading2, <HeadingComponent />]);