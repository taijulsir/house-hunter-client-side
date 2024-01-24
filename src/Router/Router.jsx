import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Overview from "../Pages/Dashboard/Overview/Overview";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import ManageHouse from "../Pages/Dashboard/ManageHouse/ManageHouse";
import AddNewHouse from "../Pages/Dashboard/AddNewHouse/AddNewHouse";
import UpdateHouse from "../Pages/Dashboard/UpdateHouse/UpdateHouse";


const router = new createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },

    // dashboard routes
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            // renter routes
            {
                path: "overview",
                element: <Overview></Overview>
            },
            {
                path: "manageBookings",
                element: <ManageBookings></ManageBookings>
            },

            // owner routes
            {
                path: "manageHouse",
                element: <ManageHouse></ManageHouse>
            },
            {
                path: "addNewHouse",
                element: <AddNewHouse></AddNewHouse>
            },
            {
                path: "updateHouse/:id",
                element: <UpdateHouse></UpdateHouse>,
                loader: ({params}) => fetch(`https://house-hunter-server-side-alpha.vercel.app/api/singleHouse/${params.id}`)
            }

        ]
    }
])

export default router;