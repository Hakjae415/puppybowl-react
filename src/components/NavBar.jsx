import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <h1>NavBar</h1>
            <Link to="/pups">Home</Link>
            <Link to="/pups/id" >See One Pup</Link>
            <Link to="/pups/register">Register</Link>
        </>
    )
}

export default NavBar