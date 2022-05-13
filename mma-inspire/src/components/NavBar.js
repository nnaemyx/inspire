import React from 'react';
import {Outlet, Link} from "react-router-dom";
import "../../src/NavBar.css";
import Logo from '../../src/logo1.png';



const NavBar = () => {
  return (
   <>
        <nav className='navbar'>
       <img src={Logo} alt='logo' className='logo'></img>
       <ul className='navlinks'>
           <Link to="/" className='home'>
               <li>Home</li>
           </Link>

           <Link to="/about" className='about'>
               <li>About</li>
           </Link>

           <Link to="/academy" className='academy'>
               <li>Academy</li>
           </Link>

           <Link to="/blog" className='blog'>
               <li>Blog</li>
           </Link>

           <Link to="/contact" className='contact'>
               <li>Contact</li>
           </Link>

           <Link to="/login" className='login'>
               <li>Login</li>
           </Link>

           <Link to="/register" className='register'>
               <li>Register</li>
           </Link>

           <Link to="/shop" className='shop'>
                <li>
                    <div class="dropdown">
                        <button class="dropbtn">Shop</button>
                        <div class="dropdown-content">
                            <Link to="/custommade" className='custommade'>
                                <li>Custome made</li>
                            </Link>

                            <Link to="/readytowear" className='readytowear'>
                                <li>Ready to wear</li>
                            </Link>
                        </div>
                    </div>
                </li>
           </Link>

       </ul>
       <Outlet/>
   </nav>   
   </>
  )
}

export default NavBar