import { useDispatch } from "react-redux";
import useNonVegLogo from "../utils/useNonVegLogo";
import useVegLogo from "../utils/useVegLogo";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({data}) => {
    const VegLogo = useVegLogo();
    const NonVegLogo = useNonVegLogo();

    const dispatchItems = useDispatch();
    const handleClick = (item) => {
        dispatchItems(addItem(item));
    }
    return (
        <div>
            {data.map(item => 
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between"
            >
                <div>
                    {item.card.info.isVeg === 1? VegLogo:NonVegLogo}
                    <span className="m-2 p-2">{item.card.info.name}</span>
                    <div>
                    <span className="px-8 py-3">₹. {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <div>
                        <p className="px-8 py-3 font-light">{item.card.info.description}</p>
                    </div>
                </div>
                <div className="">
                    <button className="p-4 m-4 rounded-lg bg-cyan-200 text-black" onClick={() => handleClick(item)}> Add </button>
                </div>

            </div>
            )}
        </div>
    )
};

export default ItemsList;