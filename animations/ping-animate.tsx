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

interface PingAnimateProps {
    hoverY: number;
    children: ReactNode;
}

const PingAnimate = ({ hoverY, children }: PingAnimateProps) => {
    const animationVariants: AnimationVariants = {
        initial: {
            y: 0,
        },
        hover: {
            y: hoverY,
            transition: {
                duration: 0.3,
                repeat: 1,
                repeatType: 'reverse',
            },
        },
    };
    
    return (
        <motion.div
            whileHover="hover"
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};

export default PingAnimate;