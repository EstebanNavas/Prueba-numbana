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
            <h1 className='title'>PRODUCTOS</h1>
        
          {products !== null ? (
              products.map( product =>(
                <div className='productos'> 

                   <div className='producto'>

                       <div className='producto_image'>
                        <img src={product.banner} alt=""></img>
                       </div>

                        <div className='producto_resumen'>

                          <div key={product.id}>
                          <h1>{product.nombre}</h1>
                          <p>Tipo de servicio: {product.tipo_servicio} </p>
                          <p> Calificacion {product.calificacion} </p>
                          <p className='price'>Precio ${product.precio} </p>
                          </div>
                          <div className='button'>
                            <button className='btn'>añadir al carrito</button>
                          </div>
                    
                        </div>
                    </div>

                </div>
                
            ))
          ) : ("no hay productos")}  
        </>
    )
}

export default Home