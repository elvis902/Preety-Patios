import ShoppingBasket from '@mui/icons-material/ShoppingBasket'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './Reducer'
import { useStateValue } from './ServiceProvider'
import './Subtotal.css'

function Subtotal() {
    const [{basket},dispatch] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
              renderText={(value) => (
                  <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/> This order contains a subtotal__gift
                    </small>
                  </>
              )}
               decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix="₹"
            />
            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
