import RestaurantCard, { withVegNonVegLogo } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { SWIGGY_URL_BANGLORE, SWIGGY_URL_JAIPUR, CORS_PROXY_BYPASS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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
    const fetchedCards = jsonData?.data?.cards;
    const cardResult = fetchedCards.filter(c => c?.card?.card?.gridElements?.infoWithStyle?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle");
    const fetchedResult = cardResult[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // const fetchedRes = jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRes(fetchedResult);
    setFilteredRestaurants(fetchedResult);
  }


  const onlineStatus = useOnlineStatus();
  const RestaurantWithLabel = withVegNonVegLogo(RestaurantCard);
  const { loggedinUser, setUserName} = useContext(UserContext);
  const resInfoObj = res.info;
  if(onlineStatus === false){
    return(
      <h1>
        Seems you are offline !!
      </h1>
    )
  }

  return (res.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchRes} onChange={(e) => (setSearchRes(e.target.value))}></input>
          <button className="px-4 py-2 m-4 bg-green-200 rounded-lg"
            onClick={() => {
              const filteredSearchRequest = res.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchRes.toLowerCase()));
              setFilteredRestaurants(filteredSearchRequest);
            }}  
          >Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 border-solid border-black bg-gray-300 rounded-sm" 
            onClick={() => {
              const filteredBasedOnRating = res.filter((restaurant) => (restaurant?.info?.avgRating > 4.4));
              // console.log(res[0]?.info?.avgRating);
              setFilteredRestaurants(filteredBasedOnRating);
            }
            }
            >
            Top Rated Button
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
            <lable className="p-2">Change UserName?: </lable>
            <input className="border border-black p-1" 
            value = {loggedinUser}
            onChange={(e) => setUserName(e.target.value)}
            ></input>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
          {"veg" in restaurant.info ? <RestaurantWithLabel resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;