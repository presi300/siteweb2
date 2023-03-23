import React, { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

function Content({
  text,
  image,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { text: string } & { image: string }) {
  return (
    <>
      <div className=" flex w-full min-w-0 flex-col items-center justify-center md:max-w-md lg:max-w-lg">
        <div>
          <motion.div
            animate={{ boxShadow: "5px 5px rgba(0,0,0,0.25)" }}
            className="h-60 max-w-lg overflow-hidden rounded-lg"
          >
            <img className=" overflow-hidden " src={image} alt="image should be here" />
          </motion.div>
          <motion.div
            animate={{ boxShadow: "5px 5px rgba(0,0,0,0.25)" }}
            className="mt-1 w-full rounded-lg bg-gray-700 p-3 text-center "
          >
            <p className="">{text}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Content;
