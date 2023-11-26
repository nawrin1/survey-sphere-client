import { Link,NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { PiGlobeHemisphereEastDuotone } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useSurveyor from "../../../hooks/useSurveyor";


const Navbar = () => {
    const {user,logout}=useContext(AuthContext)
    const navigate=useNavigate()
   
    
    const [isSurveyor]=useSurveyor()
    console.log(isSurveyor,"surveyor from nav")
    const navOptions = <>
        <li className="font-Sora font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="font-Sora font-semibold"><NavLink  to="/survey">Survey Page</NavLink></li>
        {
            isSurveyor && <li><Link to="/surveyDashboard/surveyCreate">SDashboard</Link></li>
        }
       

       
    </>
    const handleLogOut=()=>{
        logout()
        .then(() => {     
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'logged out successfully',
            showConfirmButton: false,
            timer: 1500

          
        })
        navigate('/')
    }
       
        )
            .catch(error => console.log(error));
    }
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
           
            {
            user ? <>
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                </div>
            </label>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <NavLink to="/login"><button className="font-Sora font-bold text-2xl btn btn-warning">Login</button></NavLink>
            </>
        }
          
            </div>
            </div>  
            
        </div>
    );
};

export default Navbar;