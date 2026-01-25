import List from "./List";
import { getPopularManga } from "@/Service/mangadex-api";
import { getMangaTitle,getCoverUrl } from "@/utils/utils";


export default async function Top10() {

  const mangaList = await getPopularManga();

  console.log(mangaList);

  let count: number = 0; 
  return (
    <div className="flex flex-col gap-4 ">
      {mangaList.data.map((manga: any) => {

        const title = getMangaTitle(manga.attributes.title);
        const author = manga.relationships[0].attributes.name;
        const id = manga.id;

        const coverUrl = getCoverUrl(manga);
        count++;

        return (
          <List key={id} id={id} title={title} author={author} ImageUrl={coverUrl || ""} ranking={count }  />
        )
      })}
    </div>
  );
}
