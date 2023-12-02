import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllCoffee = () => {

    
    const {data:allCoffee=[], refetch}=useQuery({
    
        queryKey: ['allCoffee'],
        queryFn: async () =>{
               const res = await axios.get("http://localhost:5000/coffees")
                return res.data
        },
    
    
    
    
    })

    return [allCoffee, refetch]
};

export default useAllCoffee;