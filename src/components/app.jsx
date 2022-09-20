import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home/Home'
import ShoppingCart from './shoppingCart/ShoppingCart'
import 'boxicons'
function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/shoppingCart" element={<ShoppingCart></ShoppingCart>}></Route>
                </Routes>
            
            </BrowserRouter>

        </div>
    );
}


export default App;