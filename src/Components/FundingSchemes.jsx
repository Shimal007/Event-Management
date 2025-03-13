import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Import PDF icon
import './FundingSchemes.css';

const fundingData = [
  { 
    name: "NSTEDB/DST/GoI - PRAYAS Prototype Grant", 
    file: "PRAYAS_Prototype_Grant.pdf" 
  },
  { 
    name: "EDII-TN - Innovation Voucher Program (IVP) Grant", 
    file: "EDII_TN_IVP_Grant.pdf" 
  },
  { 
    name: "NSTEDB/DST/GoI - Seed Support System", 
    file: "Seed_Support_System.pdf" 
  },
  { 
    name: "TDB/DST/GoI - Seed Support System for Start-ups", 
    file: "TDB_Seed_Support.pdf" 
  },
  { 
    name: "MSME/GoI - Support for Entrepreneurial and Managerial Development of SMEs: Through Incubators", 
    file: "MSME_Entrepreneurial_Development.pdf" 
  },
  { 
    name: "NSTEDB/DST/GoI - Incubation Fund", 
    file: "Incubation_Fund.pdf" 
  },
];

const FundingSchemes = () => {
  return (
    <section id="funding" className="funding-section">
      <div className="section-container">
        <h2 className="fade-in">Funding Schemes</h2>
        <ul className="funding-list">
          {fundingData.map((scheme, index) => (
            <li key={index} className="fade-in delay">
              <a href={`/pdfs/${scheme.file}`} target="_blank" rel="noopener noreferrer">
                <FaFilePdf className="pdf-icon" /> {scheme.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FundingSchemes;
