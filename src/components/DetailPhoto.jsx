import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPhoto } from "../utils/photoService.js";
import Loading from "./Loading.jsx";
import NotFound from "./NotFound.jsx";
import ErrorPage from "./ErrorPage.jsx";

export default function DetailPhoto() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notfound, setNotfound] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadPhoto = async (id) => {
            setLoading(true);
            try {
                const data = await fetchPhoto(id);
                
                if (data.errors) {
                    setNotfound(true);
                    return;
                }
                setPhoto(data);
            } catch (error) {
                console.error("Error fetching photo:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadPhoto(id);
    }, [id])
    
    return <div>
        {notfound && <NotFound />}
        {error && <ErrorPage />}
        {loading && <Loading />}
        {photo && (
            <div>
                <img className="grid-image" src={photo.urls.full} alt={photo.user.name} />
                <p>{photo.user.name}</p>
                <p className="grid-title">{photo.title || "Untitled"}</p>
                <p className="grid-description">{photo.description || photo.alt_description}</p>
                <Link to="/unsplash-gallery-photo/photos">Back to Photos</Link>
            </div>
        )}
    </div>;
}
