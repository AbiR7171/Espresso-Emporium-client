import React, { useState } from "react";
import { Icon } from "@iconify/react";
import useMyCoffeeRequested from "../../../Hooks/useMyCoffee";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMyCoffeeAccepted from "../../../Hooks/useMyCoffeAccepted";

const MyCoffee = () => {

  const [rejected, setRejected]=useState({})

  const [myCoffee] = useMyCoffeeRequested();
  const[myCoffeeAccepted]=useMyCoffeeAccepted()
  console.log({myCoffeeAccepted});
  console.log({myCoffee});


 
   const otherCoffee = myCoffee?.filter(c => c.status === "pending" || "Rejected")


   console.log(otherCoffee);


  return (
    <div className="w-full h-full singleBg">
      <p className="text-4xl  lastFont font-bold   mt-7 flex gap-2 justify-center items-center text-[#5041BC]">
        My Coffee{" "}
        <Icon
          icon="line-md:coffee-filled"
          className="text-[#5041BC] text-6xl"
        />
      </p>

      <div className="grid grid-cols-2 gap-5 mt-10 mb-10">

<div className="bg-[#5041BC] bg-opacity-40 p-2 rounded">
  <p className="text-center mainFont text-2xl">Total Accepted Coffee's</p>

  <div className="flex items-center justify-center text-6xl mainFont gap-2">
    <p>
    <Icon icon="akar-icons:coffee" />
    </p>{" "}
    <p className="text-center">{myCoffeeAccepted?.length}</p>
  </div>
</div>


<div className="bg-[#5041BC] bg-opacity-40 p-2 rounded">
  <p className="text-center mainFont text-2xl"> Other's Coffee's</p>

  <div className="flex items-center justify-center text-6xl mainFont gap-2">
    <p>
    <Icon icon="line-md:coffee-arrow" />
    </p>{" "}
    <p className="text-center">{otherCoffee?.length}</p>
  </div>
</div>



</div>

      <div className="bg-[#5041BC] rounded p-4 bg-opacity-50">
        <Tabs >
          <TabList  className="bg-white p-2 rounded text-[#5041BC]">
            <Tab >Accept Coffee</Tab>
            <Tab>Others Coffee</Tab>
          </TabList>

          <TabPanel> 

          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Coffee Name</th>
        <th>Coffee Image</th>
        <th>Price BDT</th>
        <th>Price USD</th>
      </tr>
    </thead>
    <tbody> 
            {
                myCoffeeAccepted?.map( (coffee, index) =>{
                         return      <tr>
                         <th>{index +  1}</th>
                         <td>{coffee?.coffee_name}</td>
                         <td><img src={coffee?.coffee_picture} className="w-12 h-12 rounded" alt="" /></td>
                         <td>{coffee?.price_bdt}</td>
                         <td>{coffee?.price_usd}</td>
                         
                       </tr>
                })
            }


</tbody>
  </table>
</div>


            
          </TabPanel>
          <TabPanel>
         



          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Coffee Name</th>
        <th>Coffee Image</th>
        <th>Price BDT</th>
        <th>Price USD</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody> 
            {
                otherCoffee?.map( (coffee, index) =>{
                         return      <tr>
                         <th>{index + 1}</th>
                         <td>{coffee?.coffee_name}</td>
                         <td><img src={coffee?.coffee_picture} className="rounded w-14 h-14" alt="" /></td>
                         <td>{coffee?.price_bdt}</td>
                         <td>{coffee?.price_usd}</td>
                         <td>{coffee?.status}</td>
                         <td>{ coffee?.status === "Rejected" && <button
                          onClick={()=>document.getElementById('my_modal_1').showModal() & setRejected(coffee)}
                          className="px-6 py-2 rounded bg-[#5041BC] text-white">Feedback</button> }</td>

                    
                       </tr>
                })
            }


</tbody>
  </table>
</div>

          </TabPanel>
        </Tabs>
      </div> 


      {/* Rejected coffee modal */}
      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box text-[#5041BC] bg-opacity-90 mainFont">
                        <h3 className="font-bold text-lg">Feedback of {rejected?.coffee_name}!</h3>
                        <p className="py-4">{rejected?.feedback}</p>
                       <div className="modal-action">
                      <form method="dialog">
                 {/* if there is a button in form, it will close the modal */}
                       <button className="px-8 py-2 bg-[#5041BC] text-white rounded">Close</button>
                       </form>
                       </div>
                      </div>
                      </dialog>
    </div>
  );
};

export default MyCoffee;
