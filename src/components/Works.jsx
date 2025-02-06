import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'>
          Following are some of my projects. You can view more of my work on my <a href="https://github.com/pj499" className='text-pink-300 hover:text-pink-400 cursor-pointer' target='_blank'>Github</a>
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");