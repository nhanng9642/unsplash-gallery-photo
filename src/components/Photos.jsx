import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPhotos } from '../utils/photoService.js';
import Loading from "./Loading.jsx";

export default function Photos() {
    const [photos, setPhotos] = useState([]);
    // Keep track of the current page when user scrolls
    const [page, setPage] = useState(1);

    // Keep track of whether photos are being fetched
    const [loading, setLoading] = useState(true);

    // Keep track of whether there are more photos to fetch
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const loadPhotos = async (page) => {
            setLoading(true);
            try {
                const data = await fetchAllPhotos(page);
                if (data.length === 0) {
                    setHasMore(false);
                } else {
                    setPhotos(prevPhotos => [...prevPhotos, ...data]);
                }
            } catch (error) {
                console.error("Error fetching photos:", error);
            } finally {
                setLoading(false);
            }
        };

        if (hasMore) {
            loadPhotos(page);
        }
    }, [page, hasMore]);

    // Infinite scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            setPage(prevPage => prevPage + 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className="grid-container">
            {photos.length === 0 && !loading && (
                <div className="no-photos">No photos available</div>
            )}
            {photos.map((photo, index) => (
                <div key={photo.id + index} className="grid-item">
                    <Link to={`${photo.id}`}>
                        <img src={photo.urls.small} className="grid-image" />
                    </Link>
                    <div className="grid-author">Author: {photo.user.name}</div>
                </div>
            ))}
        </div>
        {loading && <Loading />}
        {!hasMore && !loading && (
            <div className="end-of-photos">You have reached the end of the photos.</div>
        )}
        </>
    );
}
