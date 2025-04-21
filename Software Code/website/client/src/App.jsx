import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Room from "./pages/Room";
import Home from "./pages/Home"
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/room/:roomName",
    element: <Room />,
  },
  {
    path: "/",
    element: <Home/>
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
