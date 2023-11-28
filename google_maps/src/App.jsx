import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Map1 from "./pages/Map1";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full">
        <Map1 />
      </div>
    ),
  },
  {
    path: "/map2",
    element: <div>map 2</div>,
  },
]);
function App() {
  return (
    <div className="font-roboto w-ful">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
