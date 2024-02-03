import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useCoffeeRequest = () => {
     
        const {data: allCoffeeRequest, refetch}= useQuery({

             queryKey:["coffeeRequest"],
             queryFn: async ()=>{
                 const res = await axios.get("http://localhost:5000/allCoffeeRequest")
                 return res.data
             }
        })

        return [allCoffeeRequest, refetch]
}

export default useCoffeeRequest;