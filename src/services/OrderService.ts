import axios from 'axios';
import { OrderInput } from '../models/order.schema';
import { baseUrl } from '../utils/constants';

export async function addOrder(values: OrderInput){
    const res = await axios.post(`${baseUrl}/order/add`, values);

    return res;
}
