import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { number } from 'zod';
import { CartProduct } from '../models/product.schema';


export async function getCartById(id: number | string | undefined | null){
    if(id === undefined || id === null){
        return null;
    }
    const data = await axios.get(`${baseUrl}/OrderCart/${id}`);
    return data.data;
}

interface test {
    id: number,
    itemId: number,
}

export async function addItemToCart(item: CartProduct){
    const res = await axios.put(`${baseUrl}/ordercart/addItem`, item);
    return res.data;
}

export async function removeItem(req: test){
    const res = await axios.put(`${baseUrl}/OrderCart/${req.id}/removeItem`, req.itemId);
    console.log(res);
    return res;
}