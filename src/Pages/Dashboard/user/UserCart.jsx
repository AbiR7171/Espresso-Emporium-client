import React from "react";
import useUserCart from "../../../Hooks/useUserCart";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UserCart = () => {
  const [userCart, refetch] = useUserCart();

  console.log(userCart); 


  const handleRemoveCart = (coffee) =>{  

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

            
    axios.delete(`http://localhost:5000/removeCart/${coffee.coffee_id}`)
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
    <div className="w-full h-full px-32 singleBg ">

      <p className="text-3xl  thirdFont  mt-4 flex justify-center items-center text-[#5041BC] ">
        Your  Cart{" "}
        <Icon icon="icomoon-free:cart" className="text-[#5041BC] text-7xl" />
      </p> 

      <div>
      <div className="overflow-x-auto mt-10 bg-[#5041BC] bg-opacity-40 rounded ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='secFont text-gray-400'>
        <th></th>
        <th>Coffee Name</th>
        <th>Coffee Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {userCart?.map((item, index) => {
         return  <tr className='mainFont text-white'>
         <th>{index + 1}</th>

         <td>{item?.coffee}</td>

         <td><img src={item?.coffee_img} className='w-12 h-12 rounded' alt="" /></td>

         <td> ${item?.price}</td>
         <td> {item?.quantity}</td>
         <td> ${item?.totalPrice}</td>

         <td> <button className='bg-yellow-600 text-white flex items-center gap-2 w-32 p-4 rounded'>Chekout <p><Icon icon="carbon:folder-details-reference" /></p></button></td>

         <td> <button onClick={()=>handleRemoveCart(item)} className='bg-red-600 text-white flex items-center gap-2 w-32 p-4 rounded'> Delete <p><Icon icon="fluent:delete-28-filled" className='text-2xl' /></p></button> </td>
       </tr>
      })}
     
    </tbody>
  </table>
</div>

            
      </div>

    </div>
  );
};

export default UserCart;
