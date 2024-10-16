const API_URL = `${import.meta.env.VITE_BASE_URL}/photos`;

const fetchAllPhotos = async (page = 1) => {
    const url = `${API_URL}?page=${page}&per_page=9&client_id=${import.meta.env.VITE_ACCESS_KEY}`;
    const response = await fetch(url);
    const photos = await response.json();
    return photos;
}

const fetchPhoto = async (id) => {
    const response = await fetch(`${API_URL}/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    const photo = await response.json();
    return photo;
}

export { fetchAllPhotos, fetchPhoto };