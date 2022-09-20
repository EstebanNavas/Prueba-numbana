import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home/Home'
import ShoppingCard from './shoppingCard/ShoppingCard'

function App(){
    return(
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/shoppingCard" element={<ShoppingCard></ShoppingCard>}></Route>
                </Routes>
            
            </BrowserRouter>

        </div>
    );
}


export default App;