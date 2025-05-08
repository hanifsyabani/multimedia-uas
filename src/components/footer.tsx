import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#152259] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">Jelajah Nusa</h3>
          <p className="mt-2 text-sm text-gray-300">
            Menjelajahi keindahan dan kekayaan budaya Nusantara secara virtual.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Menu</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Beranda{" "}
              </Link>
            </li>
            <li>
              <Link href="/provinsi" className="hover:text-white">
                Jelajah
              </Link>
            </li>
            <li>
              <Link href="/video" className="hover:text-white">
                Tentang
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Kontak</h4>
          <p className="mt-2 text-sm text-gray-300">
            Email: info@jelajahnusa.id
          </p>
          <p className="text-sm text-gray-300">Instagram: @jelajahnusa</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jelajah Nusa. All rights reserved.
      </div>
    </footer>
  );
}
