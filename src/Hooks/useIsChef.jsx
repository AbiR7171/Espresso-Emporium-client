import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Route/AuthProvidor';

const useIsChef = () => {
     const {user, loading} = useContext(AuthContext);


        const { data:isChef }=useQuery({
             queryKey: ["isChef", user?.email],
             enabled: !loading,
             queryFn: async () =>{
                  const res = await axios.get(`http://localhost:5000/isChef?email=${user?.email}`);
                  console.log(res.data.chef);
                  return res.data.chef
             }
        })
        
        return [isChef]
};

export default useIsChef;