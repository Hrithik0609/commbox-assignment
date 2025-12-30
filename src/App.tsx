import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import ViewProduct from './pages/ViewProduct/ViewProduct';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ViewProduct />} />
    </Routes>
  )
}

export default App