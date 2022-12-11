import { useState } from "react";
import Modal from "../components/Modal";
import CreateProduct from "./CreateProduct";
const TestPage = () => {
    const [show, setShow] = useState(false)
    return (<div>

    <Modal show={show} onClose={()=> {setShow(false)}}>
        <CreateProduct />
    </Modal> 
    <button onClick={()=>setShow(true)}>Edit</button>
    </div> );
}
 
export default TestPage;