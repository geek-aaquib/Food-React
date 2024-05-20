import { useEffect, useState } from "react";
import { RESTAURANT_URL_BANGLORE_PART1, RESTAURANT_URL_BANGLORE_PART2, RESTAURANT_URL_BANGLORE_ORG, RESTAURANT_URL_BANGLORE_ORG_FROMWEB } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_URL_BANGLORE_PART1 + resId);
        const jsonData = await data.json();
        console.log(jsonData);
        setResInfo(jsonData.data);
    };

    if (resInfo === null) return <Shimmer/>;
    
    const { name }  = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo?.cards[2]?.card?.card?.info);
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
    console.log(resInfo);

    const itemCardsInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards;

    console.log((itemCardsInfo).map((cardsInfo) => (
        cardsInfo?.card?.info?.name
    )));

    return(
    <div className="menu">
        <h1>{name}</h1>
        <h1>Menu</h1>
        <ul>
            {itemCardsInfo.map(cardsInfo => <li key={cardsInfo?.card?.info?.id}>{cardsInfo?.card?.info?.name}</li>)}
        </ul>
    </div>
    )
}

export default RestaurantMenu;