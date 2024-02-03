import React from 'react';
import img1 from "../../assets/images/cups/Rectangle 9.png"
import img2 from "../../assets/images/cups/Rectangle 10.png"
import img3 from "../../assets/images/cups/Rectangle 11.png"
import img4 from "../../assets/images/cups/Rectangle 12.png"
import img5 from "../../assets/images/cups/Rectangle 13.png"
import img6 from "../../assets/images/cups/Rectangle 14.png"
import img7 from "../../assets/images/cups/Rectangle 15.png"
import img8 from "../../assets/images/cups/Rectangle 16.png"

const FollowOn = () => {
    return (
        <div>
            <div className='text-center  mt-20'>
                <p>Follow Us Now</p>
                <h2 className="text-3xl secFont ">Follow On Instagram</h2>
            </div>

            <div className='container mx-auto grid grid-cols-4 gap-2 mt-10 px-32'>
                 <img src={img1} alt="" className='hover:scale-125 duration-500' />
                 <img src={img2} alt="" className='hover:scale-125 duration-500' />
                 <img src={img3} alt="" className='hover:scale-125 duration-500' />
                 <img src={img4} alt="" className='hover:scale-125 duration-500' />
                 <img src={img5} alt="" className='hover:scale-125 duration-500' />
                 <img src={img6} alt="" className='hover:scale-125 duration-500' />
                 <img src={img7} alt="" className='hover:scale-125 duration-500' />
                 <img src={img8} alt=""  className='hover:scale-125 duration-500'/>
            </div>
            
        </div>
    );
};

export default FollowOn;