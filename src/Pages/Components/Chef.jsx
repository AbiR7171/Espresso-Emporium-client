import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import loading from '../../assets/lottie/loading.json';

const Chef = () => { 


   const [chefs, setChefs] = useState([])

   useEffect(()=>{
             axios.get("http://localhost:5000/allUsers")
             .then(res =>{
                   const users = res.data
                   const chef =  users?.filter(u => u.role === "chef");
                   console.log(chef);
                   setChefs(chef)
                  
             })
   },[])


    return (
        <div
        className='container mx-auto lg:px-20 '
        > 

            <h2 className="text-center mainFont mt-20 text-3xl">Select Your Favorite Chef</h2> 

                   {/* <div className='w-full flex justify-end mt-10 relative'>
                       <input ref={searchRef} type="text" placeholder="Search Your Favorite Coffee here" className="input input-bordered input-error w-full max-w-xs" /> 
                     <p onClick={handleSearch} className='bg-red-600 w-14 flex justify-center items-center rounded-md absolute h-12'><Icon icon="material-symbols:search" className='text-3xl ' /></p>
                   </div> */}

             <div 
             className={`grid lg:grid-cols-2 lg:gap-5  mt-10`}
             >

                {
                   !chefs ? <div className='flex justify-center items-center'>
                      
                      <Lottie animationData={loading} loop={true} />
                      
                   </div> :
                   chefs?.map(chef => {
                    return  <div className='flex items-center bg-[#F5F4F1] rounded-lg gap-4 w-full font-serif p-1'>

                    <div className='w-1/2 relative'>

                         <img src={chef.photo} className='h-52 w-full rounded-lg  ' alt="" />
                      
                    </div>

                     <div className='ms-1 w-1/2'> 

                      <p  className='w-full flex justify-end'><Icon icon="mdi:heart" className={`text-4xl me-3  `} /></p>
                        
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'>
                            {chef.name}
                        </span>
                        
                         </p>
                        <p className='text-[#1B1A1A] font-bold'> Chef:
                         <span className='text-[#5C5B5B] font-normal'> {chef.email}</span></p>
                       
                           <div className='flex  mt-4 gap-2 '>

                             <Link to={`/singleChef/${chef._id}`}> <button className='bg-black text-white flex items-center gap-2 w-32 p-4 rounded'>Deatiels <p><Icon icon="carbon:folder-details-reference" /></p></button></Link>
                            
                            </div>
                    </div>

                </div>
                })
                }

            </div>
            
        </div>
    );
};

export default Chef;