import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bannerBack flex justify-center items-center'>

           <div className='lg:ms-96 lg:pt-64 lg:ps-64 pe- lg:space-y-3 space-y-2 p-3'>

               <h2 className=" text-white text-3xl mainFont p-2">
                Would you like a Cup of Delicious Coffee?
               </h2>

               <p className='text-gray-500'>
                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

              <Link to="/allCoffee">
              
                <button className='bg-[#E3B577] text-[#242222] p-3 rounded font-serif mt-4'>
                Learn More
                </button>
              </Link>

           </div>

        </div>
    );
};

export default Banner;