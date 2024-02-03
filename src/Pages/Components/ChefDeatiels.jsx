import React from 'react';
import { Icon } from '@iconify/react';

const ChefDeatiels = ({singleChefData}) => {
    return (
        <div className=" grid lg:grid-cols-2 gap-4 p-4 rounded-lg  bg-gray-200   lg:w-9/12 lg:me-56 lg:h-64">
      
          <img
            src={singleChefData?.photo}
            className="w-full rounded-lg   h-52"
            alt=""
          />
          
      

        <div className="ms-1 space-y-3">
          <p className="w-full flex justify-end">
            <Icon
              icon="mdi:heart"
              className={`text-5xl me-3 
                "text-red-600"
              }`}
            />
          </p>

          <p className="text-[#1B1A1A] font-bold lg:text-2xl mainFont">
            Name:{" "}
            <span className="text-[#5C5B5B] font-normal">
              {singleChefData.name}
            </span>
          </p>
         
          <p className="text-[#1B1A1A] font-bold lg:text-2xl mainFont">
            {" "}
            Email:{" "}
            <span className="text-[#5C5B5B] font-normal">
              {singleChefData.email} 
            </span>
          </p>
        
        </div>
      </div>
    );
};

export default ChefDeatiels;