import axios from "axios";

const EditButton = ({id}) => {
    const handleClickEdit =async() => {
        await axios.put(`http://localhost:3000/products/${id}`, {"description": "Newset Description"})

    }
    return ( <button onClick={handleClickEdit}>Edit</button> );
}
 
export default EditButton;