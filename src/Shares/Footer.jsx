import React from 'react';
import { Icon } from '@iconify/react';
import logo from "../assets/images/more/logo1.png"
import { useLocation } from 'react-router-dom';

const Footer = () => {
    
    const location = useLocation();
    const splitLocation = location.pathname.split("/");
    console.log(splitLocation[1]);
    return (
        <div className={`bg-[#F5F4F1] footerBg font-serif flex items-center ${splitLocation[1] === "singleChef" && "hidden"}`}>

            <div className=' container mx-auto px-32'>
                 <img src={logo} alt=""  className='w-24'/>
                 <p className='text-3xl mainFont font-bold'>Expresso Emporium</p>
                 <p className='mt-6'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                 
                 <div className='flex gap-3 mt-4 mb-4'>
                     <Icon icon="ic:outline-facebook"  className='text-5xl text-[#331A15]'/>
                     <Icon icon="mdi:twitter"   className='text-5xl text-[#331A15]'/>
                     <Icon icon="ri:instagram-fill"  className='text-5xl text-[#331A15]' />
                     <Icon icon="mdi:linkedin"  className='text-5xl text-[#331A15]' />
                 </div>
                 <p className='text-2xl text-[#331A15] mt-2 mb-4 thirFont'>Get in Touch</p>

               <p className='flex items-center gap-3 text-3xl  '>  <Icon icon="mdi:telephone" />  <span
                className='text-2xl text-[#1B1A1A] lastFont'
                >+88 01533 333 333</span></p>
               <p className='flex items-center gap-3 text-3xl '><Icon icon="clarity:email-solid" /> <span  className='text-2xl text-[#1B1A1A] lastFont'>espressoEmproium@gmail.com</span></p>
               <p className='flex items-center gap-3 text-3xl'><Icon icon="mdi:location" /><span  className='text-2xl text-[#1B1A1A] font-normal lastFont'>72, Wall street, King Road, Dhaka</span></p>
                 
            </div>

            <div className='container mx-auto flex flex-col items-start mt-32 mb-20 '>
                <h2 className="text-2xl">Connect with Us</h2>

                <input type="text" className='w-3/4 h-11 rounded-md'  placeholder='    Name' />
                <input type="email" name="email" className='mt-3 w-3/4 h-11 rounded-md' placeholder='    Email' />
                
                <input type="text" className='w-3/4 h-44 rounded-md mt-3 ' placeholder='   Message' />

                 <button className='btn border-1 mt-4 border-[#331A15] rounded-full ' >Send Message</button>
            </div>
            
        </div>
    );
};

export default Footer;