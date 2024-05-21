import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import WebSiteName from "./Components/WebsiteName";



function App()
{
  return<div className="container">
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
       <Route path="/websitename" element={<WebSiteName/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}
export default App;