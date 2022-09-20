import React from 'react'

const Header = ()=>{
    return(
        <header>
            <div>
                <div>
                    <ul>
                        <li>
                        <a href='#'>PRODUCTOS</a> 
                        </li>
                        <li>
                           <a href='#'>ORDENAR POR</a> 
                        </li>
                    </ul>
                </div>
                
            
                <div className='cart'>
                    <box-icon name="cart"></box-icon>
                <span className='itemTotal'>0</span>
                </div>
            </div>

        </header>
    )
}

export default Header;
