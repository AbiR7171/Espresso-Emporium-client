import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import { AuthContext } from "../../Route/AuthProvidor";
import Swal from "sweetalert2";
import useLoveCart from "../../Hooks/useLoveCart";
import moment from "moment/moment";

const SingleCoffee = () => {


    // data Load

  const SingleCoffee = useLoaderData();
  console.log(SingleCoffee);

  const {user}=useContext(AuthContext) ;

  const [loveCart]=useLoveCart()

  console.log(user);

  //   end data Load


  //    useState 

  const[quantity, setQuantity]=useState(1) ;
  





//   end useState


//  function

      




    //    apis call

     const handleAddToCart = () =>{


          axios.put(`http://localhost:5000/updateCartCount/${SingleCoffee[0]?._id}`,{
            cart:SingleCoffee[0]?.cart
          })
          .then(res =>{
                 console.log(res.data);
          })


             axios.post('http://localhost:5000/addToCart', { 
    
               name: user?.displayName,
               email:user?.email,
               coffee: SingleCoffee[0]?.coffee_name,
               coffee_img:SingleCoffee[0]?.coffee_picture,
               chef: SingleCoffee[0]?.chef,
               chef_img:SingleCoffee[0]?.coffee_picture,
               quantity:quantity,
               price: SingleCoffee[0]?.price_bdt,
               totalPrice:SingleCoffee[0]?.price_bdt * quantity,
               coffee_id: SingleCoffee[0]?._id,
               date: moment().format('DD/mm/YYYY')
                  
                    
             }) 
             .then(res =>{
                   console.log(res);
                   if(res.data.insertedId){ 

                   
                        
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
                        title: `${SingleCoffee[0]?.coffee_name} added Cart successfully`
                      }) 

                      setQuantity(1)
                   } 
             })
     }





   

  
  return (
    <div className="singleBg  flex items-center justify-center ">
      <div className=" grid grid-cols-2 gap-4 p-4 rounded-lg  bg-gray-200  mt-32 w-9/12 me-56  h-[400px] ">
        <div className=" relative">
          <img
            src={SingleCoffee[0]?.coffee_picture}
            className="h-[360px] w-full rounded-lg   "
            alt=""
          />
          <img
            src={SingleCoffee[0]?.chef_img}
            className="absolute w-20 h-20 hover:w-36 hover:h-36 duration-1000 rounded-lg bottom-0 right-0 me-3 mb-6"
            alt=""
          />
        </div>

        <div className="ms-1 space-y-3">
          <p className="w-full flex justify-end">
            <Icon icon="mdi:heart" className={`text-5xl me-3 ${loveCart?.find(i => i.coffee_id === SingleCoffee[0]?._id) && "text-red-600"}`} />
          </p>

          <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
            Name:{" "}
            <span className="text-[#5C5B5B] font-normal">
              {SingleCoffee[0]?.coffee_name}
            </span>
          </p>
          <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
            {" "}
            Chef:
            <span className="text-[#5C5B5B] font-normal"> {SingleCoffee[0]?.chef}</span>
          </p> 
          <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
            {" "}
            BD Price:{" "}
            <span className="text-[#5C5B5B] font-normal">
              {SingleCoffee[0]?.price_bdt} Taka
            </span>
          </p>
          <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
            {" "}
            USD Price:{" "}
            <span claFssName="text-[#5C5B5B] font-normal">
              $ {SingleCoffee[0]?.price_usd}{" "}
            </span>
          </p>

          <div className="flex mt-4 gap-2 items-center ">
             
             <div className="flex gap-1 items-center mainFont border border-black p-2 rounded">
                  <p>Quantity</p> 
                   <p onClick={()=> quantity > 1 && setQuantity(quantity -1)}><Icon icon="dashicons:arrow-up" rotate={3} className="text-4xl mt-1" /></p>
                   <p>{quantity}</p>
                   <p  onClick={()=>setQuantity(quantity + 1)}><Icon icon="dashicons:arrow-up" rotate={1} className="text-4xl" /></p>
             </div> 

              <div>
                  <p className=" mainFont text-[#1B1A1A] font-bold">Total Price : <span className="text-[#5C5B5B]
                  font-normal 
                  ">{SingleCoffee[0]?.price_bdt * quantity} TAKA</span></p>
              </div>

          </div>  

           <button onClick={handleAddToCart} className="
           bg-[#E3B577] text-[#242222] p-3 rounded font-serif font-bold px-10 flex items-center gap-1
           ">
            Add TO Cart <Icon icon="mdi:cart" />
            </button>

          

        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
