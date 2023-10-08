import React from 'react';
import icon1 from "../../assets/images/icons/1.png"
import icon2 from "../../assets/images/icons/2.png"
import icon3 from "../../assets/images/icons/3.png"
import icon4 from "../../assets/images/icons/4.png"

const BanSection = () => {
    return (
        <div className='bg-[#ECEAE3] font-serif flex py-8 px-32 gap-4 text-[#331A15]'>

            <div>
                <img src={icon1} alt="" />
                <h2 className="text-2xl"> Awesome Aroma</h2>
                <p> You will definitely be a fan of the design & aroma of your coffee</p>
            </div>

            <div>
                <img src={icon2} alt="" />
                <h2 className="text-2xl">High Quality</h2>
                <p> You will definitely be a fan of the design & aroma of your coffee</p>
            </div>

            <div>
                <img src={icon3} alt="" />
                <h2 className="text-2xl"> Pure Grades</h2>
                <p> You will definitely be a fan of the design & aroma of your coffee</p>
            </div>

            <div>
                <img src={icon4} alt="" />
                <h2 className="text-2xl">Proper Roasting</h2>
                <p> You will definitely be a fan of the design & aroma of your coffee</p>
            </div>

        </div>
    );
};

export default BanSection;