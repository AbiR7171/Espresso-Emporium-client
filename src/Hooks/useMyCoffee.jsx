import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Route/AuthProvidor';
import axios from 'axios';

const useMyCoffeeRequested = () => { 

    const {user}=useContext(AuthContext);
   

       const {data:myCoffee=[], refetch} =useQuery({
         
             queryKey:['cart', user?.email],
             queryFn:async()=>{
                 const res = await axios.get(`http://localhost:5000/myCoffeeRequest?email=${user?.email}`);
                 return res.data;
             }

       });


        return[myCoffee, refetch]

   
};

export default useMyCoffeeRequested;