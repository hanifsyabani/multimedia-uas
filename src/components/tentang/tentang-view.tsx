"use client";

import { useState } from "react";
import Link from "next/link";
import { team } from "@/lib/items";

export default function TentangView() {

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/90 to-blue-900"></div>
          <img
            src="/indonesia.svg"
            alt="Keindahan Nusantara"
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang Jelajah Nusa
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Menghadirkan keindahan Indonesia dari Sabang sampai Merauke,
              memperkenalkan kekayaan budaya dan pesona alam Nusantara dalam
              genggaman Anda.
            </p>
            <div className="flex justify-center">
              <Link href={"/jelajah"}>
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors cursor-pointer">
                  Lihat Daerah
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-16 md:h-20 fill-white"
          >
            <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <section className="py-12 md:py-16 px-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Tim Kami</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Orang-orang kreatif dan berdedikasi di balik Jelajah Nusa
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md transform hover:-translate-y-1 transition-transform"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-blue-800">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* 
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-blue-200" />
              </div>
              <h3 className="text-4xl font-bold mb-2">34</h3>
              <p className="text-blue-200">Provinsi di Indonesia</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera size={28} className="text-blue-200" />
              </div>
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p className="text-blue-200">Foto & Video</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-blue-200" />
              </div>
              <h3 className="text-4xl font-bold mb-2">120+</h3>
              <p className="text-blue-200">Kolaborator Lokal</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-blue-200" />
              </div>
              <h3 className="text-4xl font-bold mb-2">17+</h3>
              <p className="text-blue-200">Penghargaan</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
