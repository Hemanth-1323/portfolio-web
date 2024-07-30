import profilePic from "../assets/bg1.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-semibold tracking-tight lg:mt-4 lg:text-6xl"
            >
              Hemanth D
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:text-4xl"
            >
              Front End Developer & <br>
              ML Enthusiast
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-4 text-lg lg:text-xl max-w-lg"
            >
              I am a passionate front-end developer with a knack for crafting
              robust and scalable web applications. I have honed my skills in
              front-end technologies like React and Next.js, leveraging my
              expertise to create innovative solutions.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pl-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Profile"
            className="h-auto max-h-[500px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
