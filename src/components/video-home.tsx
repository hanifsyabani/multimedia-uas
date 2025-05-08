"use client";
import ButtonJelajah from "./button-jelajah";

export function VideoHome() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/footage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50  flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-white">Jelajah Nusa</h1>
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Jelajahi Nusantara dari Rumah
          </h1>
          <p className="text-white text-sm md:text-base max-w-xl mx-auto my-8">
            Temukan keindahan budaya, alam, dan tradisi dari berbagai daerah di
            Indonesia tanpa harus meninggalkan rumah. Mari berkeliling Nusantara
            secara virtual bersama Jelajah Nusa.
          </p>
         <ButtonJelajah/>
        </div>
      </div>
    </div>
  );
}
