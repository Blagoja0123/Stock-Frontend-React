import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ProductSchema {
    name: string,
    description: string,
    quantity: number,
    price: number,
}

async function getProducts(){
    const {data} = await axios.get("https://localhost:7038/api/product/all");
    return data;
}

async function getProductById(id: number){
    const {data} = await axios.get(`https://localhost:7038/api/product/${id}`);
    return data;
}

async function addProduct(product: ProductSchema){
    const response = await axios.post(`https://localhost:7038/api/product/add`, product);
    return postMessage(response.data);
}


export {getProducts, getProductById, addProduct};