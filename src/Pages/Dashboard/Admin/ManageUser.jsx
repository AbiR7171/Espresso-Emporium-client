import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageUser = () => {

        const[allUsers, setAllUsers] = useState([]);

        const roleRef = useRef();

        const handleRole = (user)=>{
            
                console.log(roleRef.current.value);

                console.log(user);

                axios.patch(`http://localhost:5000/updateRole/${user._id}`, {
                   role:roleRef.current.value
                })
                .then(res =>{
                         console.log(res.data);
                         if(res.data.modifiedCount > 0){
                          const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.onmouseenter = Swal.stopTimer;
                              toast.onmouseleave = Swal.resumeTimer;
                            }
                          });
                          Toast.fire({
                            icon: "success",
                            title: `${user?.name} is ${roleRef.current.value} now`
                          });
                         }
                })
           
        }


        useEffect(()=>{
               
                 axios.get("http://localhost:5000/allUsers")
                 .then(res =>{
                            console.log(res.data);
                            setAllUsers(res.data)
                 })
        },[])




    return (
        <div className='w-full h-full singleBg '>
              <p className='text-3xl  thirdFont  mt-4 mb-4 flex justify-center items-center text-[#5041BC]'>Manage User <Icon icon="fe:user"
          className='text-[#5041BC] text-5xl'
          /></p> 

<div className='bg-[#5041BC] bg-opacity-40 p-2 rounded text-white'>
           
           <div className="overflow-x-auto mt-10 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr className='secFont text-gray-400'>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Join Date</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((item, index) => {
                 return  <tr className='mainFont'>
                 <th>{index + 1}</th>
        
                 <td>{item?.name}</td>
                 <td>{item?.email}</td>
        
                 <td><img src={item?.photo} className='w-12 h-12 rounded' alt="" /></td>
        
                 <td>{item?.role}</td>
                 <td>{item?.date}</td>
                 
     


                 <td><select onChange={()=>handleRole(item)} ref={roleRef} className="select select-primary w-full max-w-xs text-red-600 outline-0 ">
                 <option disabled selected>{item?.role} </option>
                 <option>user</option>
                 <option>chef</option>
                 <option>admin</option>

                </select></td>
                 
             
        
               </tr>
              })}
             
            </tbody>
          </table>
        </div>
        
           </div>
        </div>
    );
};

export default ManageUser;