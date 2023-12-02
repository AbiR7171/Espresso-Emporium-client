import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Route/AuthProvidor';
import axios from 'axios';

const useMyCoffeeAccepted = () => { 

    const {user}=useContext(AuthContext);
   

       const {data:myCoffeeAccepted=[], refetch} =useQuery({
         
             queryKey:['myCoffee', user?.email],
             queryFn:async()=>{
                 const res = await axios.get(`http://localhost:5000/myCoffee?email=${user?.email}`);
                 return res.data;
             }

       });


        return[myCoffeeAccepted, refetch]

   
};

export default useMyCoffeeAccepted;