import React from 'react'

function Basket(props) {
    const {cartItems,onAdd,onRemove}=props;
    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    const taxPrice=itemsPrice*0.13;
    const shippingPrice=itemsPrice>2000 ? 0 :50;
    const totalPrice=itemsPrice+taxPrice+shippingPrice;
    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <hr /><br />
            <div>{cartItems.length===0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item)=>(
                <>
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={()=>onAdd(item)} className='add'>+</button>
                        <button onClick={()=>onRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='co-2 text-right'>
                        {item.qty} X {item.price.toFixed(2)}
                    </div>
                </div>
                <hr></hr><hr />
                </>
            ))}
            {cartItems.length!==0 && (
            <>
                <hr></hr>
                <div className="row nice">
                    <div className='col-2'>Item Price</div>
                    <div className='col-1 text-rght'>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row nice">
                    <div className='col-2'>Tax Price</div>
                    <div className='col-1 text-rght'>${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row nice">
                    <div className='col-2'>Shipping Price</div>
                    <div className='col-1 text-rght'>${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row nice">
                    <div className='col-2'><strong>Total Price</strong></div>
                    <div className='col-1 text-rght'>${totalPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <button onClick={()=>alert('You have successfully purchased the Items, Thank you!!')}>Checkout</button>
                </div>
            </>
            )}
        </aside>
    );
}

export default Basket
