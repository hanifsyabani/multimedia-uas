"use client";


export default function Wisata({data}: {data: any}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">
        Destinasi Wisata di {data.nama}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.destinasi &&
          data.destinasi.map((destinasi:any, index: number) => (
            <div key={index} className="bg-blue-50 rounded-lg overflow-hidden">
              <img
                src={destinasi.img}
                alt={destinasi.nama}
                className="w-full h-80 object-cover"
                width={500}
                height={500}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-blue-800">{destinasi.nama}</h3>
                <p className="text-gray-600 mt-2">
                  Destinasi wisata populer di {data.nama} yang wajib dikunjungi.
                </p>
                <button className="mt-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
