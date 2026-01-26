
import Manga from "@/Components/Manga";
import Top10 from "@/Components/Top10";
import { FireIcon } from "@heroicons/react/16/solid";
import { getMangaList } from "@/Service/mangadex-api";


export default async function Home() {

 const data = await getMangaList();
 const top1 = data.data[0];

 const rest = data.data.slice(1);


  return (
    <main className=" min-h-screen flex flex-col bg-background pb-10">
        

      <div className="bg-gray-400">
        Top 1 Latest {top1.id}
      </div>

      <div className="flex justify-center flex-col md:flex-row  my-5 p-2 md:p-4 padding gap-y-4">
        <Manga mangaList={rest} />
        <div className="ml-2 flex-1 px-4 md:px-0 flex flex-col gap-2  md:max-w-100 ">
          <div className="flex-center justify-start gap-2">
            <h2 className="text-2xl font-bold">Hottest</h2>
            <FireIcon className="w-6 h-6 text-amber-500"/>
          </div>
          <Top10 />
        </div>
      </div>
      
    </main>
  );
}
// Home