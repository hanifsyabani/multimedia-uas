"use client";

import { useState } from "react";
import {
  Map,
  Video,
  Camera,
  BookOpen,
  UtensilsCrossed,
  Landmark,
  Calendar,
} from "lucide-react";
import { provinces } from "@/lib/items";
import Wisata from "./wisata";
import Budaya from "./budaya";
import Galeri from "./galeri";

export default function DetailProvinsi({ nama }: { nama: string }) {
  const data = provinces.find((province) => province.nama === nama);

  if (!data) {
    return <div>Provinsi tidak ditemukan</div>;
  }
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="relative h-64 md:h-96">
        <img
          src={data.gambar[1]}
          alt={`Pemandangan ${data.nama}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {data.nama}
            </h1>
            <p className="text-white/80 mt-2 max-w-2xl">
              {data.deskripsi.split(".")[0]}.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab("info")}
              className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "info"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              <BookOpen size={18} />
              <span>Informasi Umum</span>
            </button>
            <button
              onClick={() => setActiveTab("wisata")}
              className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "wisata"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              <Map size={18} />
              <span>Destinasi Wisata</span>
            </button>
            <button
              onClick={() => setActiveTab("budaya")}
              className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "budaya"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              <Landmark size={18} />
              <span>Budaya</span>
            </button>
            <button
              onClick={() => setActiveTab("kuliner")}
              className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "kuliner"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              <UtensilsCrossed size={18} />
              <span>Kuliner</span>
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "media"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              <Camera size={18} />
              <span>Galeri</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {activeTab === "info" && (
          <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Tentang {data.nama}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {data.deskripsi}
            </p>

            {data.sejarah && (
              <div className="mt-6">
                <div className="flex items-center mb-3">
                  <Calendar size={20} className="text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-blue-800">
                    Sejarah
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{data.sejarah}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "wisata" && (
          <Wisata data={data} />
        )}

        {activeTab === "budaya" && (
          <Budaya data={data} />
        )}

        {activeTab === "kuliner" && (
          <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Kuliner Khas {data.nama}
            </h2>

            <p className="text-gray-700 mb-6">
              {data.nama} memiliki beragam kuliner khas yang menggugah selera.
              Berikut beberapa makanan yang wajib dicoba saat berkunjung ke{" "}
              {data.nama}:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.kuliner &&
                data.kuliner.map((makanan: any, index: number) => (
                  <div
                    key={index}
                    className="flex bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-1/3">
                      <img
                        src={data.gambar[0]}
                        width={500}
                        height={500}
                        alt={makanan}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="font-bold text-blue-800">{makanan}</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Makanan khas {data.nama} yang memiliki cita rasa unik
                        dan autentik.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {activeTab === "media" && (
            <Galeri data={data}/>
        )}
      </div>


      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
