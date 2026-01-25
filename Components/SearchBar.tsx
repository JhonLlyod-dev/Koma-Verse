'use client';
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full flex justify-between rounded-sm bg-gray-500/10 px-5 py-3">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by title or author"
        className="font-extralight outline-0 w-full bg-transparent"
      />
    </div>
  );
}
