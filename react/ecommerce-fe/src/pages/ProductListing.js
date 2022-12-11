import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteButton from '../components/DeleteBtn';
import Modal from '../components/Modal';
import Product from '../components/Product';
import EditProduct from './EditProduct';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  /* const data = {
    name: 'Apple',
    imageUrl:
      'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=',
    description: 'Sweet and delicious apple',
    price: 2,
  }; */
  const [products, setProducts]  = useState([])
  const [editProduct, setEditProduct] = useState(null)
  const getProducts = ()=> {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(getProducts, []);
  console.log(products.length === 0)

  
  return (
    <>
      <div className="overall-div-lol">
      {
      (products !== [] && (products.map((singleProduct) => {
        return (
          <>
            <Product product={singleProduct} onDelete={()=>{
             getProducts()}} onEdit={(product)=> {
              setEditProduct(product)}} />
          </>
        );
      })))}
      </div>
      {
        (products.length === 0 && (
          <div className='no-products'>
            <h3>No products have been created.</h3>
            <p><Link to='/create-product'>Create a Product</Link></p>
          </div>
        ) )
      }
      <EditProduct product={editProduct} showModal={editProduct!=null} onClose={()=> {
        getProducts()
        setEditProduct(null)}} 
        />
    </>
  );
};

export default ProductListing;
