import React from 'react'
import Home from './Home'
import { createHashRouter, RouterProvider} from 'react-router-dom';
import Aboutus from './Aboutus';


function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Home/>
    },
    {
      path: "/aboutus",
      element: <Aboutus/>
    }
  ])
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-cover bg-[url('/assets/paperbg.jpg')] bg-center">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
