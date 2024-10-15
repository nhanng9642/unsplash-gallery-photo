import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Photos from './components/Photos'
import DetailPhoto from './components/DetailPhoto'
import { Link } from 'react-router-dom'
function App() {

  return (
    <Router>
        <Routes>
            <Route path="/unsplash-gallery-photo/" element={
                <>
                <h1>Home</h1>
                <Link to="photos">Photo page </Link>
                </>
            } />
            <Route path="/unsplash-gallery-photo/photos" 
                element={<Photos />} 
            />
            <Route path="/unsplash-gallery-photo/photos/:id" 
                element={<DetailPhoto />} />
        </Routes>
    </Router>
  )
}

export default App
