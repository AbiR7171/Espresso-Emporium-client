import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/more/logo1.png"
import { AuthContext } from "../Route/AuthProvidor";
import { Icon } from '@iconify/react';

const DashBoardLayout = () => { 

  //  context api call 

     const {user}=useContext(AuthContext) ;


    
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */} <Outlet/>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-[#5041BC] text-base-content ">
            {/* Sidebar content here */} 
            <li 
               
            >
              
             <div className="relative">
                <img src={logo} className="w-14 h-14" alt="" />
                <p className='text-white font-bold  mainFont absolute ms-12 mt-2'>Espresso Emporium</p>
             </div>
            
            </li> 

            <hr className="divider" />
            {/* logo end */} 


            {/* user list start */} 
             {
                user && <ul>
                 <li className="font-serif"><Link><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-2 justify-center font-bold text-[16px]"><Icon icon="solar:home-bold" /><p>User Home</p></div></Link></li>

                 <li className="font-serif"><Link><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[16px]"><Icon icon="mingcute:love-fill" /><p>Love Cart</p></div></Link></li>

                 <li className="font-serif"><Link><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[16px]"><Icon icon="mdi:cart" /><p>Coffee Cart</p></div></Link></li>
                </ul>
             }

           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
