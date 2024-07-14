import { useEffect, useState } from "react";
import { RESTAURANTMENU_URL_BANGLORE_PART1, CORS_PROXY_BYPASS_URL } from "./constants"; 

const useRestaurantMenu = (resId) => {
    //fetch logic
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fectAPI().catch((err) => {
                    console.log(err.message)
                });
    }, []);

    const fectAPI = async () => {
        const apiData = await fetch(CORS_PROXY_BYPASS_URL+RESTAURANTMENU_URL_BANGLORE_PART1+resId);
        const jsonData = await apiData.json();
        // const { data } = jsonData.data;
        setResInfo(jsonData.data);
    };
    

    return resInfo;
}

export default useRestaurantMenu;