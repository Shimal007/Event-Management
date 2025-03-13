import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Styles from "./about.module.css";
import HeroImage from "../assets/images/about.jpg"; // Ensure the correct path

const About = () => {
  const contentRef = useRef(null);

  // Scroll to content when clicking "Explore"
  const handleExploreClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={Styles["about-container"]}>
      {/* Hero Section with Background Image */}
      <div className={Styles["hero-section"]}>
        <img src={HeroImage} alt="Technology Business Incubation" className={Styles["hero-image"]} />
        <div className={Styles["hero-overlay"]}>
          <h1 className={Styles["hero-title"]}>Technology Business Incubation</h1>
          <p className={Styles["hero-subtitle"]}>Nurturing Innovation, Empowering Entrepreneurs</p>
          <button className={Styles["explore-button"]} onClick={handleExploreClick}>
            Explore
          </button>
        </div>
      </div>

     

      {/* Content Section */}
      <div ref={contentRef} className={Styles["about-content"]}>
        <h2 className={Styles["about-heading"]}>About TBI@KEC</h2>
        <p className={Styles["about-description"]}>
          We are dedicated to fostering innovation and entrepreneurship by providing resources, mentoring, and funding to startups and aspiring entrepreneurs.
        </p>
      </div>

      {/* Stats Section */}
      <section className={Styles["about-stats"]}>
        <div className={Styles["stat-card"]}>
          <i className="fas fa-building" />
          <h3>44M</h3>
          <p>Project Value</p>
        </div>
        <div className={Styles["stat-card"]}>
          <i className="fas fa-users" />
          <h3>1000+</h3>
          <p>Entrepreneurs Supported</p>
        </div>
        <div className={Styles["stat-card"]}>
          <i className="fas fa-rocket" />
          <h3>100+</h3>
          <p>Startups Launched</p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className={Styles["vision-mission"]}>
        <h2 className={Styles["section-title"]}>Our Vision & Mission</h2>
        <p className={Styles["section-text"]}>
          Our vision is to create a thriving startup ecosystem that nurtures innovative ideas and transforms them into successful businesses.
        </p>
        <ul className={Styles["mission-list"]}>
          <li>Providing mentorship and guidance to young entrepreneurs.</li>
          <li>Facilitating funding opportunities for promising startups.</li>
          <li>Creating a collaborative environment for knowledge sharing.</li>
          <li>Encouraging research and innovation in technology.</li>
        </ul>
      </div>

      {/* Process Flow Section */}
      <div className={Styles["process-container"]}>
      <h2 className={Styles["process-title"]}>Our Process</h2>
      <div className={Styles["process-flow"]}>
        <div className={`${Styles["process-step"]} ${Styles["blue"]}`}>Concept Development</div>
        <span className={Styles["arrow"]}>&#10140;</span> {/* Unicode arrow → */}
        <div className={`${Styles["process-step"]} ${Styles["purple"]}`}>Proof of Concept</div>
        <span className={Styles["arrow"]}>&#10140;</span>
        <div className={`${Styles["process-step"]} ${Styles["green"]}`}>SEED Funding</div>
        <span className={Styles["arrow"]}>&#10140;</span>
        <div className={`${Styles["process-step"]} ${Styles["orange"]}`}>Product Development</div>
        <span className={Styles["arrow"]}>&#10140;</span>
        <div className={`${Styles["process-step"]} ${Styles["red"]}`}>Field Trial</div>
      </div>
    </div>

      {/* Three.js Background */}
      <Canvas className={Styles["canvas"]}>
        <OrbitControls enableZoom={false} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default About;
