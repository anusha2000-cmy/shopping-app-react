import React from 'react';
import { useNavigate } from 'react-router';

function Cart({
    cartItems,
    deleteItemFromCartFunction,
    totalAmountCalculationFunction,
    setCartItems,
}) {
const navigate=useNavigate();    
return (
<div className={`cart ${cartItems.length > 0 ? 'active' : 'empty'}`}>
    <h2>Shopping Cart</h2>
    {cartItems.length === 0 ? (
    <p className="empty-cart">Your cart is empty.</p>
    ) : (
<div>
    <ul>
        {cartItems.map((item) => (
            <li key={item.product.id} className="cart-item">
                <div>
                    <div className="item-info">
                        <div className="item-image">
                            <img src={item.product.image} 
                                alt={item.product.name} />
                        </div>
                        <div className="item-details">
                            <h3>{item.product.name}</h3>
                            <p>Price: ₹{item.product.price}</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-actions">
                            <button
                                className="remove-button"
                                onClick={() => 
                                deleteItemFromCartFunction(item.product)}>
                                Remove Product
                            </button>
                            <div className="quantity">
                            <button 
                                    onClick={() => {
                                    setCartItems((prevCart) => {
                                        const updatedCart = prevCart.map(
                                        (prevItem) =>
                                        prevItem.product.id === item.product.id
                                                ? { ...prevItem, quantity:
                                                Math.max(item.quantity - 1, 1) }
                                                : prevItem
                                        );
                                        return updatedCart;
                                    })
                                }}>-</button>
                                <p className='quant'>{item.quantity} </p>
                                <button style={{ margin: "1%" }} 
                                    onClick={() => {
                                    setCartItems((prevCart) => {
                                        const updatedCart = prevCart.map(
                                        (prevItem) =>
                                        prevItem.product.id === item.product.id
                                                ? { ...prevItem, quantity: 
                                                item.quantity + 1 }
                                                : prevItem
                                        );
                                        return updatedCart;
                                    })
                                }}>+</button>                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
    <div className="checkout-section">
        <div className="checkout-total">
            <p className="total">Total Amount: 
                ₹{totalAmountCalculationFunction()}
            </p>
        </div>
        <button
            className="checkout-button"
            disabled={cartItems.length === 0 || 
            totalAmountCalculationFunction() === 0}
            onClick={() => { 
                navigate('/checkout');
                setCartItems([]);
            } }
        >
            Proceed to Checkout
        </button>
    </div>
</div>
            )}
</div>
    );
}

export default Cart;