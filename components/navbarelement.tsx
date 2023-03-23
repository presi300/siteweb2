import { motion, AnimatePresence } from "framer-motion";
import React, { ButtonHTMLAttributes } from "react";

function NavBarElement({
  children,
  hashid,
}: ButtonHTMLAttributes<HTMLButtonElement> & { hashid: string }) {
  return (
    <>
      <motion.button
        whileHover={{
          boxShadow: "3px 3px rgba(0, 0, 0, 0.4)",
          scale: 1.1,
          y: -1,
        }}
        transition={{ duration: 0.1 }}
        className="goofyaah mr-2 h-full rounded-sm  px-2 hover:bg-gray-600"
        data-hs-overlay={hashid}
      >
        {children}
      </motion.button>
    </>
  );
}

export default NavBarElement;
