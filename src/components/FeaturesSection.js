import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import featureVideo1 from '../assets/images/whystudio_video.mp4';

const FeaturesSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]); // Adjust as needed
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Adjust as needed

  return (
    <motion.section
      id="features1"
      className="features-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="feature-content">
        <motion.div style={{ y: yText }}>
          <h1>TOGETHER <br /> FROM IDEA TO <span className="highlight">ICONIC </span></h1>
          <p>We believe in an outcome-driven process to test assumptions, eliminate confirmation biases, and operate with passion. We reduce a process that could take years to months. We ensure that you are pursuing the right market, that you are fully validated, and that you are surrounded by incredible teammates.</p>
        </motion.div>
        <motion.video
          className="feature-video"
          autoPlay
          muted
          loop
          style={{ scale: scaleVideo }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <source src={featureVideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </motion.section>
  );
}

export default FeaturesSection;