import React from 'react';
import useIsAdmin from '../Hooks/useIsAdmin';
import loadings from "../assets/lottie/loading.json"
import Lottie from "lottie-react";

const AdminRoute = () => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin] = useIsAdmin();

    if(user && isAdmin){
       return children
    }

    if(loading){
        return <div className='flex justify-center items-start w-full'>
              <Lottie animationData={loadings} loop={true} />
        </div>
   }

        return <Navigate to="/signIn" />
    
};

export default AdminRoute;