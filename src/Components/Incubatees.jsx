import React from "react";
import Navbar from "./Navbar";  // Ensure Navbar is correctly imported
import Footer from "./Footer";  // Ensure Footer is correctly imported
import "./App.css"; // Assuming styles are in App.css

const incubatees = [
  ["Kaar Infotech Pvt Ltd", "Software Development", "https://www.kaarinfotech.com"],
  ["Dynattral Tech Pvt Ltd", "Industrial Automation", "https://dynattral.in"],
  ["Aran Tecnovation Pvt Ltd", "Manufacturing", "https://www.arantec.app/#"],
  ["Nalvinai Energy Systems", "Energy Solutions", "-"],
  ["K.G.Automation", "Industrial Automation", "https://www.linkedin.com/in/rajaganesh-palanivelu-7b403587/"],
  ["Native Guru", "Edutech", "https://nativeguru.in/"],
  ["Lights Inc.", "Fintech", "-"],
  ["High Performance Engineering & Research Pvt Ltd", "Hardware / IoT", "https://hiperautomotive.com"],
  ["MachDatum Private Limited", "Hardware / IoT", "https://machdatum.com"],
  ["Chimertech Private Limited", "Veterinary Science", "https://chimertech.com"],
  ["Agram Agro Tech", "Agriculture", "-"],
  ["MN Vesthar Farm Tech", "Agriculture", "-"],
  ["SMT Flyash Bricks", "Manufacturing", "-"],
  ["Natraj Glossy Coaters", "Energy", "-"],
  ["Maidee Games Pvt Ltd", "Edu Tech", "https://www.madiee.com/"],
  ["Mr.R.Sankaranarayanan", "Energy", "https://www.linkedin.com/in/sankaranarayanan-ravichandran-7775b1273/"],
  ["MWS Research Centre", "Agritech", "https://www.mwsresearchcentre.com/"],
  ["Real Tech GPS Private Limited", "Automobile", "https://realtechgps.com"],
  ["Nutrigenetics Life Science Pvt. Ltd", "Agritech", "https://www.linkedin.com/in/harini-rangarajan-217098114/"],
  ["GSR Tech Solutions", "Textile", "-"],
  ["DBS Tech Solutions", "Textile", "-"],
  ["Vesrad Technologies", "Energy", "https://www.vesrad.in/"],
  ["Progen Foods Pvt Ltd", "Food Tech", "https://www.linkedin.com/in/prateeka-haldorai-86722916b/"],
  ["Universal Industries", "Agriculture", "http://www.universalindustriesindia.in/"],
  ["The Cloud Company", "IT Service Management", "https://thecloud.company/"],
  ["Green Collar Agritech Solutions Pvt Ltd", "Agriculture", "https://greencollaragri.com/"],
  ["IDot Inc.", "IT Service Management", "https://idotinc.in/"],
  ["Squadl Technologies Pvt Ltd", "Software Development", "https://squadl.in/"],
  ["Grow Your Farms", "AgriTech", "https://www.growyourfarms.com/"],
];

const Incubatees = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h2>Current Incubatees</h2>
        <a href="graduated_incubatees.html">Graduated Incubatees</a>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Incubatee</th>
              <th>Domain / Sector</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {incubatees.map((inc, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{inc[0]}</td>
                <td>{inc[1]}</td>
                <td>
                  {inc[2] !== "-" ? (
                    <a href={inc[2]} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Incubatees;
