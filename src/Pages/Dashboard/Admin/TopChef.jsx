import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const TopChef = () => {

    
    const [coffees, setCoffees]=useState([]);

    const [users, setUsers]=useState([])

    useEffect(()=>{

             axios.get("http://localhost:5000/allUsers")
             .then(res =>{
                    setUsers(res.data)
             })
    },[])


    

    useEffect(()=>{
         
         axios.get("http://localhost:5000/coffees")
         .then(res =>{
            setCoffees(res.data)
         })
    },[])



     console.log(coffees);


    const countUserByEmail = coffees?.reduce((acc, user)=>{
         
         const email = user.chef_email;
        acc[email]= (acc[email] || 0) + 1;
        return acc
            
    }, {});


    console.log(countUserByEmail);

  


     const topChef = Object.keys(countUserByEmail).map(email => {
          const top = users?.find( i =>  i.email === email);

          return top
     });

     console.log(topChef)



     const reduceTopUser = topChef.slice(0, 5)

    return (
        <div className='me-3'>
        <div className='bg-[#5041BC] bg-opacity-40 p-2 rounded text-white'>

          <p className='flex items-center justify-center  mainFont mt-2 text-[#5041BC] font-bold text-2xl'>Top Chef's <Icon icon="solar:chef-hat-bold" /></p>
         
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

export default TopChef;