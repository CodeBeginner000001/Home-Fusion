import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Room from "./pages/Room";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/:roomName",
    element: <Room />,
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
