"use client";
import { ChevronDown, ChevronUp, Undo2 } from "lucide-react";
export default function QuickAccess() {


  const goBack = () => window.history.back();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className=" fixed w-full bottom-0 flex-center left-0 right-0  items-end z-50 p-4 ">
      <div className=" w-fit text-xs flex gap-4 bg-background/50 backdrop-blur-md p-3 px-6 rounded-full shadow-lg ">
        <button
          onClick={goBack}
          className="bg-amber-500 hover:bg-amber-400 text-white px-2 py-1 rounded-md transition"
        >
          <Undo2 />
        </button>

            <button
              onClick={scrollToTop}
              className="bg-amber-500 hover:bg-amber-400 text-white px-2 py-1 rounded-md transition"
            >
              <ChevronUp />
            </button>
            <button
              onClick={scrollToBottom}
              className="bg-amber-500   hover:bg-amber-400 text-white px-2 py-1 rounded-md transition"
            >
              <ChevronDown />
            </button>

      </div>
    </div>
  );
}
