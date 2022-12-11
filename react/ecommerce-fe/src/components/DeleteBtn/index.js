import axios from "axios";

const DeleteButton = ({id, onDelete}) => {
    const handleClick =async() => {
        await axios.delete(`http://localhost:3000/products/${id}`)
        onDelete()
    }
    return ( <button onClick={handleClick}>Delete</button> );
}
 
export default DeleteButton;