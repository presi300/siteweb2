import React, { ButtonHTMLAttributes } from "react";

function NavBar({
  right,
  left,
}: ButtonHTMLAttributes<HTMLButtonElement> & { left: React.ReactNode } & {
  right: React.ReactNode;
}) {
  return (
    <>
      <div className=" fixed z-10  flex h-10 w-full items-center  bg-gradient-to-r from-gray-700 to-black ">
        <div className="mx-4 flex h-full w-1/2 items-center text-white">{left}</div>
        <div className="mx-4 flex h-full w-1/2 items-center justify-end text-white">{right}</div>
      </div>
    </>
  );
}

export default NavBar;
