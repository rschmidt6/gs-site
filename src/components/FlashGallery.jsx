// src/components/FlashGallery.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function FlashGallery() {
  const flashDesigns = [
    { id: 20, src: "/images/flash/flash_20.png", alt: "Flash Design 20" },
    { id: 19, src: "/images/flash/flash_19.png", alt: "Flash Design 19" },
    { id: 18, src: "/images/flash/flash_18.png", alt: "Flash Design 18" },
    { id: 17, src: "/images/flash/flash_17.png", alt: "Flash Design 17" },
    { id: 16, src: "/images/flash/flash_16.png", alt: "Flash Design 16" },
    { id: 15, src: "/images/flash/flash_15.png", alt: "Flash Design 15" },
    { id: 14, src: "/images/flash/flash_14.png", alt: "Flash Design 14" },
    { id: 13, src: "/images/flash/flash_13.png", alt: "Flash Design 13" },
    { id: 12, src: "/images/flash/flash_12.png", alt: "Flash Design 12" },
    { id: 11, src: "/images/flash/flash_11.png", alt: "Flash Design 11" },
    { id: 10, src: "/images/flash/flash_10.png", alt: "Flash Design 10" },
    { id: 9, src: "/images/flash/flash_09.png", alt: "Flash Design 9" },
    { id: 8, src: "/images/flash/flash_08.png", alt: "Flash Design 8" },
    { id: 7, src: "/images/flash/flash_07.png", alt: "Flash Design 7" },
    { id: 6, src: "/images/flash/flash_06.png", alt: "Flash Design 6" },
    { id: 5, src: "/images/flash/flash_05.png", alt: "Flash Design 5" },
    { id: 4, src: "/images/flash/flash_04.png", alt: "Flash Design 4" },
    { id: 3, src: "/images/flash/flash_03.png", alt: "Flash Design 3" },
    { id: 2, src: "/images/flash/flash_02.png", alt: "Flash Design 2" },
    { id: 1, src: "/images/flash/flash_01.png", alt: "Flash Design 1" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const openModal = (image) => {
    setSelectedImage(image);
    setCurrentImageIndex(
      flashDesigns.findIndex((design) => design.id === image.id)
    );
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = "unset";
  };

  const navigateImages = (direction) => {
    const newIndex =
      (currentImageIndex + direction + flashDesigns.length) %
      flashDesigns.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(flashDesigns[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      navigateImages(-1);
    } else if (e.key === "ArrowRight") {
      navigateImages(1);
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div className="gallery-container">
      <h4 className="flash-title">repeatable designs</h4>

      <motion.div
        className="flash-grid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {flashDesigns.map((design) => (
          <motion.div
            key={design.id}
            className="flash-item"
            onClick={() => openModal(design)}
            variants={itemVariants}
          >
            <img src={design.src} alt={design.alt} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{ maxHeight: isMobile ? "90vh" : "90vh" }}
              />
              <p>{selectedImage.alt}</p>

              <div className="image-navigation">
                <button
                  className="nav-button prev-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages(-1);
                  }}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="nav-button next-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages(1);
                  }}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
