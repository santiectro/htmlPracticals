import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ProductForm from "../components/ProductForm";

const EditProduct = ({ product, showModal, onClose}) => {
    const [show, setShow] = useState(showModal)
    useEffect(()=> {
        setShow(showModal)
    }, [showModal])

    const handleSubmit = async(data)=> {
      try {
        await axios.put(`http://localhost:3000/products/${product._id}`, data);
        alert("Product updated succesfully");
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    }

  return (
    <>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
          onClose()
        }}
      >
        <ProductForm product={product} handleSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default EditProduct;
