import React from 'react'

function Header(props) {
    const {countCartItems}=props
    return (
        <header className="row blockheader center">
            <div>
                <h1><a href="#/">Small Cart</a></h1>
            </div>
            <div>
                <a href="#/cart" className='wowo'>
                    Cart
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ):("")}
                </a>    
                <a href="#/signin" className='wowo'>Signin</a>
            </div>
        </header>
        
    )
}

export default Header
