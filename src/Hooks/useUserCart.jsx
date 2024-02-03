import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Route/AuthProvidor';
import axios from 'axios';

const useUserCart = () => { 

    const {user}=useContext(AuthContext);
   

       const {data:userCart=[], refetch} =useQuery({
         
             queryKey:['cart', user?.email],
             queryFn:async()=>{
                 const res = await axios.get(`http://localhost:5000/userCart?email=${user?.email}`);
                 return res.data;
             }

       });


        return[userCart, refetch]

   
};

export default useUserCart;