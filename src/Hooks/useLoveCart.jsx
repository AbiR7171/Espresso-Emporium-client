import React, { useContext } from 'react';
import { AuthContext } from '../Route/AuthProvidor';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useLoveCart = () => { 

    const {user}=useContext(AuthContext);


     const {data:loveCart=[], refetch}=useQuery({
         queryKey:['love', user?.email],
         queryFn: async ()=>{
             
                 const res  = await axios.get(`http://localhost:5000/singleUserLoveCart?email=${user?.email}`)
                 return res.data;
         }
     })

     return [loveCart, refetch]
  


};

export default useLoveCart;