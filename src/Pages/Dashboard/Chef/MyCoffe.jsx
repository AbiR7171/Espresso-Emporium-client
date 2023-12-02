import React from "react";
import { Icon } from "@iconify/react";
import useMyCoffeeRequested from "../../../Hooks/useMyCoffee";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMyCoffeeAccepted from "../../../Hooks/useMyCoffeAccepted";

const MyCoffee = () => {
  const [myCoffee] = useMyCoffeeRequested();
  const[myCoffeeAccepted]=useMyCoffeeAccepted()
  console.log({myCoffeeAccepted});
  console.log({myCoffee});

  console.log();
  return (
    <div className="w-full h-full singleBg">
      <p className="text-4xl  lastFont font-bold   mt-7 flex gap-2 justify-center items-center text-[#5041BC]">
        My Coffee{" "}
        <Icon
          icon="line-md:coffee-filled"
          className="text-[#5041BC] text-6xl"
        />
      </p>

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
                         <th>{index}</th>
                         <td>{coffee?.coffee_name}</td>
                         <td>{coffee?.coffee_picture}</td>
                         <td>{coffee?.price_bdt}</td>
                         <td>{coffee?.price_usd}</td>
                         <td><button className="btn btn-primary btn-sm">Update</button></td>
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
                myCoffee?.map( (coffee, index) =>{
                         return      <tr>
                         <th>{index}</th>
                         <td>{coffee?.coffee_name}</td>
                         <td><img src={coffee?.coffee_picture} className="rounded w-14 h-14" alt="" /></td>
                         <td>{coffee?.price_bdt}</td>
                         <td>{coffee?.price_usd}</td>
                         <td>{coffee?.status}</td>
                       </tr>
                })
            }


</tbody>
  </table>
</div>

          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyCoffee;
