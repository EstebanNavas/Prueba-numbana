import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home/Home'
import ShoppingCard from './shoppingCard/ShoppingCard'
import 'boxicons'
function App(){
    return(
        <div className="App">
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