import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    // bg-primary/30 
    <div className="h-full py-36 flex items-center  pt-[300px] lg:pt-[200px]"  >
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8"style={{ marginTop:"150px"}}>
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 lg:max-w-[400px] mx-auto lg:mx-0"
            >
             Explore our comprehensive range of services designed to meet all your web development and design needs. From creating custom, responsive websites to optimizing performance and building multilingual platforms, we deliver excellence at every step.


            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] mb-[100px]"
          >
            <ServiceSlider   />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
