
import MangaChapters from "./Chapters";
import { getMangaDetails, getChapterList } from "@/Service/mangadex-api";
import { getCoverUrl,getMangaDesc,getMangaTitle, sortChaptersLatestFirst } from "@/utils/utils";


type Props = {
  params: Promise<{ id: string }>;
};


export default async function Manga({ params }: Props) {
  
  const { id } = await params;

  const getManga = await getMangaDetails(id);

  const manga = getManga.data;

  const url = getCoverUrl(manga);


  return (
    <div className="min-h-screen flex flex-col pb-10 ">
      <div className="max-w-6xl mx-auto mt-10 py-4 md:py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 bg-background/50 backdrop-blur-sm rounded-md ">
        {/* Cover Image */}
        <div className="flex-shrink-0 w-full lg:w-64 h-auto">
          <img
            src={url || "https://via.placeholder.com/150x200"}
            alt={manga.attributes.title["ja-ro"]}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Manga Details */}
        <div className="flex-1  p-6 rounded-lg shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {getMangaTitle(manga.attributes.title)}
          </h1>
          <p className="text-gray-500 text-sm font-medium dark:text-gray-300 mb-4">
            {manga.attributes.originalLanguage.toUpperCase()} | {manga.attributes.year} |{" "}
            {manga.attributes.contentRating}
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-4 ">
            { getMangaDesc(manga.attributes.description) || manga.attributes.description.en}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {manga.attributes.tags.map((tag: any, index: number, ) => (
              <span
                key={index}
                className="text-sm bg-amber-500 text-white px-2 py-1 rounded-full"
              >
                {tag.attributes.name["en"]}
              </span>
            ))}
          </div>

          {/* External Link */}
          <a
            href="#"
            className="inline-block mt-2 text-white bg-amber-500 px-4 py-2 rounded-lg transition"
          >
            Read Manga
          </a>
        </div>
      </div>

      <div>
        {/* Manga Chapters */}
        <MangaChapters id={id} url={url || ""} />
      </div>
    </div>
  );
}
