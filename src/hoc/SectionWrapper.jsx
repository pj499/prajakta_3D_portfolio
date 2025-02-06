import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <motion.section>
      <Component/>
    </motion.section>
  )
}
export default SectionWrapper;
