import React, { useContext } from 'react';
import { AuthContext } from './AuthProvidor';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import loadings from "../assets/lottie/loading.json"
import Lottie from "lottie-react";

const PrivateRoute = ({children}) => {
      const {user, loading} = useContext(AuthContext)

      if(user){
         return children
      }

      if(loading){
        return <div className='flex justify-center items-start w-full'>
              <Lottie animationData={loadings} loop={true} />
        </div>
   }

      else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "To order You have to login Espresso",
          });

          return <Navigate to="/signIn" />
      }
};

export default PrivateRoute;