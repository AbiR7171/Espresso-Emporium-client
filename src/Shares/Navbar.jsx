import React, { useState } from 'react';
import logo from '../assets/images/more/logo1.png';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { AuthContext } from '../Route/AuthProvidor';

const Navbar = () => {

  const{user, handlesignOut}=useContext(AuthContext)

  const[show, SetShow]=useState(false)

    return (
        <div className='navBack flex items-center '>

            <div className='flex justify-between items-center gap-2 container mx-auto '>

               <div className='flex items-center '>

               <img src={logo} alt="logo" className='w-14' />

                <p className='text-white  text-2xl mainFont'>Espresso Emporium</p>

               </div>

               <ul className='flex items-center gap-5'>

             <li title='Home'>  <Link to="/"><Icon icon="solar:home-bold-duotone" className='text-red-200 text-4xl' /></Link></li>

              
              
             
               
               <li title='AllCoffee'>
               <Link to="/allCoffee">
                <Icon icon="game-icons:coffee-cup" className='text-4xl text-red-200 ' />
                </Link>
               </li>

              <li title='AllChef'>
              <Link to="/chef">
                <Icon icon="simple-icons:codechef" className='text-4xl text-red-200 ' />
                </Link>
              </li>

               </ul>

            <div>
            {
              user ? <div onClick={()=>SetShow(!show)} className="avatar online mt-2">
              <div title="click" className="w-14  rounded-full ">
                <img  src={user?.photoURL} />
              </div>
              </div>
               :
                <div title='Login'>
                <Link to="/signup">
               <Icon icon="uis:signout" className='text-red-200 text-4xl' rotate={1} />
               </Link>
           </div>
             }
            </div>
 
                <div 
                className={`bg-black w-64 mainFont rounded-xl p-6 mt-52 absolute z-20 ${show ? " right-3 -top-36 duration-500" :  "-top-[500px] duration-500 right-0  "} `}
                > 

               
                <p className="text-2xl text-white flex gap-2"> <Icon icon="iconamoon:profile-fill" /> Profile</p> 

                <hr className='mt-3 ' /> 

                <p onClick={handlesignOut} className='text-2xl text-white flex gap-2 mt-3'> <Icon icon="humbleicons:logout" /> LogOut</p> 

                <hr  className='mt-3'/> 

               <Link to="/dashboard">
               <p className='mt-3 flex items-center text-white text-2xl gap-1'><Icon icon="uim:chart" className='text-white  text-4xl'  />DashBoard</p>
               </Link>
                 

                </div>

            </div>
           
          

        </div>
    );
};

export default Navbar;