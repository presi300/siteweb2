import React, { ButtonHTMLAttributes } from "react";
import Button from "./Button";

function Modal({
  children,
  id,
  hashid,
  title,
}: ButtonHTMLAttributes<HTMLButtonElement> & { id: string } & { hashid: string } & {
  title: string;
}) {
  return (
    <>
      <div
        id={id}
        className="hs-overlay fixed top-0 left-0 right-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className=" m-3 mx-auto mt-0 flex h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] w-full max-w-lg items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100  hs-overlay-open:duration-500">
          <div className="flex max-h-full flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-sm transition-all sm:ml-0">
            <div className="flex items-center justify-center py-3 px-4 ">
              <h3 className="mt-2 font-bold text-white">{title}</h3>
            </div>
            <div className="overflow-y-auto p-4">
              <div className="space-y-4 text-white">{children}</div>
            </div>
            <div className="mb-2 flex items-center justify-end gap-x-2 py-3 px-6">
              <Button variant="ghost" data-hs-overlay={hashid}>
                <p className="w-full text-lg">Затвори</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
