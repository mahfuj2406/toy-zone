import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SingleDetails from "../pages/SingleDetails/SingleDetails";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/MyToys/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>

        },
        {
          path: 'all-toys',
          element: <AllToys></AllToys>,
          loader:()=>fetch('http://localhost:5000/toys')
        },
        {
          path: 'my-toys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'add-toy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: 'update-my-toy/:id',
          element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/update-my-toy/${params.id}`)
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'login', 
          element: <Login></Login>
        },
        {
          path: 'register', 
          element: <Register></Register>
        },
        {
          path: 'toy/:id',
          element: <PrivateRoute><SingleDetails></SingleDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
  ]);


  export default router;