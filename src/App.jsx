import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Photos from './components/Photos'
import DetailPhoto from './components/DetailPhoto'
function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/photos" 
                element={<Photos />} 
            />
            <Route path="/photos/:id" 
                element={<DetailPhoto />} />
        </Routes>
    </Router>
  )
}

export default App
