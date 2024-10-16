import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Photos from './components/Photos'
import DetailPhoto from './components/DetailPhoto'
import { Navigate } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {

return (
    <Router>
            <Routes>
                    <Route path="/unsplash-gallery-photo/" element={<Navigate to="/unsplash-gallery-photo/photos" />} />
                    <Route path="/unsplash-gallery-photo/photos" 
                            element={<Photos />} 
                    />
                    <Route path="/unsplash-gallery-photo/photos/:id" 
                            element={<DetailPhoto />} />
                            <Route path="*" element={<NotFound />} />
            </Routes>
    </Router>
)
}

export default App
