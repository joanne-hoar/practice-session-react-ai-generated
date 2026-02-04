import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import './App.css'

function App() {
  return (
    <>
      <Header title={'Every Day Market'} />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
