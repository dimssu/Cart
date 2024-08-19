import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage'
import CartPage from './Pages/CartPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        {/* <Route path='*' element={<NotFoundPage />} />  */}
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
