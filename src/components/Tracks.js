import React, { useEffect, useState } from 'react';

const Tracks = () => {
  return (
    <section id="tracks" className="tracks-section">
      <div className="tracks-grid">
        <div className="data">
          <h2>8+</h2>
          <p>YEARS OF ENGAGEMENTS</p>
        </div>
        <div className="data">
          <h2>10+</h2>
          <p>IDEATION TO GROWTH</p>
        </div>
        <div className="data">
          <h2>6+</h2>
          <p>GCC'S SPIN-OFF</p>
        </div>
        <div className="data">
          <h2>4+</h2>
          <p>INTRAPRENEURSHIP ENGAGEMENTS</p>
        </div>
      </div>
      <h1 className="focused-tracks-heading">FOCUSSED <span className="highlight">TRACKS</span></h1>
      <section id="additional-info" className="additional-info-section">
        <div className="additional-info-grid">
          <div className="additional-info">
            <h2>Web3 / DLT</h2>
            <p>Permissionless Distributed Ownership</p>
            <p>Web3 Solutioning, Decentralized Finance (DeFi) and dApps, Blockchain Infrastructure, and Digital Identity Solutions; Cloud-Based Collaboration.</p>
          </div>
          <div className="additional-info">
            <h2>Applied AI & Data Platforms</h2>
            <p>DataScience - AI, ML and NLP</p>
            <p>Practical Implementation of Artificial Intelligence (AI) to solve real-world problems and address specific business or societal challenges.</p>
          </div>
          <div className="additional-info">
            <h2>Applied AI & Data Platforms</h2>
            <p>DataScience - AI, ML and NLP</p>
            <p>Practical Implementation of Artificial Intelligence (AI) to solve real-world problems and address specific business or societal challenges.</p>
          </div>
          <div className="additional-info">
            <h2>Digital Trust</h2>
            <p>Data, Privacy and Protection</p>
            <p>Solutions focus on the reliability and integrity of Digital Technologies and Platforms. Cybersecurity, Data Protection, and Robust.</p>
          </div>
          <div className="additional-info">
            <h2>Infrastructure Softwares</h2>
            <p>Infrastructure-As-Code (IaC)</p>
            <p>DevOps, Cloud Computing, and Digital Infrastructure solutions that can effectively manage and secure networks.</p>
          </div>
          <div className="additional-info">
            <h2>Corporate Innovation</h2>
            <p>Strategy Canvas - Untapped Growth</p>
            <p>HealthTech, EdTech, WealthTech, FinTech, RetailTech, PropTech, InsurTech, LegalTech, BioTech, FemTech, FoodTech, CleanTech and Digital & Transformation.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Tracks;