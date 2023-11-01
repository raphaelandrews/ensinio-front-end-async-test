import { ReactNode } from 'react';
import { Variants, motion } from 'framer-motion';

interface JumpVariants extends Variants {
  hover: {
    y: number;
    transition: {
      duration: number;
      repeat: number;
      repeatType: 'reverse' | 'loop' | 'mirror';
    };
  };
}

const jumpVariants: JumpVariants = {
  initial: {
    y: 0,
  },
  hover: {
    y: 50,
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const JumpAnimate = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div variants={jumpVariants} whileHover="hover">
      {children}
    </motion.div>
  );
};

export default JumpAnimate;