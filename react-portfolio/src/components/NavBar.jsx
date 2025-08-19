import { NavLink, Outlet } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <ul className="nav-bar">
                <NavLink to="" className={({isActive}) => isActive ? "active" : ''} >Home</NavLink>
                <NavLink to="contact" className={({isActive}) => isActive ? "active" : ''}>Contact</NavLink>
            </ul>
            <main>
                <Outlet />
            </main>
        </>
       
    )
}