import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ChatModal.css";

const ChatModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent modal from closing when clicking inside the modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="chat-modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="chat-modal-container"
            onClick={handleModalContentClick}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="chat-modal-header">
              <h3>Chat with Pandora</h3>
              <motion.button 
                className="close-btn"
                onClick={onClose}
                whileHover={{ backgroundColor: "#f1f1f1" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes />
              </motion.button>
            </div>
            
            <div className="chat-modal-content">
              {isLoading && (
                <motion.div 
                  className="loading-spinner"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div 
                    className="spinner"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Loading your AI companion...
                  </motion.p>
                </motion.div>
              )}
              
              <iframe 
                src="https://frontend-deploy-tawny-one.vercel.app/"
                title="Pandora Chatbot"
                className="chatbot-iframe"
                onLoad={() => setIsLoading(false)}
                style={{ opacity: isLoading ? 0 : 1 }}
                allow="microphone"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatModal;