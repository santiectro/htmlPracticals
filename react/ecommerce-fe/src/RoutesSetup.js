import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"
import CreateProduct from "./pages/CreateProduct"
import Home from "./pages/Home"


const RoutesSetup = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home />}>
                    <Route index element = {<ProductListing />}/>
                    <Route path="/log-in" element = {<LoginPage />} />
                    <Route path="/create-product" element = {<CreateProduct />} />
                    <Route path="/register" element = {<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>

    )
}


export default RoutesSetup;