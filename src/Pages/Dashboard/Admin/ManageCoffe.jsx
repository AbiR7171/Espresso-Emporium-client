import React from 'react';
import { Icon } from "@iconify/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAllCoffee from '../../../Hooks/useAllCoffee';
import useCoffeeRequest from '../../../Hooks/useCoffeeRequest';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageCoffe = () => {

    const [allCoffee, refetch]=useAllCoffee();

    const [allCoffeeRequest]= useCoffeeRequest();



    const handleDeleteCoffee = (coffee)=>{

      Swal.fire({
        title: "Are you really want to delete ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) { 

          axios.delete(`http://localhost:5000/deleteCoffee/${coffee._id}`)
          .then(res =>{
                   console.log(res.data);
                   if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({

                      title: "Deleted!",
                      text: `${coffee.coffee_name} is deleted`,
                      icon: "success"
                    });
                   }
   
          })
        
        }
      });
            
     
    }


    return (
        <div className="w-full h-full singleBg">
        <p className="text-4xl  lastFont font-bold   mt-7 flex gap-2 justify-center items-center text-[#5041BC]">
          Manage Coffee{" "}
          <Icon
            icon="line-md:coffee-filled"
            className="text-[#5041BC] text-6xl"
          />
        </p>
  
        <div className="bg-[#5041BC] rounded p-4 bg-opacity-50">
          <Tabs >
            <TabList  className="bg-white p-2 rounded text-[#5041BC]">
              <Tab >Espresso Coffee</Tab>
              <Tab>Request Coffee</Tab>
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
          <th>Chef</th>
        </tr>
      </thead>
      <tbody> 
              {
                  allCoffee?.map( (coffee, index) =>{
                           return      <tr>
                           <th>{index + 1}</th>
                           <td>{coffee?.coffee_name}</td>
                           <td><img src={coffee?.coffee_picture} className="rounded w-14 h-14" alt="" /></td>
                           <td>{coffee?.price_bdt}</td>
                           <td>{coffee?.price_usd}</td>
                           <td>{coffee?.chef}</td>
                           <td><Link to={`/singleCoffee/${coffee._id}`} className="bg-blue-600 px-10 py-3 rounded text-white ">Details</Link></td>
                           <td><button onClick={()=> handleDeleteCoffee(coffee)} className="bg-red-600 px-10 py-3 rounded text-white ">Delete</button></td>
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
                  allCoffeeRequest?.map( (coffee, index) =>{
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

export default ManageCoffe;