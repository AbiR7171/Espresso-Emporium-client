import React from "react";
import { Icon } from "@iconify/react";
import useUserCart from "../../../Hooks/useUserCart";
import useLoveCart from "../../../Hooks/useLoveCart";
import UserLoveCart from "../../Charts/UserChart/UserLoveChart";
import UserCartChart from "../../Charts/UserChart/UserCartChart";

const UserHome = () => {
  const [loveCart] = useLoveCart();
  const [userCart] = useUserCart();


  const cartArray = userCart?.map(cart => cart.quantity);


  
  console.log(cartArray);

  const totalCartQunatity = cartArray?.reduce((previous, current)=>{

       return previous + current
  },0);

  console.log(totalCartQunatity);


  return (
    <div className="w-full h-full singleBg px-10 ">
      <p className="text-3xl  thirdFont  mt-4 flex gap-2 justify-center items-center text-[#5041BC] ">
        Your Dashboard{" "}
        <Icon icon="bi:pie-chart-fill" className="text-[#5041BC] text-7xl" />
      </p>

      <div className="grid grid-cols-3 gap-5 mt-10">

        <div className="bg-[#5041BC] bg-opacity-40 p-2 rounded">
          <p className="text-center mainFont text-2xl">Total Love Coffee</p>

          <div className="flex items-center justify-center text-6xl mainFont gap-2">
            <p>
              <Icon icon="mingcute:love-fill" />
            </p>{" "}
            <p className="text-center">{loveCart?.length}</p>
          </div>
        </div>


        <div className="bg-[#5041BC] bg-opacity-40 p-2 rounded">
          <p className="text-center mainFont text-2xl">Total Cart Coffee</p>

          <div className="flex items-center justify-center text-6xl mainFont gap-2">
            <p>
            <Icon icon="icomoon-free:cart" />
            </p>{" "}
            <p className="text-center">{totalCartQunatity}</p>
          </div>
        </div>

        <div className="bg-[#5041BC] bg-opacity-40 p-2 rounded">
          <p className="text-center mainFont text-2xl">Total Buy Coffee</p>

          <div className="flex items-center justify-center text-6xl mainFont gap-2">
            <p>
            <Icon icon="icon-park-solid:buy" />
            </p>{" "}
            <p className="text-center">{totalCartQunatity}</p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-3 mt-10">
        <div className="bg-[#5041BC] p-2 rounded bg-opacity-40">
          <UserLoveCart />
        </div>

        <div className="bg-[#5041BC] p-2 rounded bg-opacity-40">
          <UserCartChart />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
