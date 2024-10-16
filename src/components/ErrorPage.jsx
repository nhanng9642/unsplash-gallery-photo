
import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img src="https://www.svgfind.com/show/10306241.svg" alt="Internal server error" 
                style={{ width: '300px', height: 'auto' }} />
            <h2>Sorry, Internal Server Error.</h2>
            <Link to="/unsplash-gallery-photo">Go back to Home</Link>
        </div>
      )
}
