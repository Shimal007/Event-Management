import { motion } from "framer-motion";
import tbi1 from '../assets/tbi1.jpg';
import tbi2 from '../assets/tbi2.jpg';
import tbi3 from '../assets/tbi3.jpg';
const AboutImages = () => {
  return (
    <div className="about-images flex flex-col items-center gap-6">
      {[tbi1, tbi2, tbi3].map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`TBI Event ${index + 1}`}
          className="about-img rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default AboutImages;
