import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// Created separate components files for every components


// App Layout */

// LazyLoading
const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));



const AppLayout = () => {
    const [userName, setUserName] = useState();

    // authentication logic
    useEffect(() => {
        const data = {
            name: "Dummy User Damu"
        }

        setUserName(data.name);
    }, []);

    return(
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedinUser: userName, setUserName}}>
        <div className="AppLayout">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    </Provider>
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
                element: (
                    <Suspense fallback={<h1>Slow Internet.........</h1>}>
                        <About/>
                    </Suspense>

                ),
            },
            {
                path: "/contact",
                element: (
                <Suspense fallback={<h1>Slow Internet.........</h1>}>
                    <ContactUs/>
                </Suspense>)
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);