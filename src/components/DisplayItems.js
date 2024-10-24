import React, { useState } from "react";

function DisplayItems({items,addItemToCart}){
    return(
        <div className="product-list">
            {items.length === 0 ? (
                <p className="no-results">
                    Sorry, No matching Product found.
                </p>
            ) : (
                items.map((product,index) => (
                    <ProductDisplay key={index} product={product} addItemToCart={addItemToCart}/>
                ))
            )}
        </div>
    )
}

function ProductDisplay({product,addItemToCart}){
    const [disabled,setDisabled] = useState(false);

    const onClickFunction = (product) => {
        setDisabled(true);
        addItemToCart(product);
    }
    return(        
        <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button
                className={`add-to-cart-button ${disabled ? 'inactive' : 'active'}`}
                disabled={disabled}  
                onClick={() => onClickFunction(product)}>
                    {!disabled ? 'Add' : 'Added to Cart'}
                </button>
        </div>

    )
}

export default DisplayItems;