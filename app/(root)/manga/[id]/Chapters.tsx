'use client'

import { useState, useEffect } from "react";
import ChapterCard from "@/Components/ChapterCard";
import { getChapterList } from "@/Service/mangadex-api";
import { sortChaptersLatestFirst } from "@/utils/utils";
import {ChevronRight,ChevronLeft} from "lucide-react";

type Props = {
  id: string;
  url: string;
};

const CHAPTERS_PER_PAGE = 6;

export default function MangaChapters({ id, url }: Props) {
  const [chapterList, setChapterList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      setLoading(true);
      const chapters = await getChapterList(id);
      setChapterList(sortChaptersLatestFirst(chapters.data));
      setLoading(false);
    };
    fetchChapters();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading chapters...</div>;

  const totalPages = Math.ceil(chapterList.length / CHAPTERS_PER_PAGE);
  const startIdx = (currentPage - 1) * CHAPTERS_PER_PAGE;
  const currentChapters = chapterList.slice(startIdx, startIdx + CHAPTERS_PER_PAGE);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 py-4 md:py-8 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm rounded-md">
      <div className="flex-1 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Manga Chapters
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentChapters.map((chapter: any, idx) => (
            <ChapterCard key={idx} chapter={chapter} cover={url} />
          ))}
        </ul>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className="bg-amber-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            <ChevronLeft  />
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className="bg-amber-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
