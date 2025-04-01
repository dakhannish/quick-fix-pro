import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ElectricianBooking from './pages/ElectricianBooking'
import PlumberBooking from './pages/PlumberBooking'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/electrician" element={<ElectricianBooking />} />
      <Route path="/plumber" element={<PlumberBooking />} />
    </Routes>
  )
}

export default App