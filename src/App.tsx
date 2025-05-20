import React, { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image } from "./App.types";

const UNSPLASH_ACCESS_KEY = "5n-PTfgQ7iP2vu8J-i93NOM_prStd1aRsB97Fj3CIaY";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query.trim()) return;

    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${UNSPLASH_ACCESS_KEY}`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Unsplash API Error");
        return response.json();
      })
      .then((data) =>
        setImages((prevImages) => [...prevImages, ...data.results])
      )
      .catch((error) => console.error("API Fetch Error:", error));
  }, [query, page]);

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);
  const handleImageClick = (image: Image) => setSelectedImage(image);

  return (
    <div>
      <h1>Image Gallery</h1>
      <SearchBar onSearch={setQuery} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && <LoadMoreButton onClick={loadMoreImages} />}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />{" "}
      {}
    </div>
  );
};

export default App;
