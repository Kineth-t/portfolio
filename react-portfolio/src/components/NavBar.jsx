import { NavLink, Outlet } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <ul className="nav-bar">
                <NavLink to="">Home</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </ul>
            <main>
                <Outlet />
            </main>
        </>
       
    )
}