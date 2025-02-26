// src/components/FlashGallery.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export function FlashGallery() {
  // Sample flash data - replace with your actual flash designs
  const flashDesigns = [
    { id: 1, src: "/images/IMG_0835.jpg", alt: "Flash Design 1" },
    { id: 2, src: "/images/IMG_0835.jpg", alt: "Flash Design 2" },
    { id: 3, src: "/images/IMG_0835.jpg", alt: "Flash Design 3" },
    { id: 4, src: "/images/IMG_0835.jpg", alt: "Flash Design 4" },
    { id: 5, src: "/images/IMG_0835.jpg", alt: "Flash Design 5" },
    { id: 6, src: "/images/IMG_0835.jpg", alt: "Flash Design 6" },
    // Add more designs as needed
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const openModal = (image) => {
    setSelectedImage(image);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = "unset";
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
