import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, direction, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      {direction == "bottom" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          {children}
        </motion.div>
      )}
      {direction == "left" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          {children}
        </motion.div>
      )}
      {direction == "right" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          {children}
        </motion.div>
      )}
      {direction == "top" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          {children}
        </motion.div>
      )}
      {direction == "all" && (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: index == 2 || index == 6 ? -100 : 100,
              x:
                index == 0 || index == 4
                  ? -100
                  : index == 3 || index == 7
                  ? 100
                  : 0,
            },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Reveal;
