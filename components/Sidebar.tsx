import React, { ButtonHTMLAttributes } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Sidebar({ children, title }: ButtonHTMLAttributes<HTMLButtonElement> & { title: string }) {
  return (
    <>
      <motion.div
        animate={{ boxShadow: "8px 8px rgba(0, 0, 0, 0.25)" }}
        id="sidebar"
        className="hs-overlay fixed top-0 left-0 z-[60] m-1 hidden h-full w-full max-w-xs -translate-x-full transform rounded-md bg-gradient-to-r from-black to-gray-800 transition-all duration-200 hs-overlay-open:translate-x-0"
        tabIndex={-1}
      >
        <div className="flex items-center justify-between border-b py-3 px-4 ">
          <h3 className="font-bold text-white ">{title}</h3>
          <button
            data-hs-overlay="#sidebar"
            type="button"
            className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-white transition-all hover:text-gray-500 "
          >
            <span className="sr-only">Close modal</span>
            <IoIosCloseCircle className="color-white h-5 w-5" />
          </button>
        </div>
        {/*Content  */}
        <div className="h-full p-4">{children}</div>
      </motion.div>
    </>
  );
}

export default Sidebar;
