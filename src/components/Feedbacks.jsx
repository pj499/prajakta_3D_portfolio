import {motion} from 'framer-motion'

import { styles } from '../styles.js';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion.js';
import {testimonials} from '../constants/index.js';

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => {
  return (
    <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='flex items-center mt-7 gap-1 justify-between'>
          <div className='w-8 h-8 rounded-full object-cover'>

          </div>
          <div className='flex flex-col'>
            <p className='text-white font-medium text-[16px]'><span className='blue-text-gradient'>@</span>{name}</p>
            <p className='text-secondary text-[12px] mt-1'>{designation} of {company}</p>
          </div>

          <img src={image} loading="lazy" alt={name} className='w-10 h-10 rounded-full object-cover' />
        </div>
      </div>
    </motion.div>
  )
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((test, index) => (
            <FeedbackCard key={test.name} index={index} {...test} />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")