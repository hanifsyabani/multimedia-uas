import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function KontakView() {
  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-800 text-white p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-blue-100 mb-6">
                Kami selalu terbuka untuk saran, pertanyaan, dan kolaborasi.
                Jangan ragu untuk menghubungi kami.
              </p>

              <div className="mb-4 flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 text-blue-200 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p className="text-blue-100 text-sm">
                    Indralaya, Ogan Ilir, Sumatera Selatan
                    <br />
                    Indonesia 10110
                  </p>
                </div>
              </div>

              <div className="mb-4 flex items-start">
                <Mail
                  size={20}
                  className="mr-3 text-blue-200 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-blue-100 text-sm">info@jelajahnusa.id</p>
                </div>
              </div>

              <div className="mb-6 flex items-start">
                <Phone
                  size={20}
                  className="mr-3 text-blue-200 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="text-blue-100 text-sm">+62 21 1234 5678</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <FaFacebook size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <FaInstagram size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <FaTwitter size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <FaYoutube size={20} className="text-white" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Kirim Pesan
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
