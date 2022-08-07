import React, { ReactNode } from "react";
// import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

const variants = {
  hidden: { opacity: 0, x: -20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = (Prop: Props): JSX.Element => {
  const { children, className } = Prop;
  return (
    <motion.main
      {...Prop}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className={`${className}`}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
