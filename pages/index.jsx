import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      {/* text section */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi I am <span className="text-accent">Aamir Sohail</span> <br />
            Building the Future <br />
            Of <span className="text-accent">WebSite</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am a skilled web designer and developer with expertise in
            creating modern and user-friendly websites. I turn ideas into
            digital solutions using tools like React.js, Tailwind CSS, and
            Laravel.
          </motion.p>
        </div>
      </div>

      {/* image and particles section */}
      <div className="w-full h-full absolute right-0 bottom-0 top-12 filter grayscale overflow-hidden pointer-events-none">
        {/* background image */}
        <div
          role="img"
          className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[800px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[0%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
