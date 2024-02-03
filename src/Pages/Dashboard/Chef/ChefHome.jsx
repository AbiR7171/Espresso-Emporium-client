import React from 'react';
import { Icon } from "@iconify/react";
import useMyCoffeeRequested from '../../../Hooks/useMyCoffee';
import ChefCoffeRequestChart from '../../Charts/AdminChart/ChefCoffeRequestChart';
import MyTopCoffee from '../Admin/MyTopCoffee';

const ChefHome = () => {
    const [myCoffee] = useMyCoffeeRequested();
    console.log(myCoffee);


    return (
        <div className='w-full h-full singleBg' >


         <p className="text-4xl  lastFont font-bold   mt-7 flex gap-2 justify-center items-center text-[#5041BC] mb-3">
         Chef Home{" "}
        <Icon
         icon="solar:home-bold"
          className="text-[#5041BC] text-6xl"
         />
        </p>
   
     <div className='flex gap-2'>
     <div className="bg-[#5041BC]  p-2 rounded bg-opacity-40 w-1/2">

<ChefCoffeRequestChart/>

</div>

<div className='flex-1'>
   <MyTopCoffee/>
</div>
     </div>
            
        </div>
    );
};

export default ChefHome;