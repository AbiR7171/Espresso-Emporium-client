import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import Chef from "../Pages/Components/Chef";
import Main from "../Layouts/Main";
import AllCoffee from "../Pages/Components/AllCoffee";
import SingleCoffee from "../Pages/Components/SingleCoffee";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import UserLoveCart from "../Pages/Dashboard/user/UserLoveCart";
import UserCart from "../Pages/Dashboard/user/UserCart";
import UserPaymentHistory from "../Pages/Dashboard/user/UserPaymentHistory";
import CheckOut from "../Pages/Dashboard/user/CheckOut";
import UserHome from "../Pages/Dashboard/user/UserHome";
import ChefHome from "../Pages/Dashboard/Chef/ChefHome";
import AddNewCoffee from "../Pages/Dashboard/Chef/AddNewCoffee";
import MyCoffee from "../Pages/Dashboard/Chef/MyCoffe";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import ManageCoffe from "../Pages/Dashboard/Admin/ManageCoffe";
import SingleChefs from "../Pages/Components/SingleChefs";
import PrivateRoute from "./PrivateRoute";





const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[ 
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/chef",
                element:<Chef/>
            },
            {
                path:"/allCoffee",
                element:<AllCoffee/>
            },
            {
                path:"/singleCoffee/:id",
                element:<PrivateRoute><SingleCoffee/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
               path: "/singleChef/:id",
               element: <SingleChefs/>,
               loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)

            }
        ]
    }, 
    {
          path:'/dashboard',
          element:<DashBoardLayout/>,
          children:[
             {
                path:'/dashboard/user/loveCart',
                element:<UserLoveCart/>
             },
             {
                path:"/dashboard/user/cart",
                element:<UserCart/>
             },
             {
                path:"/dashboard/user/paymentHistory",
                element:<UserPaymentHistory/>
             },
             {
                path:"/dashboard/user/checkout",
                element:<CheckOut/>
             },
             {
                path:"/dashboard/user/home",
                element:<UserHome/>
             },
             {
                path:'/dashboard/chef/home',
                element:<ChefHome/>
             },
             {
                path:"/dashboard/chef/addNew",
                element:<AddNewCoffee/>
             },
             {
                path:"/dashboard/chef/myCoffee",
                element:<MyCoffee/>
             },
             {
                path:"/dashboard/admin/home",
                element:<AdminHome/>
             },
             {
                path:"/dashboard/admin/manageUser",
                element:<ManageUser/>
             },
             {
                path:"/dashboard/admin/manageCoffee",
                element:<ManageCoffe/>
             }
          ]
    },
    {
        path:"/signUp",
        element:<SignUp/>
    },
    {
        path:"/signIn",
        element:<SignIn/>
    }
])

export default router;