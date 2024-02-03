import React, { useContext, useEffect, useRef, useState, } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import loading from '../../assets/lottie/loading.json';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Route/AuthProvidor';
import useLoveCart from '../../Hooks/useLoveCart';
import moment from 'moment/moment';
import CoffeeCard from './CoffeeCard';

const AllCoffee = () => {  


    const {user} = useContext(AuthContext) 

    const [loveCart,refetch]=useLoveCart();

    console.log(loveCart);


    const searchRef = useRef()



    // useState


    const [coffees,setCoffees]=useState()  



    // end useState 


    // api call  get
    useEffect(()=>{


        fetch("http://localhost:5000/coffees")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCoffees(data)
           
        })
    },[])  


    


//    api call post
    const handleAddToLove  = coffee =>{ 

        console.log(coffee); 


         const alredayAdded = loveCart?.find(i => i.coffee_id === coffee._id);

         console.log(alredayAdded);


          if(alredayAdded){  

               axios.delete(`http://localhost:5000/removeLoveCart/${coffee._id}`)
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

              
              
          }else{ 


            axios.put(`http://localhost:5000/updateLoveCount/${coffee._id}`,{
              love: coffee?.love
            })
            .then(res =>{
              console.log(res.data);
            })




            axios.post(`http://localhost:5000/addLoveCart`, { 

            coffee_name: coffee.coffee_name,
            coffee_picture: coffee.coffee_picture,
            coffee_id: coffee._id,
            price: coffee.price_bdt,
            chef: coffee.chef,
            chef_img: coffee.chef_img,
            email: user?.email,
            date: moment().format('DD/MM/YYYY')

            })
            .then(res =>{
                     
                    console.log(res.data);
                    if(res.data.insertedId){ 

                       refetch()
                                

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
                           title: `${coffee.coffee_name} added To Favorite`
                         }) 
   
                    }
            })

          }


             
            
    }  



    const handleSearch = () =>{

             const searchWord = searchRef?.current.value;

             console.log(searchWord); 


             axios.get(`http://localhost:5000/searchApi?search=${searchWord}`)
             .then(res =>{
                      console.log(res.data);
                     setCoffees(res.data)
             })
    }



  
    // end Api call



    

    return (
        <div
        className='container mx-auto px-20 '
        > 

            <h2 className="text-center mainFont mt-20 text-3xl">Select Your Favorite Coffee</h2> 

                   <div className='w-full flex justify-end mt-10 relative'>
                       <input ref={searchRef} type="text" placeholder="Search Your Favorite Coffee here" className="input input-bordered input-error w-full max-w-xs" /> 
                     <p onClick={handleSearch} className='bg-red-600 w-14 flex justify-center items-center rounded-md absolute h-12'><Icon icon="material-symbols:search" className='text-3xl ' /></p>
                   </div>

             <div 
             className={`grid grid-cols-2 gap-5  mt-10`}
             >

                {
                   !coffees ? <div className='flex justify-center items-center'>
                      
                      <Lottie animationData={loading} loop={true} />
                      
                   </div> :
                   coffees?.map(coffee => <CoffeeCard coffee={coffee} loveCart={loveCart} handleAddToLove={handleAddToLove}/>)
                }

            </div>
            
        </div>
    );
};

export default AllCoffee;