import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { AuthContext } from '../../../Route/AuthProvidor';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddNewCoffee = () => {  

      const {user}=useContext(AuthContext);


    const handleCoffeeRequest = e =>{
        e.preventDefault();
        const form = e.target;
        const coffeName = form.coffeName.value;
        const bdPrice = form.bdPrice.value;
        const usdPrice = form.usdPrice.value;
        const coffeImage = form.coffeImage.value;
        const chefName = form.chefName.value;
        const chefEmail = form.chefEmail.value;


        console.log(coffeName, bdPrice, usdPrice, coffeImage, chefName, chefEmail);


         axios.post("http://localhost:5000/coffeeRequest",{
           chef:chefName,
           chef_img:user?.photoURL,
           coffee_name:coffeName,
           chef_email:chefEmail,
           coffee_picture:coffeImage,
           price_bdt:parseFloat(bdPrice),
           price_usd: parseFloat(usdPrice),
           status:"pending",
         })
         .then(res =>{
                  
                      console.log(res.data);
                      if(res.data.insertedId){
                           
                        form.reset()
                        const Toast = Swal.mixin({
                          toast: true,
                          position: 'top-end',
                          showConfirmButton: false,
                          timer: 3000,
                          timerProgressBar: true,
                          didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                          }
                        })
                        
                        Toast.fire({
                          icon: 'success',
                          title: 'Coffee Request sent successfully'
                        })
                      }

         })


    }
    return (
        <div className='w-full h-full singleBg'>

           
      <p className="text-5xl  lastFont font-bold   mt-7 flex gap-2 justify-center items-center text-[#5041BC]">
        Add New Coffee{" "}
        <Icon icon="zondicons:add-solid"  className="text-[#5041BC] text-4xl" />
      </p> 

      <div className=" p-4 rounded flex justify-center items-center mt-10 bg-[#5041BC] bg-opacity-50">
      <form onSubmit={handleCoffeeRequest} className="w-full grid grid-cols-2 gap-2 mainFont text-[14px]">
        <div className="mb-4">
          <label htmlFor="chefName" className="block text-sm font-medium text-gray-700">
            Coffee Name
          </label>
          <input
            type="text"
            name="coffeName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Coffee Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bdPrice" className="block text-sm font-medium text-gray-700">
           Coffee BD Price
          </label>
          <input
            type="text"
            name="bdPrice"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Coffee BD Price"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="usdPrice" className="block text-sm font-medium text-gray-700">
           Coffee USD Price
          </label>
          <input
            type="text"
            name="usdPrice"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Coffee USD Price"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="usdPrice" className="block text-sm font-medium text-gray-700">
           Coffee Image
          </label>
          <input
            type="text"
            name="coffeImage"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Coffee USD Price"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="chefEmail" className="block text-sm font-medium text-gray-700">
            Chef Name
          </label>
          <input
            type="text"
            name="chefName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Chef Email"
            defaultValue={user?.displayName}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="chefEmail" className="block text-sm font-medium text-gray-700">
            Chef Email
          </label>
          <input
            type="email"
            name="chefEmail"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Chef Email"
            defaultValue={user?.email}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 col-span-2"
        >
          Submit Request
        </button>
      </form>
    </div>
            
        </div>
    );
};

export default AddNewCoffee;