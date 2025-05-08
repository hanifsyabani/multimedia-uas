"use client";
import { provinces } from "@/lib/items";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function CardJelajah() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {provinces.map((place, idx) => (
        <div key={idx} className="max-w-xs w-full">
          <Link 
            href={`/jelajah/${place.nama}`} 
            className="no-underline"
          >
            <div
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "transition-all duration-500"
              )}
              style={{
                backgroundImage: `url(${place.gambar[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="text relative z-10">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  {place.nama}
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  {place.deskripsi}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}