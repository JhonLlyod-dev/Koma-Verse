interface ListProps{
  id: string,
  title: string,
  author: string,
  ImageUrl: string,
  ranking: number

}

import { getRatings } from "@/Service/mangadex-api";
import { StarIcon } from "@heroicons/react/24/solid";

export default async function List({id, title, author, ImageUrl, ranking}: ListProps){

  const mangaId = id;

  const ratings = await getRatings(mangaId);

  console.log(ratings);

  const mangaRating = ratings.statistics[mangaId].rating.average;

  return(
    <div className="flex gap-4 w-full  overflow-hidden hover:bg-gray-50/10 p-2">
      <img
        src={ImageUrl}
        className="w-14 h-18 object-cover shrink-0"
        alt="image for manga"
      />

      <h2 className="w-10 text-center font-bold text-3xl my-auto opacity-50 shrink-0">
        {ranking}
      </h2>

      <div className="flex flex-col min-w-0 w-full">
        <p className="font-bold truncate w-full">
          {title}
        </p>
        <p className="text-sm font-extralight  truncate">
          {author}
        </p>
        <div className=" flex-center gap-1 justify-start mt-2">
          <StarIcon className="text-amber-500 w-5 h-5"/>
          <p className="text-sm   font-medium">
            {mangaRating.toFixed(2)} 
          </p>
        </div>
      </div>
    </div>
  )
}