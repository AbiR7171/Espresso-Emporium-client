import React, { useContext } from 'react';
import signUp from "../../assets/images/404/signUp.jpg"
import { AuthContext } from '../../Route/AuthProvidor';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';

const SignUp = () => {

  const {HandleCreateUser, handleProfile}=useContext(AuthContext)
  const naviagete = useNavigate()

  const handleForm = event =>{

    event.preventDefault()
 
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1696403896~exp=1696404496~hmac=5420359130c04e521c8192fc7b4e9d53c302c2bdb03b3a25a8fe8ac2cd4dc13f" ; 



    if(password !== confirm){
      return  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Confirm password dosen't match! ",
      })
    }

    console.log(name, email, password, confirm, photo);
    HandleCreateUser(email, password)
    .then( result =>{ 


      axios.post("http://localhost:5000/user", {
          name,
          email,
          photo,
          date: moment().format("DD, MM, YYYY"),
          role:"user",
      })
      .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){ 
              naviagete("/")

              const newUser = result.user;
              handleProfile(newUser, name, photo)
              Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Successfully signUp',
               showConfirmButton: false,
               timer: 1500
             })
               form.reset()
               console.log(newUser);

            }
      })
    })
    .catch(error =>{
      console.log(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.message}`,
      })
    })
  }

    return (
        <div className='formBg font-serif'>
           <div className=" bg-[#000000] bg-opacity-30 rounded-lg flex items-center p-10 ">
           <div className='w-full h-full'>
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Please Sign Up</h2>
      <form onSubmit={handleForm} className='px-32 py-'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white opacity-70 font-bold text-2xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-red-300 bg-opacity-20 text-white  p-2 rounded w-full"
            placeholder='Your Name '
          />
        </div>

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

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-white opacity-70 font-bold text-2xl">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirm"
            className="bg-red-300 bg-opacity-20 text-white  p-2 rounded w-full"
            placeholder='Confirm Password'
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-white opacity-70 font-bold text-2xl">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            name="photo"
            className="bg-red-300 bg-opacity-20 text-white  p-2 rounded w-full"
            placeholder='Your Photo URL'
          />
        </div>

        <p className='text-white'>Already Have an account?  Please <span className=' btn-link'><Link to="/signin">Login</Link></span></p>

        <button
          type="submit"
          className="bg-[#331A15]  text-white py-2 px-10 rounded-lg hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
    <div className='w-1/2 '>
         <img src={signUp} alt=""  className='rounded-lg h-full'/>
    </div>
           </div>
        </div>
    );
};

export default SignUp;