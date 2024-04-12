import { motion } from "framer-motion"
import PropTypes from "prop-types"

const animations = {
  initial: { opacity: 0, x: 1000 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -1000 },
}

interface AnimatedWrapperProps {
  children: React.ReactNode
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
  return (
    <motion.div
      className='pageContainer'
      variants={animations}
      initial='initial'
      animate='animate'
      transition={{ duration: 1 }}
      exit='exit'
    >
      {children}
    </motion.div>
  )
}

AnimatedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AnimatedWrapper
