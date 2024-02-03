import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee, loveCart, handleAddToLove}) => {
    return (
        <div className='flex items-center bg-[#F5F4F1] rounded-lg gap-4 w-full font-serif p-1 mb-10'>

                    <div className='w-1/2 relative'>

                         <img src={coffee.coffee_picture} className='h-52 w-full rounded-lg  ' alt="" />
                         <img src={coffee.chef_img} className='absolute w-16 h-16  rounded-lg bottom-0 right-0 me-3 mb-2' alt="" />
                    </div>

                     <div className='ms-1 w-1/2'> 

                      <p onClick={()=>handleAddToLove(coffee)} className='w-full flex justify-end'><Icon icon="mdi:heart" className={`text-4xl me-3 ${ loveCart?.find(i => i.coffee_id === coffee._id) && "text-red-600"} `} /></p>
                        
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'>
                            {coffee.coffee_name}
                        </span>
                        
                         </p>
                        <p className='text-[#1B1A1A] font-bold'> Chef:
                         <span className='text-[#5C5B5B] font-normal'> {coffee.chef}</span></p>
                        <p className='text-[#1B1A1A] font-bold'> BD Price: <span className='text-[#5C5B5B] font-normal'>
                            {coffee.price_bdt} Taka</span></p>
                        <p className='text-[#1B1A1A] font-bold'> USD Price: <span className='text-[#5C5B5B] font-normal'>
                           $ {coffee.price_usd} </span></p> 
                           <div className='flex  mt-4 gap-2 '>

                             <Link to={`/singleCoffee/${coffee._id}`}> <button className='bg-black text-white flex items-center gap-2 w-32 p-4 rounded'>Deatiels <p><Icon icon="carbon:folder-details-reference" /></p></button></Link>
                            
                            </div>
                    </div>

                </div>
    );
};

export default CoffeeCard;