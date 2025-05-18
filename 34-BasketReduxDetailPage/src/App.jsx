import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
