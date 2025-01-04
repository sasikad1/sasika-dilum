
import { DiJava } from "react-icons/di"; 
import { SiSpringboot, SiReact, SiMysql, SiGithub, SiIntellijidea } from "react-icons/si"; 
import { FaPen } from "react-icons/fa";  // Import a suitable icon
import { motion } from "framer-motion"; // Removed 'animate' and 'transform' as they are unused

// Corrected the function name to 'iconVariants'
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse", // Fixed typo from 'revrse' to 'reverse'
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)} // Changed 'incoVariants' to 'iconVariants'
        >
          <DiJava
            className="text-7xl text-red-400"
            aria-label="Java"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)} // Changed 'incoVariants' to 'iconVariants'
          className="p-4"
        >
          <SiSpringboot
            className="text-7xl text-green-400"
            aria-label="Spring Boot"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)} // Changed 'incoVariants' to 'iconVariants'
          className="p-4"
        >
          <SiReact
            className="text-7xl text-cyan-500"
            aria-label="SiReact"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)} // Changed 'incoVariants' to 'iconVariants'
          className="p-4"
        >
          <SiMysql
            className="text-7xl text-red-700"
            aria-label="SiMysql"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)} // Changed 'incoVariants' to 'iconVariants'
          className="p-4"
        >
          <SiGithub
            className="text-7xl text-yellow-500"
            aria-label="SiGithub"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)} // Changed 'incoVariants' to 'iconVariants'
          className="p-4"
        >
          <SiIntellijidea
            className="text-7xl text-pink-700"
            aria-label="SiIntellijidea"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)} // Changed 'incoVariants' to 'iconVariants'
          className="p-4"
        >
          <FaPen
            className="text-7xl text-orange-500"
            aria-label="SiApi"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
