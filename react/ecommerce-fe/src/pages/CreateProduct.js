import axios from "axios";
import TextInput from "../components/TextInput";
import { useState } from "react";
import ProductForm from "../components/ProductForm";


const CreateProduct = () => {

    function clearChildren(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
          var e = element.childNodes[i];
          if (e.tagName) switch (e.tagName.toLowerCase()) {
              case 'input':
                switch (e.type) {
                    case "radio":
                    case "checkbox": e.checked = false; break;
                    case "button":
                    case "submit":
                    case "image": break;
                    default: e.value = ''; break;
                }
                break;
              case 'select': e.selectedIndex = 0; break;
              case 'textarea': e.innerHTML = ''; break;
              default: clearChildren(e);
          }
        }
    }

    const handleSubmit = async (data) => {
        try {
            await axios.post(`http://localhost:3000/products`, data);
            alert("Product added succesfully");
            clearChildren(document.getElementById("made-up"))
          } catch (error) {
            console.log(error);
            alert(error.response.data.message);
          }
    }
  return (
    <>
      <ProductForm title={"Create a Product"} handleSubmit={handleSubmit}/>
    </>
  );
};

export default CreateProduct;
