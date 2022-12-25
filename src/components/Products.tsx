import { QueryClient, useQuery, useQueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import {getProducts} from '../services/ProductService';
import '../style/products.scss';
import { Link } from 'react-router-dom';

function Products(){

    const {data, isLoading, error} = useQuery(['Products'], getProducts);
    
    
    if(isLoading){
        return <span>Loading...</span>
    }

    console.log(data);

    return (
        <div className='productsContainer'>
            <div className="productsWrapper">
                {error && <span>someting went wong</span>}
                {data?.map((product: any) =>{
                        return (
                            <Link to={`/product/${product.id}`}>
                                <div className="product" key={product.id}>
                                    <h1>{product.name}</h1>
                                    <p>{product.description}</p>
                                    <span> Price: {product.price}</span>
                                    <span> Quantity: {product.quantity}</span>
                                </div>
                            </Link>
                        )
                })}
            </div>
        </div>
    )
}

export default Products;