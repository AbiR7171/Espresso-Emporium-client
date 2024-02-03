import React from 'react';
import leftImg from "../../assets/images/more/4.png"
import rightImg from "../../assets/images/more/5.png"
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"
import img6 from "../../assets/images/6.png"

const Popular = () => {
    return (
        <div className='mt-20'>
             <img src={leftImg} alt="" className='absolute left-0 top-[900px]' />
             <img src={rightImg} className='absolute right-0' alt="" />
            <div className='text-center '>
            <p> - - -Sip & Savor - - -</p>
            <h2 className="text-3xl secFont font-bold text-[#331A15]">Our Popular Products</h2>
            </div>
            <div className='container mx-auto px-32 grid grid-cols-2 gap-5 mt-32 ms-5 font-serif'>

                <div className='flex items-center bg-[#F5F4F1] rounded-lg gap-4 '>
                    <img src={img1} className='hover:scale-150 duration-500' alt="" />
                    <div>
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'>Americano Coffee</span> </p>
                        <p className='text-[#1B1A1A] font-bold'>Chef: <span className='text-[#5C5B5B] font-normal'  >Mr. Matin Paul</span></p>
                        <p className='text-[#1B1A1A] font-bold'>Price: <span className='text-[#5C5B5B] font-normal'>890 Taka</span></p>
                    </div>

                </div>
                
                <div className='flex items-center bg-[#F5F4F1] rounded-lg gap-4'>
                    <img src={img2} className='hover:scale-150 duration-500' alt="" />
                    <div>
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'>Black Coffee</span> </p>
                        <p className='text-[#1B1A1A] font-bold'> Chef: <span className='text-[#5C5B5B] font-normal'> Mr.Nibra Sweden</span></p>
                        <p className='text-[#1B1A1A] font-bold'>Price: <span className='text-[#5C5B5B] font-normal'>890 Taka</span></p>
                    </div>

                </div>

                <div className='flex items-center bg-[#F5F4F1] rounded-lg gap-4'>
                    <img src={img3} className='hover:scale-150 duration-500' alt="" />
                    <div>
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'> Espresso Coffee</span> </p>
                        <p className='text-[#1B1A1A] font-bold'>Chef: <span className='text-[#5C5B5B] font-normal'>Mrs. Morisha</span></p>
                        <p className='text-[#1B1A1A] font-bold'>Price: <span className='text-[#5C5B5B] font-normal'>890 Taka</span></p>
                    </div>

                </div>

                <div className='flex items-center bg-[#F5F4F1] rounded-lg gap-4'>
                    <img src={img4} className='hover:scale-150 duration-500' alt="" />
                    <div>
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'>Cappuccino Coffee</span> </p>
                        <p className='text-[#1B1A1A] font-bold'>Chef: <span className='text-[#5C5B5B] font-normal'>Mr. Matin Paul</span></p>
                        <p className='text-[#1B1A1A] font-bold'>Price: <span className='text-[#5C5B5B] font-normal'>890 Taka</span></p>
                    </div>

                </div>

                <div className='flex items-center bg-[#F5F4F1] rounded-lg gap-4'>
                    <img src={img5} className='hover:scale-150 duration-500' alt="" />
                    <div>
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'>Macchiato</span> </p>
                        <p className='text-[#1B1A1A] font-bold'>Chef: <span className='text-[#5C5B5B] font-normal'>Mr. Matin Paul</span></p>
                        <p className='text-[#1B1A1A] font-bold'>Price: <span className='text-[#5C5B5B] font-normal'>890 Taka</span></p>
                    </div>

                </div>

                <div className='flex items-center bg-[#F5F4F1]  rounded-lg gap-4'>
                    <img src={img6} className='hover:scale-150 duration-500' alt="" />
                    <div>
                        <p className='text-[#1B1A1A] font-bold'>Name: <span className='text-[#5C5B5B] font-normal'>Decaf Coffee</span> </p>
                        <p className='text-[#1B1A1A] font-bold'>Chef: <span className='text-[#5C5B5B] font-normal'>Mr. Matin Paul</span></p>
                        <p className='text-[#1B1A1A] font-bold'>Price: <span className='text-[#5C5B5B] font-normal'>890 Taka</span></p>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Popular;