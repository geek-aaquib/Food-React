import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { SWIGGY_URL_BANGLORE, SWIGGY_URL_DELHI, SWIGGY_URL_MNNIT, CORS_PROXY_BYPASS_URL } from "../utils/constants";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    let url = CORS_PROXY_BYPASS_URL + SWIGGY_URL_BANGLORE;
    const data = await fetch(url);
    const jsonData = await data.json();
    // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const fetchedRes = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRes(fetchedRes);
    setFilteredRestaurants(fetchedRes);
  }

  // if (res.length === 0) {
  //   return <Shimmer/>
  // }

  return (res.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-bar" value={searchRes} onChange={(e) => (setSearchRes(e.target.value))}></input>
          <button 
            onClick={() => {
              const filteredSearchRequest = res.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchRes.toLowerCase()));
              setFilteredRestaurants(filteredSearchRequest);
            }}  
          >Search</button>
        </div>
        <button className="filter-btn" 
          onClick={() => {
            const filteredBasedOnRating = res.filter((restaurant) => (restaurant?.info?.avgRating > 4.3));
            // console.log(res[0]?.info?.avgRating);
            setFilteredRestaurants(filteredBasedOnRating);
          }
          }
          >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;