import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayOut from '../layout/root-layout'
import Home from '../pages/home'

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayOut/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
])

const RootRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default RootRouter