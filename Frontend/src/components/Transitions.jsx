import { motion } from "framer-motion";
import React from "react";

const Transitions = (OgComponent) => {
  return function WrappedComponent(props) {
    return (
      <>
        <OgComponent {...props} />

        <motion.div 
          className="slide-in"
          initial={{ scaleY: 0, opacity: 0.7 }}
          animate={{ scaleY: 0, opacity: 0.7 }}
          exit={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
            
        <motion.div 
          className="slide-out"
          initial={{ scaleY: 1, opacity: 1 }}
          animate={{ scaleY: 0, opacity: 0.7 }}
          exit={{ scaleY: 0, opacity: 0.7 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
};

export default Transitions;
