import "./App.css";
import { Box } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./authentication/login";
import Register from "./authentication/register";
import Forgot from "./authentication/forgot";
import Reset from "./authentication/reset";
import Home from "./home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
    {
      path: "/reset",
      element: <Reset />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <Box className="container" backgroundColor="background">
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
