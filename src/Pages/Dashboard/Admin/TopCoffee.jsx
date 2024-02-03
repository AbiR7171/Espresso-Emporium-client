import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const TopCoffee = () => {
    const [topCoffee, setTopCoffee]=useState([])

    useEffect(()=>{

             axios.get("http://localhost:5000/topCoffee")
             .then(res =>{
                console.log(res.data);
                setTopCoffee(res.data)
             })
    },[])

    return (
        <div className='me-3'>
          <div className='bg-[#5041BC] bg-opacity-40 p-2 rounded text-white'>

            <p className='flex items-center justify-center gap-1 mainFont mt-2 text-[#5041BC] font-bold text-2xl'>Top Coffees <Icon icon="simple-icons:coffeescript" /></p>
           
           <div className="overflow-x-auto  mt-2 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr className='secFont text-gray-400'>
                <th></th>
                <th>Coffee Name</th>
               
                <th>Cart</th>
                <th>Chef Name</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {topCoffee?.map((item, index) => {
                 return  <tr className='mainFont'>
                 <th>{index + 1}</th>
        
                 <td className='text-[12px]'>{item?.coffee_name}</td>
        
               
        
                 <td> {item?.cart}</td>
                 <td> {item?.chef}</td>
                 <td> {item?.price_bdt}</td>
{/*         
                 <td> <Link to={`/singleCoffee/${item.coffee_id}`}> <button className='bg-black text-white flex items-center gap-2 w-32 p-4 rounded'>Deatiels <p><Icon icon="carbon:folder-details-reference" /></p></button></Link></td> */}
        
               </tr>
              })}
             
            </tbody>
          </table>
        </div>
        
           </div>
        
        </div>
    );
};

export default TopCoffee;