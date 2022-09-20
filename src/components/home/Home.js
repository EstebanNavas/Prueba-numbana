import React, {useEffect, useState} from 'react'
import { productAll } from '../../funciones/funciones'
import Header from './Header'

const Home =() =>{
    const [products,setProducts] = useState(null)
    useEffect(()=>{
        productAll(setProducts)
    }, [] )

    return(
        <>
              <Header/>
          {products !== null ? (
              products.map( product =>(
                  <div key={product.id}>
                    <p>{product.nombre} </p>
                    <img src={product.banner} alt=""></img>
                </div>
                
            ))
          ) : ("no hay productos")}  
        </>
    )
}

export default Home