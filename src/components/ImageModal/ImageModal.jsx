import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.content}>
        <img
          src={urls.regular}
          alt={alt_description}
          className={styles.image}
        />
        <div className={styles.info}>
          <p>
            <strong>Author:</strong> {user.name}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {alt_description || "No description available."}
          </p>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
