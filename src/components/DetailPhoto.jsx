import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhoto } from "../utils/photoService.js";
import Loading from "./Loading.jsx";

export default function DetailPhoto() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPhoto = async (id) => {
            setLoading(true);
            try {
                const data = await fetchPhoto(id);
                setPhoto(data);
            } catch (error) {
                console.error("Error fetching photo:", error);
            } finally {
                setLoading(false);
            }
        }

        loadPhoto(id);
    }, [id])
    
    return <div>
        {loading && <Loading />}
        {photo && (
            <div>
                <img className="grid-image" src={photo.urls.full} alt={photo.user.name} />
                <p>{photo.user.name}</p>
                <p className="grid-title">{photo.title}</p>
                <p className="grid-description">{photo.description || photo.alt_description}</p>
            </div>
        )}
    </div>;
}
