'use client';
type CardProps = {
  title?: string;
  id?: string;
  author?: string;
  chapterId?: string;
  imageUrl?: string;
  contentRating?: string;
};

import { getChapter,getRatings } from "@/Service/mangadex-api";
import { use, useEffect,useState } from "react";
import { formatTimeAgo,contentRatings,formatCount } from "@/utils/utils";
import { StarIcon, UsersIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function Card({title, id, author, chapterId, imageUrl, contentRating = "safe"}: CardProps) {

  const [chapter, setChapter] = useState(null);
  const [date, setDate] = useState("");
  const [mangaRating, setMangaRating] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (chapterId) {
      getChapter(chapterId).then((data) => {
        setChapter(data.data.attributes.chapter);
        setDate(data.data.attributes.updatedAt);
      });
    }

    if (id) {
      getRatings(id).then((data) => {
        setMangaRating(data.statistics[id].follows);
      });
    }
  }, [chapterId,id]);

  const ratingInfo = contentRatings[contentRating as keyof typeof contentRatings] || { label: contentRating, color: "bg-gray-200 text-gray-800" };

  function handleClick() {
    router.push(`/manga/${id}`);
  }

  return (
    <div onClick={handleClick} className="flex flex-col gap-1 md:gap-1 cursor-pointer">
      <div className=" relative w-40 h-60 md:w-50 md:h-70 bg-gray-500 bg rounded-md overflow-hidden shadow-lg">
        <span className={`${ratingInfo.color} absolute top-1 left-1 text-xs font-semibold bg-background rounded-md px-2 py-1`}>{ratingInfo.label}</span>
        <img src={imageUrl} className="w-full h-full object-cover" alt="Manga Cover Image" />
        <div className="absolute top-0 text-background  right-0 left-0 bottom-0 opacity-0  hover:opacity-100 ease-in duration-150 bg-white/40 backdrop-blur-sm p-2 ">
          <p className="font-semibold">{title}</p>
          <p>{author}</p>
          <div className=" mt-4 flex flex-col gap-1 md:gap-2 text-xs font-bold">
            <span className="border border-background p-1 px-2  w-fit rounded-sm">Chapter {chapter}</span>
            <div className="flex-center gap-1 justify-start  p-1 px-2 border border-background w-fit rounded-sm">
                <UsersIcon className=" w-5 h-5"/>
                <p className="">
                  {formatCount(mangaRating)} 
                </p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold truncate w-38 md:w-48">{title}</p>
        <div className="flex items-center gap-1 md:gap-2 text-sm font-medium">
          <span>Chapter {chapter}</span>
          <span className="font-bold text-md">·</span>
          <span>{formatTimeAgo(date)} ago</span>
        </div>
    </div>
  );
}
