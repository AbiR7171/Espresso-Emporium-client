import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import Chef from "../Pages/Components/Chef";
import Main from "../Layouts/Main";
import AllCoffee from "../Pages/Components/AllCoffee";
import SingleCoffee from "../Pages/Components/SingleCoffee";





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
                element:<SingleCoffee/>,
                loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
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