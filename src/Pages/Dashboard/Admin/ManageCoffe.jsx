import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAllCoffee from "../../../Hooks/useAllCoffee";
import useCoffeeRequest from "../../../Hooks/useCoffeeRequest";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ManageCoffe = () => {
  const [allCoffee, refetch] = useAllCoffee();

  const [allCoffeeRequest] = useCoffeeRequest();

  const [showCoffee, setShowCoffee] = useState({});
  const [rejectCoffee, setRejectCoffee]=useState({})


  const pendingRequest = allCoffeeRequest?.filter(i => i.status === "pending")
  
  const  feedbackRef = useRef()

  console.log(showCoffee);

  console.log(allCoffeeRequest);

  const handleRejectCoffee = () => {
    axios
      .put(`http://localhost:5000/rejectCoffeeRequest/${rejectCoffee._id}`, {
            feedback: feedbackRef.current.value
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: `${rejectCoffee.coffee_name} is rejected`,
          });
        }
      });
  };

  const handleAcceptCoffee = (coffee) => {

            console.log(coffee);
            const {_id,...restData} = coffee

            axios.post("http://localhost:5000/addNewCoffee", {
              ...restData,
              cart:0,
              love:0,
              sell:0
            })
            .then(res =>{
                    console.log(res.data);
                    if(res.data.insertedId){
                          axios.patch(`http://localhost:5000/coffeeAccepted/${coffee._id}`)
                          .then(res =>{
                                      console.log(res);
                                      if(res.data.modifiedCount > 0){
                                        refetch()
                                        const Toast = Swal.mixin({
                                          toast: true,
                                          position: "top-end",
                                          showConfirmButton: false,
                                          timer: 3000,
                                          timerProgressBar: true,
                                          didOpen: (toast) => {
                                            toast.onmouseenter = Swal.stopTimer;
                                            toast.onmouseleave = Swal.resumeTimer;
                                          },
                                        });
                                        Toast.fire({
                                          icon: "error",
                                          title: `${coffee.coffee_name} is Accepted`,
                                        });
                                      }
                                    });
                                      }
                          })
    

  };


  const pendingCoffee = allCoffeeRequest?.filter(c => c.status === "pending")

  return (
    <div className="w-full h-full singleBg">
      <p className="text-4xl  lastFont font-bold   mt-7 flex gap-2 justify-center items-center text-[#5041BC]">
        Manage Coffee{" "}
        <Icon
          icon="line-md:coffee-filled"
          className="text-[#5041BC] text-6xl"
        />
      </p>

      <div className="grid grid-cols-2 gap-5 mt-10 mb-10">

<div className="bg-[#5041BC] bg-opacity-40 p-2 rounded">
  <p className="text-center mainFont text-2xl">Total Coffee's</p>

  <div className="flex items-center justify-center text-6xl mainFont gap-2">
    <p>
    <Icon icon="akar-icons:coffee" />
    </p>{" "}
    <p className="text-center">{allCoffee?.length}</p>
  </div>
</div>


<div className="bg-[#5041BC] bg-opacity-40 p-2 rounded">
  <p className="text-center mainFont text-2xl">Total Requested Coffee's</p>

  <div className="flex items-center justify-center text-6xl mainFont gap-2">
    <p>
    <Icon icon="line-md:coffee-arrow" />
    </p>{" "}
    <p className="text-center">{pendingCoffee?.length}</p>
  </div>
</div>



</div>

      <div className="bg-[#5041BC] rounded p-4 bg-opacity-50">
        <Tabs>
          <TabList className="bg-white p-2 rounded text-[#5041BC]">
            <Tab>Espresso Coffee</Tab>
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
                  {allCoffee?.map((coffee, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{coffee?.coffee_name}</td>
                        <td>
                          <img
                            src={coffee?.coffee_picture}
                            className="rounded w-14 h-14"
                            alt=""
                          />
                        </td>
                        <td>{coffee?.price_bdt}</td>
                        <td>{coffee?.price_usd}</td>
                        <td>{coffee?.chef}</td>
                        <td>
                          <Link
                            to={`/singleCoffee/${coffee._id}`}
                            className="bg-blue-600 px-10 py-3 rounded text-white "
                          >
                            Details
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => handleRejectCoffee(coffee)}
                            className="bg-red-600 px-10 py-3 rounded text-white "
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingRequest?.map((coffee, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{coffee?.coffee_name}</td>
                        <td>
                          <img
                            src={coffee?.coffee_picture}
                            className="rounded w-14 h-14"
                            alt=""
                          />
                        </td>
                        <td>{coffee?.price_bdt}</td>
                        <td>{coffee?.price_usd}</td>
                        <td>{coffee?.status}</td>
                        <td>
                          <button
                            onClick={() =>
                              document
                                .getElementById("my_modal_4")
                                .showModal() & setShowCoffee(coffee)
                            }
                            className="bg-blue-600 px-10 py-3 rounded text-white "
                          >
                            Details
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => handleAcceptCoffee(coffee) }
                            className="bg-green-600 px-10 py-3 rounded text-white "
                          >
                            Accept
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => setRejectCoffee(coffee) & document.getElementById('my_modal_6').showModal()}
                            className="bg-red-600 px-10 py-3 rounded text-white "
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-12/12 h-full max-w-5xl ">
          <div className="singleBg  flex items-center justify-center ">
            <div className=" grid grid-cols-2 gap-4 items-center p-4 rounded-lg  bg-[#5041BC] bg-opacity-50  w-full   h-[400px] ">
              <div className=" relative">
                <img
                  src={showCoffee?.coffee_picture}
                  className="h-[360px] w-full rounded-lg   "
                  alt=""
                />
                <img
                  src={showCoffee?.chef_img}
                  className="absolute w-20 h-20 hover:w-36 hover:h-36 duration-1000 rounded-lg bottom-0 right-0 me-3 mb-6"
                  alt=""
                />
              </div>

              <div className="ms-1 space-y-3">
                <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
                  Name:{" "}
                  <span className="text-[#5C5B5B] font-normal">
                    {showCoffee.coffee_name}
                  </span>
                </p>
                <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
                  {" "}
                  Chef:
                  <span className="text-[#5C5B5B] font-normal">
                    {" "}
                    {showCoffee?.chef}
                  </span>
                </p>
                <p className="text-[#1B1A1A] font-bold text-[21px] mainFont">
                  {" "}
                  Chef Email:
                  <span className="text-[#5C5B5B] font-normal">
                    {" "}
                    {showCoffee?.chef_email}
                  </span>
                </p>
                <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
                  {" "}
                  BD Price:{" "}
                  <span className="text-[#5C5B5B] font-normal">
                    {showCoffee?.price_bdt} Taka
                  </span>
                </p>
                <p className="text-[#1B1A1A] font-bold text-2xl mainFont">
                  {" "}
                  USD Price:{" "}
                  <span claFssName="text-[#5C5B5B] font-normal">
                    $ {showCoffee?.price_usd}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Coffee reject modal  */}
      <dialog id="my_modal_6" className="modal">
  <div className="modal-box w-11/12 h-6/12 max-w-5xl singleBg ">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg flex text-[#5041BC] ">Send feedback <Icon icon="mingcute:comment-2-fill" /></h3>
    <textarea ref={feedbackRef} placeholder="feedback" className="textarea textarea-bordered textarea-lg w-full  mt-2 border-[#5041BC]"  ></textarea> 
    <div className="flex justify-end ">
    <button onClick={handleRejectCoffee} className="bg-[#5041BC]  px-12 py-3 rounded-sm text-white uppercase font-semibold flex items-center gap-1">Send <Icon icon="bi:send-fill" /></button>
    </div>
    <div className="modal-action">
    
    </div>
  </div>
</dialog>

    </div>
  );
};

export default ManageCoffe;
