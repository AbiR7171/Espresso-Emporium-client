import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';
import ChefDeatiels from './ChefDeatiels';
import CoffeeCard from './CoffeeCard';

const SingleChefs = () => {
    
    const singleChefData = useLoaderData();

    const [chefAllCoffee, setChefAllCoffee] = useState([])

    useEffect(()=>{
               axios.get(`http://localhost:5000/myCoffee?email=${singleChefData?.email}`)
               .then(res =>{
                        console.log(res.data);
                        setChefAllCoffee(res.data)
               })
    }, [])

    console.log(singleChefData);
    return (
        <div className="singleBg mt-10 px-20 ">

              <ChefDeatiels singleChefData={singleChefData}/> 

                 <p className='
                  flex
                  items-center
                  gap-2
                  justify-center
                  text-2xl
                  mt-20
                  mainFont
                 '>{singleChefData?.name} Coffee Gallery <Icon icon="solar:gallery-bold" /></p>


                 <div  className='grid  grid-cols-2 gap-4 mt-10 '>
                       {
                          chefAllCoffee?.map( (coffee) => <CoffeeCard coffee={coffee}/> )
                       }
                 </div>

    </div>
    );
};

export default SingleChefs;