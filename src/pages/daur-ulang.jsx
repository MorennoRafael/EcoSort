import bgHero from "../assets/bgman.png";

import img1 from "../assets/man1.png";
import img2 from "../assets/man2.png";
import img3 from "../assets/man3.png";
import img4 from "../assets/man4.png";

import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function DaurUlang() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-b from-green-100 via-green-50 to-purple-50">

        {/* ================= HERO ================= */}
        <div className="relative w-full h-[300px] md:h-[390px]">

          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgHero})`,
            }}
          />

        </div>

        {/* ================= TITLE ================= */}
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Manfaat Daur Ulang
          </h1>

          <p className="text-gray-600 text-lg">
            Pelajari berbagai manfaat dari proses daur ulang dan bagaimana
            kontribusi kecil kamu dapat memberikan dampak besar terhadap
            lingkungan.
          </p>

        </div>

        {/* ================= LIST MANFAAT ================= */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-6">


          {/* 1 */}
          <div
            className="relative rounded-2xl shadow-sm overflow-hidden flex items-center p-6"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >

            {/* overlay hanya mobile */}
            <div className="absolute inset-0 bg-white/50 md:bg-transparent"></div>

            {/* content */}
            <div className="relative flex gap-4 items-start max-w-lg">

              <div className="w-20 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                1
              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Mengurangi Sampah di TPA
                </h3>

                <p className="text-gray-700 mt-1">
                  Dengan mendaur ulang, kita dapat mengurangi jumlah sampah
                  yang menumpuk di Tempat Pembuangan Akhir (TPA).
                </p>

              </div>

            </div>

          </div>


          {/* 2 */}
          <div
            className="relative rounded-2xl shadow-sm overflow-hidden flex items-center p-6"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >

            {/* overlay mobile saja */}
            <div className="absolute inset-0 bg-white/50 md:bg-transparent"></div>

            <div className="relative flex gap-4 items-start max-w-lg">

              <div className="w-17 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                2
              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Menghemat Sumber Daya Alam
                </h3>

                <p className="text-gray-700 mt-1">
                  Daur ulang membantu mengurangi penggunaan sumber daya alam
                  seperti kayu, air, dan mineral.
                </p>

              </div>

            </div>

          </div>



          {/* 3 */}
          <div
            className="relative rounded-2xl shadow-sm overflow-hidden flex items-center p-6"
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >

            <div className="absolute inset-0 bg-white/50 md:bg-transparent"></div>

            <div className="relative flex gap-4 items-start max-w-lg">

              <div className="w-17 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                3
              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Menghemat Energi
                </h3>

                <p className="text-gray-700 mt-1">
                  Proses daur ulang membutuhkan energi lebih sedikit
                  dibandingkan membuat produk dari bahan baru.
                </p>

              </div>

            </div>

          </div>



          {/* 4 */}
          <div
            className="relative rounded-2xl shadow-sm overflow-hidden flex items-center p-6"
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >

            <div className="absolute inset-0 bg-white/50 md:bg-transparent"></div>

            <div className="relative flex gap-4 items-start max-w-lg">

              <div className="w-17 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                4
              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Mengurangi Polusi
                </h3>

                <p className="text-gray-700 mt-1">
                  Daur ulang dapat mengurangi polusi udara, tanah,
                  dan air karena mengurangi proses produksi baru.
                </p>

              </div>

            </div>

          </div>


          {/* BUTTON */}
          <div className="pt-6">

            <button
              onClick={() => navigate("/content")}
              className="
      bg-gradient-to-r
      from-green-500
      to-emerald-600
      text-white
      px-10
      py-3
      rounded-xl
      shadow-lg
      hover:scale-105
      hover:shadow-xl
      transition
    "
            >
              Kembali ke Edukasi
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default DaurUlang;