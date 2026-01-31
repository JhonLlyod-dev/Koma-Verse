"use client";
 import { useRouter } from "next/navigation";
export default function ChapterCard({ chapter, cover }: any) {

  const router = useRouter();


  function handleClick() {
    router.push(`/chapter/${chapter.id}`);
  }

  return (
    <div onClick={handleClick} className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg flex flex-col sm:flex-row overflow-hidden">
      
      {/* Image holder */}
      <div className="w-full sm:w-30 h-32  bg-white">
        <img src={cover} className="w-full h-full object-cover" alt="" />
      </div>

      {/* Content */}
      <div className="p-3 sm:ml-4 sm:py-2 flex flex-col justify-center">
        
        {/* Volume */}
        <span className="text-xs uppercase tracking-wide opacity-70">
          Volume {chapter.attributes.volume}
        </span>

        {/* Chapter */}
        <h3 className="font-semibold text-lg sm:text-xl">
          Chapter: {chapter.attributes.chapter || "No chapter"}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base  line-clamp-2 opacity-80">
          {chapter.attributes.title || "No title"}
        </p>
      </div>
    </div>
  );
}
