import React, {useEffect, useState} from 'react'
import { productAll } from '../../funciones/funciones'

const Home =() =>{
    const [products,setProducts] = useState(null)
    useEffect(()=>{
        productAll(setProducts)
    }, [] )

    return(
        <>
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