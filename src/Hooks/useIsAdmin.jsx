import React, { useContext } from 'react';
import { AuthContext } from '../Route/AuthProvidor';
import {  useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useIsAdmin = () => {
      
        const  {user, loading} = useContext(AuthContext)

        const {data: isAdmin} =  useQuery({
             
                queryKey : ["isAdmin", user?.email],
                enabled: !loading,
                queryFn : async () =>{
                       const res = await axios.get(`http://localhost:5000/isAdmin?email=${user?.email}`)
                       return res.data.admin
                }
        })

        return [isAdmin]
};

export default useIsAdmin;