import { RouterProvider, createBrowserRouter, Router } from "react-router-dom";
import Layout from "./Layout";
import Home from "./router/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorNav from "./Layout/error";
import About from "./router/about";
import Hasil from "./router/hasil";
export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement : <ErrorNav/>,
      children: [
        { path: "/", element: <Home /> },
        {path:"/about", element:<About/>},
        {
          path : "/hasil", element : <Hasil/>
        }
      ],
    },
    
  ]);
  return <RouterProvider router={route} />;
}
