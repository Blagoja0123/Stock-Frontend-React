
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getProductById } from '../services/ProductService';
import { CartProduct, CartProductSchema, Product } from '../models/product.schema';
import { addItemToCart } from '../services/CartService';
import { getUserFromCookie } from '../utils/cookieTools';

function ProductPage() {

    const location = useLocation();
    const pathArr = location.pathname.split("/");
    const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState<Product>(null);
    const id = parseInt(pathArr[2]);

    const user = getUserFromCookie();

    const {data, error, isLoading} = useQuery(["product", {id}], () => getProductById(id), {
        onSuccess: () =>{
            setProduct(data);
        }
    })
    
    const {mutate} = useMutation(["addToCart"], (product: CartProduct) => addItemToCart(product))

    

    const handleChange = (e: any) =>{
        e.preventDefault();
        setQuantity(e.target.value);
    }

    const handleButton = () =>{
        if(!user){
        return <p>Cannot add item to cart when not logged in</p>
        }
        let values: CartProduct = {
            userId: user.id,
            productId: product?.id,
            productName: product?.name,
            price: product?.price,
            quantity: quantity,
        };
        mutate(values);
    }
  return (
    <>
        <div>{product?.name}</div>
        <input type="number" name="" id="" onChange={handleChange}/>  
        <button onClick={handleButton}>Add to cart</button>
    </>
  )
}

export default ProductPage;