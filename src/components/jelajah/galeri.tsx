import { Camera, Video } from "lucide-react";
import React from "react";

export default function Galeri({ data }: { data: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">
        Galeri {data.nama}
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
          <Video size={20} className="mr-2" />
          Video Keindahan {data.nama}
        </h3>

        <div className="bg-black rounded-lg overflow-hidden aspect-video">
          <video controls poster={data.gambar[0]} className="w-full h-full">
            <source src={data.video} type="video/mp4" />
            Browser Anda tidak mendukung pemutaran video.
          </video>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
          <Camera size={20} className="mr-2" />
          Foto-foto {data.nama}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.gambar.map((img:any, i:number) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={img}
                alt={`${data.nama} ${i}`}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
