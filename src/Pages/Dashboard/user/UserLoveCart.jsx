import React from 'react';
import useLoveCart from '../../../Hooks/useLoveCart';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const UserLoveCart = () => { 

      const [loveCart, refetch]=useLoveCart();
      console.log(loveCart); 



      const handleRemoveLoveCart = (coffee) =>{  

        console.log(coffee);


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) { 

                
        axios.delete(`http://localhost:5000/removeLoveCart/${coffee.coffee_id}`)
        .then(res =>{
               
                      if(res.data.deletedCount > 0 ){            
           refetch()

           const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: `${coffee.coffee_name} Deleted To Favorite`
          }) 

                      }
        })
             
            }
          })

      }
    return (
        <div className='w-full h-full bg-white px-20 singleBg'> 

          <p className='text-3xl  thirdFont  mt-4 flex justify-center items-center text-[#5041BC]'>Your Love Cart <Icon icon="mingcute:love-fill" 
          className='text-[#5041BC] text-7xl'
          /></p> 

   <div className='bg-[#5041BC] bg-opacity-40 p-2 rounded text-white'>
           
   <div className="overflow-x-auto mt-10 ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='secFont text-gray-400'>
        <th></th>
        <th>Coffee Name</th>
        <th>Coffee Image</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {loveCart?.map((item, index) => {
         return  <tr className='mainFont'>
         <th>{index + 1}</th>

         <td>{item?.coffee_name}</td>

         <td><img src={item?.coffee_picture} className='w-12 h-12 rounded' alt="" /></td>

         <td> ${item?.price}</td>

         <td> <Link to={`/singleCoffee/${item.coffee_id}`}> <button className='bg-black text-white flex items-center gap-2 w-32 p-4 rounded'>Deatiels <p><Icon icon="carbon:folder-details-reference" /></p></button></Link></td>

         <td> <button onClick={()=>handleRemoveLoveCart(item)} className='bg-red-600 text-white flex items-center gap-2 w-32 p-4 rounded'> Delete <p><Icon icon="fluent:delete-28-filled" className='text-2xl' /></p></button> </td>
       </tr>
      })}
     
    </tbody>
  </table>
</div>

   </div>

              
            
        </div>
    );
};

export default UserLoveCart;