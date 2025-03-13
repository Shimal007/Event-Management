import React from 'react';
import './FundingSupport.css';

const partners = [
  {
    category: "Government",
    logos: [
      { src: "../src/assets/one.png", alt: "DST NIDHI" },
      { src: "../src/assets/two.png", alt: "NSTEDB" },
      { src: "../src/assets/three.png", alt: "Technology Development Board" },
      { src: "../src/assets/four.png", alt: "MSME" },
    ],
  },
  {
    category: "Investors",
    logos: [
      { src: "../src/assets/five.png", alt: "Campus Fund" },
      { src: "../src/assets/six.png", alt: "100x Funding" },
      { src: "../src/assets/seven.jpeg", alt: "Native Angels Network" },
    ],
  },
  {
    category: "Ecosystem Enablers",
    logos: [
      { src: "../src/assets/eight.jpeg", alt: "ISBA" },
      { src: "../src/assets/nine.jpeg", alt: "APIN" },
      { src: "../src/assets/ten.png", alt: "NATIVELEAD" },
      { src: "../src/assets/eleven.png", alt: "EEDISSIA" },
      { src: "../src/assets/twelve.jpeg", alt: "Young Indians" },
      { src: "../src/assets/thirteen.png", alt: "CII" },
    ],
  },
  {
    category: "Service Support to Incubatees",
    logos: [
      { src: "../src/assets/aws.png", alt: "AWS" },
      { src: "../src/assets/zoho.png", alt: "Zoho" },
      { src: "../src/assets/Mathworks.png", alt: "MathWorks" },
      { src: "../src/assets/solidworks.png", alt: "SolidWorks" },
      { src: "../src/assets/gcx.png", alt: "Geomagic Control X" },
      { src: "../src/assets/gdx.png", alt: "Geomagic Design X" },
    ],
  },
  {
    category: "Intellectual Property",
    logos: [
      { src: "../src/assets/metaage.png", alt: "Metayage" },
    ],
  },
];

const FundingSupport = () => {
  return (
    <section className="funding-support">
      <h1>Partners</h1>
      {partners.map((section, index) => (
        <div key={index} className="partner-section fade-in">
          <h3>{section.category}</h3>
          <div className="logos">
            {section.logos.map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.alt} className="partner-logo" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FundingSupport;
