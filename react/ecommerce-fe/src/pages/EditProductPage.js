import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProduct = ({ }) => {
const { search } = useLocation();
const productId = new URLSearchParams(search).get('productId')
const [product, setProduct] = useState({})

useEffect(()=> {
    getProduct()
}, [])
    const handleSubmit = async (data) => {
      try {
        await axios.put(`http://localhost:3000/products/${productId}`, data);
        alert("Product updated succesfully");
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    };

    const getProduct = async() => {
    try {
        const result = await axios.get(`http://localhost:3000/products/${productId}`)
        setProduct(result.data.result)
    } catch (error) {
      alert(error.message);
    }

    }

  return (
    <>
        <ProductForm product={product} handleSubmit={handleSubmit} title={"Edit Product"}/>
    </>
  );
};

export default EditProduct;
