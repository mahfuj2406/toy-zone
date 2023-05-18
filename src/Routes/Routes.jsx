import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SingleDetails from "../pages/SingleDetails/SingleDetails";

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
          path: 'toy/:id',
          element: <SingleDetails></SingleDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
  ]);


  export default router;