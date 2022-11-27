import axios  from 'axios'
import TextInput from '../components/TextInput'
import { useState } from 'react'

const CreateProduct = () => {

    const [name, setname] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState ('')
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        name: '',
      });
    const [status, setStatus] = useState('Active')



    const handleSubmit = () => {
        const result = axios.post("http://localhost:3000/products", {
            name,
            description,
            price,
            imageUrl,
            status
        }) 

        console.log(result)
    }

    return ( 
    <>
    {/*     <label for="product"> Product name: </label>
            <input id="product" type="text" placeholder="Cate Bag" required />
            <label for="description">Description: </label>
            <input id="description" type="text" placeholder="Brief description" required />
            <label for="price">Price: </label>
            <input id="price" type="number" placeholder="70" required />
            <label for="image">Image Url: </label>
            <input id="image" type="text" required />
            <button type="submit"> Create Product </button> */}
        <form onSubmit={handleSubmit}>
            <h3>Create a product</h3>
            <TextInput
            name='product name'
            type='text'
            placeholder='Enter a Product name'
            error={errors.name}
            value={name}
            onChange={(event) => {
                setname(event.target.value);
            }}/>
            <TextInput
            name='description '
            type='text'
            placeholder='Enter a description'
            error={errors.name}
            value={description}
            onChange={(event) => {
                setDescription(event.target.value);
            }}/>
            <TextInput
            name='price'
            type='number'
            placeholder='Enter price'
            error={errors.name}
            value={price}
            onChange={(event) => {
                setPrice(event.target.value);
            }}/>
            <TextInput
            name='image url'
            type='text'
            placeholder='Image Url'
            error={errors.name}
            value={imageUrl}
            onChange={(event) => {
                setImageUrl(event.target.value);
            }}/>
            {/* <select id="status" name="status" onChange={(event) => {
                setStatus(event.target.value);
            }}>
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
            </select> */}
            <button type='submit'>Submit</button>
        </form>
    </> );
}
 
export default CreateProduct;