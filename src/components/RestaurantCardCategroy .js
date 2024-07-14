import { useRef, useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCardCategory = (props) => {
    // ⬇️ ▼ ➡️ ▶ ▶️

   /* // console.log(props);
    // const [cursorLogo, setCursorLogo] = useState("👇");
    // const [localShowItems, setLocalShowItems] = useState(props.showItems);

    // const handleClick = () => {
    //     props.setShowIndices();
    //     setLocalShowItems(!localShowItems);
    // }
    */

    const [items, setItems] = useState(props.showItems);

    /* const [cursorLogo, setCursorLogo] = useState("▼");
 */
    
    const handleClick = () => {
        setItems(!items);
        let indexValue = null;

        if(!items){
            indexValue = props.indexFromParent;
        }

        /* if(items){
            setCursorLogo("▼");
        }
        else{
            setCursorLogo("➤");

        } */

        props.setShowIndices(indexValue);
    }

    return (
        <div className="p-4 w-6/12 mx-auto my-4 shadow-lg ">
            <div className="flex justify-between">
                <span>{props.data.title} ({props.data.itemCards.length}) </span>
                <span className="cursor-pointer" onClick={() => handleClick()}>{" ▼ "}</span>
            </div>
            <div>
                {props.showItems && <ItemsList key={props.data.title} data={props.data.itemCards}/>}
                
            </div>


        </div>
    );
};

export default RestaurantCardCategory;