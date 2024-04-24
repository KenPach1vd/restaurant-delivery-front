import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" name="" id="" placeholder='First Name'/>
          <input type="text" name="" id="" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Region'/>
        <div className="multi-field">
          <input type="text" name="" id="" placeholder='Street'/>
          <input type="text" name="" id="" placeholder='House'/>
        </div>
        <div className="multi-field">
          <input type="text" name="" id="" placeholder='Phone number'/>
          <input type="text" name="" id="" placeholder='Apartment number'/>
        </div>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}$</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount()===0?0:2}$</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}$</b>
            </div>
          </div>
          <button >Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
