import "./App.css";
import { Box } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./authentication/login";
import Register from "./authentication/register";
import Forgot from "./authentication/forgot";
import Reset from "./authentication/reset";
import Home from "./pages/home";
import Status from "./pages/status";
import Profile from "./pages/profile";
import DetailImage from "./pages/image";
import Search from "./pages/search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/status",
      element: <Status />,
    },
    {
      path: "/image",
      element: <DetailImage />,
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
