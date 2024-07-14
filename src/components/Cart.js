import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const itemsListSelector = useSelector((store) => store.cart.items);
    console.log(itemsListSelector);

    const dispatchItem = useDispatch();
    const hanldeClearCart = () => {
        dispatchItem(clearCart());
    }

    return(
        <div className="text-center m-2 p-2">
        <h1 className="font-bold text-2xl"> Cart </h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 rounded-lg text-white bg-black" onClick={hanldeClearCart}>Clear Cart</button>
                {itemsListSelector.length === 0 && <h1> Cart is empty !!! Add items to cart</h1>}
                <ItemsList data={itemsListSelector} />
            </div>
        </div>
    )
};

export default Cart;