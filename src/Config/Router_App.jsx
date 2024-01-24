import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Product_detail from '../Component/Product_detail'
import { Product } from '../Component/Product'

export const Router_App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='' element={<Product/>}/>
                <Route path='/product/:id' element={<Product_detail />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
  
}

