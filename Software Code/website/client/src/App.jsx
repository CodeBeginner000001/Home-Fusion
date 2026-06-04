import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Room from "./pages/Room";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import TotalRoom from "./pages/TotalRoom";

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
  {
    path: "/totalroom",
    element: <TotalRoom/>
  },
  {
    path:"*",
    element: <h1>404 Page Not Found</h1>
  }
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
