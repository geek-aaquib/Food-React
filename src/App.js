import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


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
        <Outlet />
        {/* <Footer/> */}
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ]
    }
    // {
    //     path:
    // }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);