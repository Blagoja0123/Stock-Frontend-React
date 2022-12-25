import { useMutation, useQuery } from "@tanstack/react-query";

import { getCartById, removeItem } from "../services/CartService";
import '../style/cartItems.scss';
import { useContext } from "react";
import { getUserFromCookie } from "../utils/cookieTools";
import { number } from "zod";

export function CartItems(){
    const user = getUserFromCookie();
    
    const id = user?.id;
    const {data, isLoading, error} = useQuery(["cart", {id}], () => getCartById(id));

    const {mutate} = useMutation(["removeItem"], (values: input) => removeItem(values));
    if(!user){
        return <p>Cannot load cart when not logged in</p>
    }

    

    if(isLoading){
        return <p>Loading...</p>
    }
    interface input {
        id: number,
        itemId: number,
    }
    const handleClick = (id: number, itemId: number) =>{
        const values: input = {
            id: id,
            itemId: itemId,
        }
        mutate(values);
    }

    return (
        <div className="center">
            <div className="cartContainer">
                <div className="cartWrapper">
                    {
                        data?.items.map((item: any) =>{
                            return (
                                <div className="item" key={item.id}>
                                    <h1>{item.productName}</h1>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}</p>
                                    <p>Total price: {item.totalPrice}</p>
                                    <button onClick={() => handleClick(data.id, item.id)}>Remove</button>
                                </div>
                            )
                        })
                    }
                    <button>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems;