import React from 'react'
import './Checkout.css'
import { useStateValue } from './ServiceProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue()
    return (
        <div className='checkout'>
          <div className='checkout__left'>
            <img
            className='checkout__ad'
             src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/catpage_P3/PC_1500_gold.jpg'
             alt=''
            />

            {basket.length ? (
                <div>
                    <h1 className='checkout__title'>Your Shopping Basket</h1>

                    {/* List out all of the checkout products */}
                    {
                        basket.map( item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            ) : (
                <div className='checkout__title'>
                    <h1 >Your Shopping Basket is Empty</h1>
                    <p>
                        You have no items in your basket. to buy one or more items, Click
                        "Add to basket" next to the items.
                    </p>
                </div>
            )}
          </div>
          {basket.length > 0 && (
              <div className='checkout__right'>
                  <Subtotal/>
              </div>
          )}
        </div>
    )
}

export default Checkout
