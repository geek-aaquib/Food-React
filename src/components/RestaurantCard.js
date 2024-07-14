import { CDN_URL2, CDN_URL_Latest } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
  } = resData?.info;

  let cuisinesMerge = cuisines.join(", ");

  if(cuisinesMerge.length > 30){
    cuisinesMerge = cuisinesMerge.substr(0,20) + ("...");
  }

  const {deliveryTime} = sla;

  return (
    <div className="m-4 p-4 w-[220px] h-[375px] bg-gray-200 hover:bg-gray-300 flex-wrap items-center">
      <img
        className="rounded-xl w-[200px] h-[150px]"
        alt="res-logo"
        src={CDN_URL_Latest + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisinesMerge}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export const withVegNonVegLogo = () => {
  return(props) => {
    return(
      <div>
        <div className="absolute inline-block w-4 h-4 border-2 border-green-500">
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        <RestaurantCard {...props}/>
      </div>
    )
  }
};

export default RestaurantCard;