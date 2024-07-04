import React, { useState, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const HeroSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["PARTNER", "COFOUNDER"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-content">
      </div>
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ y: yText }}
      >
        <h1>OPERATIONAL <span className="highlight">{text}</span></h1>
        <p>We collaborate with exceptional <span className="highlight">'Entrepreneurs'</span> and <span className="highlight">'Intrapreneurs'</span> to bring meaningful ideas to reality. We encourage collaboration through validation, talent, resources, and investment.</p>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;