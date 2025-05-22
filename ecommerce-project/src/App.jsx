import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App