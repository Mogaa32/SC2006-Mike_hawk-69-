import { StrictMode } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import RegisterForm from "./Components/RegisterForm/RegisterForm.jsx";
import MakeReport from "./Components/MakeReport/MakeReport.jsx";

const router = createBrowserRouter([
  { path: "/login", element: <App /> },
  { path: "/register", element: <RegisterForm /> },
  { path: "/makereport", element: <MakeReport /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
