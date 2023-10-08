import React, { useContext } from 'react';
import signUp from "../../assets/images/404/signIn.jpg"
import { AuthContext } from '../../Route/AuthProvidor';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {


  const {signIn}=useContext(AuthContext)

   const handelSignIn = e =>{
        
            e.preventDefault()
            const form  = e.target;
            const email = form.email.value;
            const password = form.password.value;

            signIn(email, password)
            .then(result =>{
                    console.log(result.user);
                    const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    Toast.fire({
                      icon: 'success',
                      title: 'Signed in successfully'
                    })
            })
            .catch(err =>{
                    console.log(err.message);
                    const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    Toast.fire({
                      icon: 'error',
                      title: `${err.message}`
                    })
            })
   }

    
    return (
        <div className='formBg font-serif'>
        <div className=" bg-[#331A15] bg-opacity-30 rounded-lg flex items-center p-10">
        <div className='w-full h-full'>
   <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
   <form onSubmit={handelSignIn} className='px-32 py-32'>
  

     <div className="mb-4">
       <label htmlFor="email" className="block text-white opacity-70 font-bold text-2xl">
         Email
       </label>
       <input
         type="email"
         id="email"
         name="email"
         className="bg-red-300 bg-opacity-20 text-white  p-2 rounded w-full"
         placeholder='Your Email'
       />
     </div>

     <div className="mb-4">
       <label htmlFor="password" className="block text-white opacity-70 font-bold text-2xl">
         Password
       </label>
       <input
         type="password"
         id="password"
         name="password"
         className="bg-red-300 bg-opacity-20 text-white  p-2 rounded w-full"
         placeholder='Set Password'
       />
     </div>

     <p className='text-white'>New at Espresso Emporium?  Please  <span className=' btn-link'><Link to="/signUp">SignUp</Link></span></p>


     <button
       type="submit"
       className="bg-[#331A15]  text-white py-2 px-10 rounded-lg hover:bg-blue-600"
     >
       Signup
     </button>
   </form>
 </div>
 <div className='w-1/2'>
      <img src={signUp} alt=""  className='rounded-lg h-full'/>
 </div>
        </div>
     </div>
    );
};

export default SignIn;