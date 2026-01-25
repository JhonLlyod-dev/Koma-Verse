'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import {Bars3BottomLeftIcon,XMarkIcon,MagnifyingGlassIcon} from '@heroicons/react/16/solid';
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);


  return (
    <header className="flex-center justify-between bg-background px-6 md:px-10 lg:px-20  py-4 padding">
      <div className="flex-center justify-between lg:justify-start gap-5 flex-row-reverse w-full   lg:flex-row ">
        <img src="/koma-verse.png" alt="KomaVerse's Logo" className="  w-20  sm:w-25 md:30"/>

        <ul className="hidden font-medium lg:flex-center  gap-10">
          <li>Latest</li>
          <li>Explore</li>
          <li>Popularity</li>
          <li>About</li>
        </ul>

        <div className="flex-center lg:hidden ">
          <button onClick={() => setMenu(!menu)}>
            {menu! &&  <XMarkIcon className="h-7 w-7 text-white"/> || <Bars3BottomLeftIcon className="h-6 w-6 text-white" />}
          </button>

          <div className={`${menu ? 'flex flex-col' : 'hidden'} bg-background/30 backdrop-blur-xs  fixed top-0 right-0 bottom-0 left-0`}>
            <div className="flex-center bg-background justify-between gap-5 flex-row-reverse w-full px-6 py-4 ">
              <img src="/koma-verse.png" alt="KomaVerse's Logo" className="  w-20  sm:w-25 md:30"/>
              <XMarkIcon onClick={() => setMenu(!menu)} className="h-7 w-7 text-white"/>
            </div>
            <ul className="flex font-semibold py-4 px-8 flex-col gap-8">
              <li>Latest</li>
              <li>Explore</li>
              <li>Popularity</li>
              <li>Search</li>
              <li>About</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="hidden lg:flex w-[80%]">
        <SearchBar />
      </div>
    </header>
  );
}