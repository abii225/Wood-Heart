
import { Route, Routes } from 'react-router-dom'

import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import HomePage from '../Pages/HomePage'
import ProductPage from '../Pages/ProductPage'
import SingleProduct from '../Pages/SingleProduct'
import Dashboard from '../../Admin/Pages/Dashboard'

import Users from '../../Admin/Pages/Users'
import Products from '../../Admin/Pages/Products'
import Admin from '../../Admin/Pages/Admin'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}   />  
        <Route path="/:name" element={<ProductPage/>} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path='/admin' element={<Admin />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
            <Route path="/admin/users" element={<Users/>}></Route>
            <Route path="/admin/products" element={<Products/>}></Route>
        <Route path="*" element={<Stack spacing={3}>
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>  </Stack>} />
    </Routes>
  )
}

export default MainRoutes