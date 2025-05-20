import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

interface Image {
  urls: { regular: string };
  alt_description: string;
  user: { name: string };
  likes: number;
}

interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image}
          style={{ maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain" }}
        />
        <div className={styles.info}>
          <p>
            <strong>Author:</strong> {image.user.name}
          </p>
          <p>
            <strong>Likes:</strong> {image.likes}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {image.alt_description || "No description available."}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
