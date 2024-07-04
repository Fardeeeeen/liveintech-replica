import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import featureVideo2 from '../assets/images/build-together.mp4';

const FeaturesSection2 = () => {
  const { scrollYProgress } = useViewportScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.section
      id="features2"
      className="features-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="feature-content">
        <div className="feature-text">
          <motion.div style={{ y: yText }}>
            <h1>COCREATE<br /><span className="highlight">&COINVEST</span></h1>
            <p>We provide a streamlined risk-reward framework for co-creation, encompassing validation, solutioning, risk mitigation, and capability-capitalTM, so that entrepreneurs may focus on product and market fit.</p>
          </motion.div>
        </div>
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
          <source src={featureVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </motion.section>
  );
}

export default FeaturesSection2;