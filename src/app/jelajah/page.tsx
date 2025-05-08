import { CardJelajah } from "@/components/jelajah/card-jelajah";
import MainNav from "@/components/main-nav";

export default function page() {
  return (
    <>
      <MainNav />
      <section className="relative w-full min-h-screen  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: "url('/indonesia.svg')" }}
        />

        <div className="relative z-10  mt-20">
          <div className="text-[#152259]">
            <h1 className="text-4xl font-bold text-center">
              Selamat datang di Jelajah Nusa
            </h1>
            <p className="mt-2 text-lg text-center">
              Eksplorasi kekayaan Nusantara dari ujung barat hingga timur
            </p>
          </div>
          <div className="px-8 my-20 ">
            <CardJelajah />
          </div>
        </div>
      </section>
    </>
  );
}
