import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const TopUsers = () => {
 
    const [carts, setCarts]=useState([]);

    const [users, setUsers]=useState([])

    useEffect(()=>{

             axios.get("http://localhost:5000/allUsers")
             .then(res =>{
                    setUsers(res.data)
             })
    },[])


    

    useEffect(()=>{
         
         axios.get("http://localhost:5000/allCart")
         .then(res =>{
                     setCarts(res.data)
         })
    },[])



    const countUserByEmail = carts?.reduce((acc, user)=>{
         
         const email = user.email;
        acc[email]= (acc[email] || 0) + 1;
        return acc
            
    }, {})

  


     const topUser = Object.keys(countUserByEmail).map(email => {
          const top = users?.find( i =>  i.email === email);

          return top
     });



     const reduceTopUser = topUser.slice(0, 5)


   

    
     

    return (
        <div className='me-3'>
          <div className='bg-[#5041BC] bg-opacity-40 p-2 rounded text-white'>

            <p className='flex items-center justify-center  mainFont mt-2 text-[#5041BC] font-bold text-2xl'>Top Users <Icon icon="mdi:users" /></p>
           
           <div className="overflow-x-auto  mt-2 ">
          <table className="table">
            {/* head */}

            <thead>
              <tr className='secFont text-gray-400'>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {reduceTopUser?.map((item, index) => {
                 return  <tr className='mainFont'>
                 <th>{index + 1}</th>
        
                 <td className='text-[12px]'>{item?.name}</td>
        
                 <td><img src={item?.photo} className='w-10 h-10 rounded' alt="" /></td>
        
                 <td>{item?.date}</td>
     
         
        
               </tr>
              })}
             
            </tbody>
          </table>
        </div>
        
           </div>
        
        </div>
    );
};

export default TopUsers;