import React from 'react';
import { Icon } from '@iconify/react';
import UserChart from '../../Charts/AdminChart/UserChart';
import TopUsers from './TopUsers';
import CoffeeChart from '../../Charts/AdminChart/CoffeChart';
import TopCoffee from './TopCoffee';
import UserRoleChart from '../../Charts/AdminChart/UserRoleChart';
import TopChef from './TopChef';


const AdminHome = () => {
    return (
        <div className='w-full h-full singleBg '>
               <p className="text-4xl  lastFont font-bold   mt-7 flex gap-2 justify-center items-center text-[#5041BC]">
         Admin Home{" "}
        <Icon
         icon="solar:home-bold"
          className="text-[#5041BC] text-4xl"
        />
      </p>



         <div className='mt-10 flex gap-2 '>


           <div className="bg-[#5041BC]  rounded bg-opacity-40">
           <UserChart/>
           </div>
              

               <div>
                   <TopUsers/>
              </div>

         </div>

         <div className='mt-10 flex gap-2 '>
           
          <div className="bg-[#5041BC]  rounded bg-opacity-40">
           <CoffeeChart/>
           </div>
              

             <div>
                   <TopCoffee/>
             </div>

         </div>

         <div className='mt-10 flex gap-2 flex-row-reverse'>
           
           <div className="bg-[#5041BC] flex-1 p-2 rounded bg-opacity-40">
            <UserRoleChart/>
            </div>
               
 
              <div>
                   <TopChef/>
              </div>
 
          </div>

            
        </div>
    );
};

export default AdminHome;