'use client';

import { getCoverUrl, getMangaTitle, getMangaDesc } from "@/utils/utils";
import { useRouter } from "next/navigation";


export default function top1({  top1 }: any) {
  
  if (!top1) return null;

  const router = useRouter();

  function handleClick() {
    router.push(`/manga/${top1.id}`);
  }

  return(
            <div onClick={handleClick} className="cursor-pointer flex flex-col md:flex-row w-full max-w-4xl mx-auto gap-4 md:gap-6 
                            bg-background/50 border-x-3 md:border-x-6 border-amber-500 
                            backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
    
              {/* Manga Cover */}
              <div className="w-full md:w-40 lg:w-52 h-60 md:h-72 flex-shrink-0">
                <img
                  src={getCoverUrl(top1) || " https://via.placeholder.com/150x200"}
                  alt="Manga Cover"
                  className="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg shadow-md"
                />
              </div>
    
              {/* Manga Info */}
              <div className="flex flex-col justify-between gap-3 p-4 text-white">
                <div className="flex flex-col gap-3">
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold line-clamp-3">
                    {getMangaTitle(top1?.attributes?.title)}
                  </h2>
    
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {top1.attributes?.tags.map((tag: any) => (
                      <span
                        key={tag.id}
                        className="px-2 py-1 text-xs sm:text-sm font-semibold text-gray-900 
                                  bg-gray-200 rounded dark:bg-background dark:text-foreground"
                      >
                        {tag.attributes.name["en"]}
                      </span>
                    ))}
                  </div>
    
                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
                    {getMangaDesc(top1.attributes?.description)}
                  </p>
                </div>
    
                {/* Author / Publisher / Relationship */}
                <span className="text-gray-400 text-sm sm:text-lg font-extralight">
                  {top1.relationships[0]?.attributes?.name}
                </span>
              </div>
            </div>
  )
}