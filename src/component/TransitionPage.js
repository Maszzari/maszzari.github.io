import {motion} from 'framer-motion';

export default function TransitionPage ({children}) {
  return (
    <motion.div initial={{x: '50%'}} animate={{x: 0}} exit={{x: "-100%", opacity: 0}}>
      {children}
    </motion.div>
  )
}