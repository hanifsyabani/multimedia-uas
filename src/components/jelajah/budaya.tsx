
export default function Budaya({data}: {data: any}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
    <h2 className="text-2xl font-bold text-blue-800 mb-6">
      Budaya {data.nama}
    </h2> 

    <div className="mb-6">
      <p className="text-gray-700 leading-relaxed mb-4">
        {data.nama} memiliki kekayaan budaya yang luar biasa dan telah
        terpelihara selama berabad-abad. Berikut beberapa kebudayaan
        khas yang menjadi identitas {data.nama}:
      </p>

      <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
        <h3 className="font-semibold text-blue-800 mb-2">
          Kesenian Tradisional
        </h3>
        <p className="text-gray-700">{data.budaya}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
        <h4 className="font-semibold text-yellow-800 mb-2">
          Pakaian Adat
        </h4>
        <p className="text-gray-700 text-sm">
          Pakaian adat yang masih digunakan oleh masyarakat{" "}
          {data.nama} adalah {data.pakaianAdat}.
        </p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <h4 className="font-semibold text-green-800 mb-2">
          Upacara Adat
        </h4>
        <p className="text-gray-700 text-sm">
          Upacara adat yang masih digunakan oleh masyarakat{" "}
          {data.nama} adalah {data.upacaraAdat}.
        </p>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <h4 className="font-semibold text-purple-800 mb-2">
          Bahasa Daerah
        </h4>
        <p className="text-gray-700 text-sm">
          {data.nama} menggunakan bahasa {data.bahasaDaerah}.
        </p>
      </div>
    </div>
  </div>
  )
}
