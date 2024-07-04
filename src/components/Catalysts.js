import React, { useEffect } from 'react';
import catalystImage from '../assets/images/guild1.webp'; 

const Catalysts = () => {
  useEffect(() => {
    const image = document.querySelector('.catalyst-section .image-content img');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            image.classList.add('animate');
          } else {
            image.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(image);

    return () => {
      if (image) {
        observer.unobserve(image);
      }
    };
  }, []);

  return (
    <section id="catalyst" className="catalyst-section">
      <h1>CATALYS<span className="highlight">TS</span></h1>
      <div className="content-wrapper">
        <div className="text-content">
          <h2>THE GUILD FACTOR</h2>
          <p>
            We believe in an outcome-driven process to test assumptions, eliminate confirmation biases, and operate with passion. We reduce a process that could take years to months. We ensure that you are pursuing the right market, that you are fully validated, and that you are surrounded by incredible teammates.
          </p>
          <button>Press Enter</button>
        </div>
        <div className="image-content">
          <img src={catalystImage} alt="Catalyst" />
        </div>
      </div>
    </section>
  );
};

export default Catalysts;