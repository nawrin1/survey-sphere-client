import { Link,NavLink } from "react-router-dom";
import './Navbar.css'
import { PiGlobeHemisphereEastDuotone } from "react-icons/pi";


const Navbar = () => {
    const navOptions = <>
        <li className="font-Sora font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="font-Sora font-semibold"><NavLink  to="/survey">Survey Page</NavLink></li>
       

       
    </>
    return (
        <div className="nav">
            <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navOptions}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl font-Sora"><PiGlobeHemisphereEastDuotone className="text-2xl font-bold"></PiGlobeHemisphereEastDuotone>SURVEY SPHERE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navOptions}
               
                </ul>
            </div>
            <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </label>
            <li><NavLink to="/register">Register</NavLink></li>
            </div>
            </div>  
            
        </div>
    );
};

export default Navbar;