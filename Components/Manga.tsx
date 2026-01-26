

import Card from "./Card";
import { getMangaTitle, getMangaDesc } from "@/utils/utils";
import { getCoverUrl } from "@/utils/utils";
type MangaProps = {
  mangaList: any[];
};
export default async function Manga({ mangaList }: MangaProps) {
 

  return (
    <div className="flex-1 sm:flex-1/3 lg:flex-1/2 w-full flex-center flex-wrap gap-8 md:gap-4 md:gap-y-12">
      {mangaList.map((manga: any) => {
        const title = getMangaTitle(manga.attributes.title);
        const author = manga.relationships[0].attributes.name;
        const id = manga.id;
        const contentRating = manga.attributes.contentRating;

        const latest_chapter_id = manga.attributes.latestUploadedChapter;

        const coverUrl = getCoverUrl(manga); // 512px cover for cards

        return (
          <Card
            key={id}
            id={id}
            title={title}
            author={author}
            chapterId={latest_chapter_id}
            imageUrl={coverUrl || ""} // pass the cover
            contentRating={contentRating}
          />
        );
      })}
    </div>
  );
}
