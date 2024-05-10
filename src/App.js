import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// Created separate components files for every components
// // Header component
// const Header = () => {
//     return (
//     <div className = "header">
//         <div className="logo">
//             <img scr="https://i.pinimg.com/736x/65/f9/e5/65f9e51b368c5ec46145eb2eb7bdfb42.jpg"></img>
//         </div>
//         <div className="nav-items">

//         </div>
//     </div>
// )
// }

// // Body Component
// const Body = () => {
//     return(<div className = "body">this is body</div>)
// }


// // Fooer Component
// const Footer = () => {
//     return(<div className="footer">This is footer</div>)
// }

// App Layout
const AppLayout = () => {
    return(
    <div className="AppLayout">
        <Header />
        <Body/>
        {/* <Footer/> */}
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);