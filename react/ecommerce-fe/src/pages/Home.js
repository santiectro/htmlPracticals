import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav className="navigation">
                <ul className="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/create-product"> Create Product </Link>
                </li>
                <li>
                <Link to="/log-in"> Log In </Link>
                </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        
        </>
    )

}

export default Home