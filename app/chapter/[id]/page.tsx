import { mangaPanel } from "@/Service/mangadex-api";
import QuickAccess from "./quickAccess";
type Props = {
  params: Promise<{ id: string }> 
}

export default async function Chapter({ params }: Props){
   const { id } = await params; 
   const res = await mangaPanel(id);

   if (!res) {
    return <div>Chapter not found</div>;
  }

  const pages = res.chapter.data.map(
    (file: string) =>
      `${res.baseUrl}/data/${res.chapter.hash}/${file}`
  );


   return ( 
    <main className="relative flex flex-center gap-12 flex-col py-8  w-full">


      <QuickAccess />
      <div className="  flex flex-col items-center gap-8  py-8 px-4 ">
        {pages.map((src: string, index: number) => (
          <img
            key={src}
            src={src}
            alt={`Page ${index + 1}`}
            className="w-full max-w-[800px]  object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </main>
   ) 
  }
