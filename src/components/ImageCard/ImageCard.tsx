import React from "react";
import styles from "./ImageCard.module.css";

interface ImageProps {
  urls: { small: string };
  alt_description: string;
  id: string;
}

interface ImageCardProps {
  image: ImageProps;
  onClick: (image: ImageProps) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
