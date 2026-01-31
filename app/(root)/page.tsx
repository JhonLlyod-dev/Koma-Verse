
import Manga from "@/Components/Manga";
import Top10 from "@/Components/Top10";
import { FireIcon } from "@heroicons/react/16/solid";
import { getMangaList } from "@/Service/mangadex-api";
import Top1 from "@/Components/Top1";


export default async function Home() {

 const data = await getMangaList();
 const top1 = data?.data[0];

 const rest = data.data.slice(1);

  return (
    <main className="relative min-h-screen flex flex-col pb-10 ">

      <div className=" flex justify-center flex-col md:flex-row  my-5 p-2 md:p-4 padding gap-y-4">

        <div className="flex-1 sm:flex-1/3 lg:flex-1/2 w-full flex-center gap-8 md:gap-4 md:gap-y-12">

          <Top1 top1={top1} />

        </div>

        <div className="hidden ml-2 lg:flex-center flex-1 px-4 md:px-0 flex-col gap-2  md:max-w-100 ">
          <div className="bg-background/50 relative w-fit gap-5 flex-center justify-between  border-x-3 border-amber-500 backdrop-blur-xs p-8 px-12  rounded-lg shadow-lg">
            <span className="absolute top-2 left-2 bg-background text-xs font-black rounded-sm text-white px-2 py-1">Powered By</span>
            <div className="flex-center flex-col">
              <img src="/mangaDex.png" alt="mangaDex logo" className="w-20" />
              <h3 className="font-bold text-amber-500">MangaDex</h3>
            </div>
          </div>
        </div>
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