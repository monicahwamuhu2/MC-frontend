import React, { useState, useEffect } from "react";
import therapistImage from "../assets/therapist.jpg";
import { FaRobot, FaComments, FaBrain, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/TherapistSection.css";
import ChatModal from "./ChatModal"; // Import the ChatModal component

const TherapistSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Use effect to manage body scroll lock
  useEffect(() => {
    if (isChatOpen) {
      // Disable scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to ensure scrolling is re-enabled
    // when component unmounts, even if modal is open
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isChatOpen]);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <section id="chatbot" className="therapist-section">
      <div className="animated-bg">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
        <div className="particle particle5"></div>
        <div className="animated-gradient"></div>
      </div>

      <div className="therapist-container">
        <motion.div 
          className="therapist-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="chatbot-avatar"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="robot-icon"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            >
              <FaRobot />
            </motion.div>
            <img src={therapistImage} alt="Pandora AI Therapist" className="therapist-image" />
            <div className="pulse-animation"></div>
          </motion.div>
          
          <div className="chat-sequence">
            <motion.div 
              className="chat-bubble bot"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              How are you feeling today?
            </motion.div>
            
            <motion.div 
              className="chat-bubble user"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              I am anxious about my presentation tomorrow
            </motion.div>
            
            <motion.div 
              className="chat-bubble bot"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              That's completely understandable. Let's work through some techniques to help manage your anxiety.
            </motion.div>
            
            <motion.div 
              className="typing-indicator"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="therapist-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="ai-badge">AI COMPANION</span>
          <h2>Meet Pandora, Your AI Mental Health Companion</h2>
          <p>
            Always available, never judgmental. Pandora is an advanced AI therapist 
            designed to provide immediate emotional support, guided journaling, 
            mindfulness exercises, and personalized mental health resources — 
            whenever you need it, wherever you are.
          </p>

          <motion.div 
            className="features-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div 
              className="feature-item"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <FaComments className="feature-icon" />
              <h3>24/7 Support</h3>
              <p>Immediate guidance whenever you need someone to talk to</p>
            </motion.div>
            
            <motion.div 
              className="feature-item"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <FaBrain className="feature-icon" />
              <h3>Evidence-Based</h3>
              <p>Powered by CBT, mindfulness, and positive psychology techniques</p>
            </motion.div>
            
            <motion.div 
              className="feature-item"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <FaHeart className="feature-icon" />
              <h3>Personalized Care</h3>
              <p>Adapts to your unique needs and personal growth journey</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="chat-cta"
            whileInView={{ opacity: 1, scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="start-chat-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={openChat}
            >
              Chat with Pandora Now
            </motion.button>
            <p className="disclaimer">Not a replacement for professional therapy</p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Chat Modal Component */}
      <ChatModal isOpen={isChatOpen} onClose={closeChat} />
    </section>
  );
};

export default TherapistSection;