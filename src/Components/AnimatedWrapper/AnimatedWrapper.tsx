import { motion } from "framer-motion"
import PropTypes from "prop-types"
import "./AnimatedWrapper.scss"

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
}

interface AnimatedWrapperProps {
  children: React.ReactNode
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
  return (
    <motion.div
      id='pageContainer'
      className='pageContainer'
      variants={animations}
      initial='initial'
      animate='animate'
      transition={{ duration: 0.2 }}
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
