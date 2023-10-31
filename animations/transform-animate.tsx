import { ReactNode } from 'react';
import { Variants, motion } from 'framer-motion';

interface AnimationVariants extends Variants {
    hover: {
        y: number;
        transition: {
            duration: number;
            repeat: number;
            repeatType: 'reverse' | 'loop' | 'mirror';
        };
    };
}

const animationVariants: AnimationVariants = {
    initial: {
        y: 0,
    },
    hover: {
        y: 3,
        transition: {
            duration: 0.3,
            repeat: 1,
            repeatType: 'reverse',
        },
    },
};

const TransformAnimate = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            whileHover="hover"
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};

export default TransformAnimate;