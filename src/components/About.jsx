import aboutImg from "../assets/pic13.jpeg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a dedicated and versatile front-end developer with a passion
              for creating efficient and user-friendly web applications. I have
              worked with various technologies, including React and Next.js. My
              journey in web development began with a deep curiosity about how
              things work, evolving into a career where I continuously strive to
              learn and adapt to new challenges. I thrive in collaborative
              environments and enjoy solving complex problems to deliver
              high-quality solutions. Outside of coding, I stay active, explore
              new technologies, and contribute to open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
