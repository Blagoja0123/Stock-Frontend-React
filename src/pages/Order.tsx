
import React, { useState } from 'react'
import "../style/order.scss"
import { useMutation } from '@tanstack/react-query';
import { OrderInput } from '../models/order.schema';
import { addOrder } from '../services/OrderService';
import Navbar from '../components/Navbar';
import CartItems from '../components/CartItems';
import { getUserFromCookie } from '../utils/cookieTools';

function Order() {
    const [recipiant, setRecipiant] = useState<string>('');
    const {mutate} = useMutation(["addOrder"], (values: OrderInput) => addOrder(values), {
        onSuccess: () =>{
            console.warn("Successfully placed order");
        }
    });
    const user = getUserFromCookie();

    if(!user){
        return <p>Cannot order while logged out</p>
    }

    const handleChange = (e: any) =>{
        e.preventDefault();
        setRecipiant(e.target.value)
    }

    const handleButton = () =>{
        let values: OrderInput = {
            userId: user?.id,
            recipiant: recipiant,
            orderCartId: user?.orderCartId,
        }
        console.log(values);
        mutate(values);
    }

    return (
    <>
        <Navbar/>
        <div className='orderContainer'>
            <div className="orderWrapper">
                <div className="orderSection left">
                    <label htmlFor="input">Intended recipiant: </label>
                    <input type="text" onChange={handleChange}/>
                    <button onClick={handleButton}>Place order</button>
                </div>
                <div className="orderSection">
                    <CartItems/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Order