import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion.js';
import { services } from '../constants/index.js';
import { Tilt } from 'react-tilt';
import {SectionWrapper} from '../hoc'
import { saveAs } from 'file-saver';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:400}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const handleDownload = () => {
    const pdfUrl = new URL('../assets/CV.pdf', import.meta.url);
    fetch(pdfUrl.href)
      .then(response => response.blob())
      .then(blob => saveAs(blob, 'Prajakta Pikale Resume.pdf'));
  };
  return (
    < >
      <motion.div variants={textVariant()}  id="about">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>


      <div className='flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:text-justify'>
          I'm a Master's student in Computer Science at University of Illinois, Urbana-Champaign with an experience in software development, UX design and cloud computing. Interested in sharing knowledge, I'm also a Teaching Assistant at UIUC. I have hands-on experience in full-stack web development with JavaScript, React, Node.js, Express.js, MongoDB along with cloud automation to enhance productivity. I'm a quick learner and collaborate closely with cross-functional teams to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </div>

      <a rel="noopener noreferrer" className='cursor-pointer block mt-20 m-auto md:mt-10 lg:mt-5'>
        <button className="bg-indigo-900 hover:bg-indigo-950 accent-gray-200 font-medium py-2 md:py-3 lg:py-3 px-4 md:px-6 lg:px-6 rounded inline-flex items-center" onClick={handleDownload}>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span className="text-sm md:text-base lg:text-lg">Download CV</span>
        </button>
      </a>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");