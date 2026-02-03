import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Web3Page from './pages/Web3Page'
import PryxPage from './pages/PryxPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web3" element={<Web3Page />} />
        <Route path="/pryx" element={<PryxPage />} />
      </Routes>
    </Router>
  )
}
