import React from 'react'
import Header from '../home/Header'
import 'boxicons'


const ShoppingCart =() =>{
    return(
        <>
            
            <Header/>
            <div className='carritos'>
                <div className='carrito'>
                    <div className='carrito_close'>
                        <box-icon name="x"></box-icon>
                    </div>
                    <h2>su carrito</h2>
                    <div className='carrito_center'>
                        <div className='carrito_item'>
                            <img src="" alt=""/>
                          <div>
                            <h3>title</h3>
                            <p className='price'>$</p>
                          </div>
                          <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className='cantidad'>1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                          </div>
                          <div className='remove_item'>
                          <box-icon name="trash"></box-icon>
                          </div>   
                        </div>
                    </div>
                    <div className='carrito_footer'>
                        <h3>Total: $</h3>
                        <button className='btn'>Payment</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ShoppingCart