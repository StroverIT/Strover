"use client"
import React from 'react';

import {motion } from "framer-motion"

const PageWrapper = ({children, className}) => {
    return (
        <motion.div
        className={className}
        initial={{
            opacity:0,
            y:20,
          }}
          animate={{
            opacity: 1,
            y:0
          }}
          exit={{
            opacity:0, y:20
          }}
          transition={{  ease: "easeInOut", duration: 1 }}
        >
            {children}
        </motion.div>
    );
}

export default PageWrapper;
