import React from 'react'
import { useStateValue } from './ServiceProvider'
import './Product.css'
import {Link} from 'react-router-dom'
import { ref, push, set, child } from "firebase/database";
import {database} from './firebase'

function Product({product}) {
    const [{user, basket}, dispatch] = useStateValue()

    const productAlreadyInBasket = () => {
        for(let i = 0; i < basket.length; ++i){
            if(basket[i].id === product.id){
                return true;
            }     
        }
        return false;
    }
    const addToBasket = () => {
        if(!user) return;
        const flag = productAlreadyInBasket();
        if(flag === true){
            return;
        }
          // dispatch({
        //     type: "ADD_TO_BASKET",
        //     item: {
        //         id: product.id,
        //         title: product.title,
        //         price: product.price,
        //         rating: product.rating,
        //         image: product.image
        //     }
        //  }
        // )
        const postAddIdRef = ref(database, 'users/'+user.uid+'/basket');
        const newpostAddIdRef = push(postAddIdRef);
        set(newpostAddIdRef, product.id );
        console.log("Item Added From Home");

    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{product.title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{product.price}</strong>
                </p>
                <div className='product__rating'>
                    { 
                        Array(product.rating)
                        .fill()
                        .map( (_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={product.image} alt=''/>
            <Link to= { !user && '/login'} className='product__addButton'>
                <button onClick={addToBasket}>Add To Basket</button>
            </Link>
        </div>
    )
}


export default Product
