import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/more/logo1.png"
import { AuthContext } from "../Route/AuthProvidor";
import { Icon } from '@iconify/react';
import axios from "axios";

const DashBoardLayout = () => { 

  //  context api call 

     const {user}=useContext(AuthContext) ; 


     const isAdmin = true;

     const isChef = false;



     

    
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center "> 
        
         {/* <div className="w-full bg-gradient-to-l from-gray-700 via-gray-900 to-black mb-auto p-1">
            
               <div className="flex items-center justify-end gap-2">
                    
                  <button className="p-2 bg-red-600 text-white rounded">Logout</button>
                  <img src={user?.photoURL} className="w-12 h-12 rounded-full" alt="" />

               </div>

         </div>  */}
         
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
          <ul className="menu p-4= w-60 clip min-h-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-base-content ">
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
             {/* {
                user && <ul>
                 <li className="font-serif"><Link to='/dashboard/user/Home'><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-2 justify-center font-bold text-[16px]"><Icon icon="solar:home-bold" /><p>User Home</p></div></Link></li>

                 <li className="font-serif"><Link to="/dashboard/user/loveCart"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[16px]"><Icon icon="mingcute:love-fill" /><p>Love Cart</p></div></Link></li>

                 <li className="font-serif"><Link to="/dashboard/user/cart"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[16px]"><Icon icon="mdi:cart" /><p>Coffee Cart</p></div></Link></li>

                 <li className="font-serif"><Link to="/dashboard/user/paymentHistory"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[14px]"><Icon icon="fluent:payment-16-filled" /><p>Payment History</p></div></Link></li> 

                 <hr className="divider" /> 

                 <li className="font-serif"><Link to="/"><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-6 justify-center font-bold text-[16px]"><Icon icon="solar:home-bold" /><p> Home</p></div></Link></li>

                </ul>
             }  */}


           {
                isAdmin && <ul>
                 <li className="font-serif"><Link to='/dashboard/admin/Home'><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-2 justify-center font-bold text-[16px]"><Icon icon="solar:home-bold" /><p>AdminHome</p></div></Link></li>

                 <li className="font-serif"><Link to='/dashboard/admin/manageUser'><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-2 justify-center font-bold text-[16px]"><Icon icon="fe:user" /><p>Manage User</p></div></Link></li>

                 <li className="font-serif"><Link to='/dashboard/admin/manageCoffee'><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-2 justify-center font-bold text-[16px]"><Icon  icon="ph:coffee-duotone" /><p>Manage Coffee</p></div></Link></li>

                 {/* <li className="font-serif"><Link to="/dashboard/admin/loveCart"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[16px]"><Icon icon="mingcute:love-fill" /><p>Total Love Cart</p></div></Link></li> */}

                 {/* <li className="font-serif"><Link to="/dashboard/admin/cart"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[14px]"><Icon icon="mdi:cart" /><p> TotalCoffee Cart</p></div></Link></li> */}
{/* 
                 <li className="font-serif"><Link to="/dashboard/admin/paymentHistory"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[14px]"><Icon icon="fluent:payment-16-filled" /><p>Total CheckOut</p></div></Link></li>  */}

                 <hr className="divider" /> 

                 <li className="font-serif"><Link to="/"><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-6 justify-center font-bold text-[16px]"><Icon icon="solar:home-bold" /><p> Home</p></div></Link></li>

                </ul>
             } 

 
{
                isChef && <ul>
                 <li className="font-serif"><Link to='/dashboard/chef/Home'><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-2 justify-center font-bold text-[16px]"><Icon icon="solar:home-bold" /><p>Chef Home</p></div></Link></li> 

                 <li className="font-serif"><Link to="/dashboard/chef/addNew"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[16px]"><Icon icon="zondicons:add-solid" /><p>Add New Coffee</p></div></Link></li>

                 <li className="font-serif"><Link to="/dashboard/chef/myCoffee"><div className="flex border rounded bg-white w-44 p-2  items-center gap-2 justify-center font-bold text-[#5041BC] text-[16px]"><Icon icon="ph:coffee-fill" /><p>My coffee</p></div></Link></li>

              

                 <hr className="divider" /> 

                 <li className="font-serif"><Link to="/"><div className="flex border rounded bg-white w-44 p-2 text-[#5041BC]  items-center gap-6 justify-center font-bold text-[16px]"><Icon icon="solar:home-bold" /><p> Home</p></div></Link></li>

                </ul>
             } 




             
           
          </ul> 

         
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
