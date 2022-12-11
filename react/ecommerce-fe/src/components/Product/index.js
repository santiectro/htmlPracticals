// name, description, imageUrl, price
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import './style.css';

const Product = ({ product, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const { name, description, imageUrl, price, _id } = product;
  const handleClick =async() => {
    await axios.delete(`http://localhost:3000/products/${_id}`)
    onDelete()
}
/* const handleClickEdit =async() => {
  await axios.put(`http://localhost:3000/products/${_id}`, {"description": "Newset Description"})

} */


  return (
    <div className='productContainer'>
      <div>
        <img width='100px' src={imageUrl} alt={name} />
      </div>
      <div className='info'>
        <h3>{name}</h3>
        <p className='price'>${price}</p>
      </div>
      
      <div className='info'>
        <p>{description}</p>
        <div>
          <button className='delete-btn' onClick={handleClick}><i class="fa-solid fa-trash"></i></button>
          <button className='delete-btn'onClick={()=> {
            debugger
            // onEdit(product)
            navigate(`/edit-product?productId=${product._id}`)
          }}><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
        
      </div> 
    </div>
  );
};

export default Product;
