'use client'

import { CardProvince } from './card-province'
import { VideoHome } from './video-home'
import { Button } from './ui/button'
import ButtonJelajah from './button-jelajah'
import Link from 'next/link'
import MainNav from './main-nav'

export default function HomeBody() {
  return (
    <>
    <section
        style={{
          backgroundImage: "url('/pulau.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <MainNav />
        <div className="relative z-10 mt-20 flex items-center justify-end  md:pr-20">
          <div>
            <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-lg">
              JELAJAH PESONA <br /> NUSANTARA
            </h1>
            <p className="text-white my-4 text-lg max-w-md drop-shadow-md">
              Eksplorasi keindahan Indonesia dari rumah Anda. Temukan budaya,
              tempat, dan cerita dari setiap provinsi melalui media interaktif.
            </p>
            <Link href={'/jelajah'}>
              <ButtonJelajah />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20 flex justify-center gap-20 px-8">
        <div className="w-1/2">
          <h1>Selamat datang di Jelajah Nusa</h1>
          <h1 className="text-4xl font-bold">
            Tentang Wisata Virtual Nusantara
          </h1>
          <p className="text-gray-600 my-8">
            Jelajah Nusa adalah website interaktif yang mengajak kamu
            menjelajahi keindahan dan kekayaan budaya seluruh provinsi di
            Indonesia secara virtual. Melalui kombinasi media seperti video,
            suara, gambar, animasi, dan teks informatif, kamu dapat mengenal
            destinasi wisata, adat, makanan khas, hingga kesenian tradisional
            dari Sabang sampai Merauke — kapan saja dan di mana saja.
          </p>
          <Button className="bg-blue-600 cursor-pointer hover:bg-blue-800">
            Jelajahi Sekarang
          </Button>
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-center text-4xl font-bold">
          Jelajahi <span className="text-blue-600">Nusantara</span>
        </h1>
        <div>
          <CardProvince />
        </div>
      </section>

      <section>
        <VideoHome />
      </section>
    </>
  )
}
