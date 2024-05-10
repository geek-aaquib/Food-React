import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [res, setRes] = useState(resList);

    let listOfRestaurants = [
        {data:{
        type: "F",
        id: "334475",
        name: "KFC",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        avgRating: "3.8",
        totalRatings: 500,
        new: false,
      }},
      {data:{
        type: "F",
        id: "334476",
        name: "McD",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        avgRating: "3.8",
        totalRatings: 500,
        new: false,
      }},
      {data:{
        type: "F",
        id: "334477",
        name: "Domino",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        avgRating: "4.8",
        totalRatings: 500,
        new: false,
      }}
    ]
  // Local State Variable - Super powerful variable
//   const [listOfRestaurants, setListOfRestraunt] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() => 
        {
        const filteredRes = res.filter((restaurant) => (restaurant.data.avgRating > 4.3));
        setRes(filteredRes)
        }
        }>
            Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {res.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;