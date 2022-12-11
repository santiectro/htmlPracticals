import axios from "axios";
import { useEffect, useState } from "react";
import TextInput from "../TextInput";

const ProductForm = ({product, handleSubmit, title}) => {
  const defautlValues = {
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    status: "",
    ...product
  };

  const [values, setValues] = useState(defautlValues);
  const { name, description, price, imageUrl, status } = values;

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  useEffect(()=> {
    setValues({...product})
  }, [product])

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
  });

  const inpFile = document.getElementById("other-btn")
  const container = document.getElementById("preview")
  const previewImage = document.getElementById("image-preview")
  const [file, setFile] = useState();



  const onFileChange = async (event) => {
    const fileChosen = event.target.files[0]
      try {
        if (fileChosen) {
          console.log("IN?")
          const reader = new FileReader();
          previewImage.style.display="block"
          reader.addEventListener("load", function () {
            console.log(this);
            previewImage.setAttribute("src", this.result)
            });
          reader.readAsDataURL (fileChosen);
        // setFile(event.target.files[0]);
  
        const formData = new FormData();
        formData.append("file", fileChosen, fileChosen.name);
        const response = await axios.post(
          "http://localhost:3000/upload-images",
          formData
        );
        setValues({ ...values, imageUrl: response.data.url });
      }} catch (error) {
        console.log(error);
      }
  };

  const onFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file, file.name);
      const response = await axios.post(
        "http://localhost:3000/upload-images",
        formData
      );
      setValues({ ...values, imageUrl: response.data.url });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-form" id="made-up">
      <form onSubmit={(event)=> {
        event.preventDefault()
        handleSubmit({
          name,
          description,
          price,
          imageUrl,
          status,
        });

      }} id="submission">
        <h3>{title}</h3>
        <label>Product name</label>
        <TextInput
          id="product-name"
          name="name"
          type="text"
          placeholder="Enter a Product name"
          error={errors.name}
          value={name}
          onChange={(event) => onChange(event)}
        />
        <label>Description</label>
        <TextInput
          id="description"
          name="description"
          type="text"
          placeholder="Enter a description"
          error={errors.name}
          value={description}
          onChange={(event) => onChange(event)}
        />
        <label>Price of product</label>
        <TextInput
          id="price"
          name="price"
          type="number"
          placeholder="Enter price"
          error={errors.name}
          value={price}
          onChange={(event) => onChange(event)}
        />

        {/* <select id="status" name="status" onChange={(event) => {
                    setStatus(event.target.value);
                }}>
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                </select> */}
        <input
          type="file"
          id="product-image"
          name="product-image"
          onChange={onFileChange}
        />
        <br></br>
        <div id="preview" class="hidden">
          <img src="" alt="Preview" id="image-preview"/>
          <span>Drag file</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
