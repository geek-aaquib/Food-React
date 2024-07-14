import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCardCategory from "./RestaurantCardCategroy ";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    const [showItems, setShowItems] = useState(false);



    if (resInfo === null) return <Shimmer/>;
    
    const { name }  = resInfo?.cards[2]?.card?.card?.info;

    const itemCardsInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const cardCategoriesOfTypeItemCategory = itemCardsInfo.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");



    return(
    <div className="text-center">
        <h1 className="font-bold m-4 p-4 text-2xl">{name}</h1>
        <div>
        {cardCategoriesOfTypeItemCategory.map((cardCategory, index) => 
        <RestaurantCardCategory
        data = {cardCategory?.card?.card}
        key={cardCategory?.card?.card?.title}
        showIndex = {showIndex}
        showItems = {index === showIndex ? true : false}
        indexFromParent = {index}
        setShowIndices = {(indexValue) => setShowIndex(indexValue)}
        reverseShowItems = {showItemFlagFromChild => setShowItems(showItemFlagFromChild)}
        />
        )}
        </div>

    </div>
    )
}

export default RestaurantMenu;