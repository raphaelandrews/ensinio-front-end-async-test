import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const ZoomAnimate = ({ children }: {children: ReactNode}) => {
  return (
      <motion.div whileHover={{ scale: 1.05 }} >
        {children}
      </motion.div>
  );
};

export default ZoomAnimate;