import bgHero from "../assets/bgpemilihan.png";

import organik from "../assets/erun1.png";
import plastik from "../assets/erun2.png";
import kertas from "../assets/erun3.png";

import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ContentPemilahan() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-b from-green-100 via-green-50 to-purple-50">

        {/* ================= HERO ================= */}
        {/* ================= HERO ================= */}
        <div className="relative w-full overflow-hidden -mt-16 min-h-[300px] md:min-h-[480px]">

          {/* background */}
          <div
            className="
      absolute inset-0
      bg-no-repeat
      bg-cover
      bg-top
      md:bg-contain
      md:bg-right
    "
            style={{ backgroundImage: `url(${bgHero})` }}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>

          {/* content */}
          <div className="relative max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-4 md:py-20">

            <h1 className="text-2xl md:text-5xl font-bold text-white md:text-gray-800 mb-3 md:mb-4 leading-tight max-w-2xl">
              Panduan Pemilahan Sampah
            </h1>

            <p className="text-sm md:text-lg text-white md:text-gray-600 max-w-xl leading-relaxed">
              Pelajari cara memilah{" "}
              <span className="font-semibold text-green-300 md:text-green-700">
                sampah
              </span>{" "}
              dengan benar agar dapat didaur ulang dan dikelola dengan baik
              untuk lingkungan yang lebih bersih dan sehat.
            </p>

          </div>

        </div>


        {/* ================= JENIS SAMPAH ================= */}
        <div className="max-w-6xl mx-auto px-4 md:px-12 py-10 md:py-14">

          <h2 className="text-xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-800">
            Jenis-Jenis Sampah dan Cara Memilahnya
          </h2>


          {/* LIST */}
          <div className="space-y-4 md:space-y-5">


            {/* ORGANIK */}
            <div
              className="
  relative
  rounded-2xl
  shadow-sm
  hover:shadow-md
  transition
  p-4
  md:p-6
  overflow-hidden
  flex
  items-center
  justify-center
  text-center
  min-h-[140px]
  md:min-h-0

  bg-gray-100
  md:bg-transparent

  bg-no-repeat
  bg-[length:contain]
  bg-right-bottom

  md:bg-cover
  md:bg-center
  "
              style={{
                backgroundImage: `url(${organik})`,
              }}
            >

              <div className="absolute inset-0 bg-white/60 md:bg-transparent"></div>

              <div className="relative max-w-md">

                <h3 className="font-semibold text-base md:text-lg text-gray-800">
                  Organik
                </h3>

                <p className="text-gray-700 md:text-gray-600 text-sm md:text-base mt-1 md:mt-2">
                  Sampah sisa makanan, sisa sayuran, buah-buahan,
                  dan daun kering.
                </p>

              </div>

            </div>



            {/* PLASTIK */}
            <div
              className="
  relative
  rounded-2xl
  shadow-sm
  hover:shadow-md
  transition
  p-4
  md:p-6
  overflow-hidden
  flex
  items-center
  justify-center
  text-center
  min-h-[140px]
  md:min-h-0

  bg-gray-100
  md:bg-transparent

  bg-no-repeat
  bg-[length:contain]
  bg-right-bottom

  md:bg-cover
  md:bg-center
  "
              style={{
                backgroundImage: `url(${plastik})`,
              }}
            >

              <div className="absolute inset-0 bg-white/60 md:bg-transparent"></div>

              <div className="relative max-w-md">

                <h3 className="font-semibold text-base md:text-lg text-gray-800">
                  Plastik & Logam
                </h3>

                <p className="text-gray-700 md:text-gray-600 text-sm md:text-base mt-1 md:mt-2">
                  Botol plastik, kaleng minuman, wadah plastik,
                  dan kantong plastik kecil.
                </p>

              </div>

            </div>



            {/* KERTAS */}
            <div
              className="
  relative
  rounded-2xl
  shadow-sm
  hover:shadow-md
  transition
  p-4
  md:p-6
  overflow-hidden
  flex
  items-center
  justify-center
  text-center
  min-h-[140px]
  md:min-h-0

  bg-gray-100
  md:bg-transparent

  bg-no-repeat
  bg-[length:contain]
  bg-right-bottom

  md:bg-cover
  md:bg-center
  "
              style={{
                backgroundImage: `url(${kertas})`,
              }}
            >

              <div className="absolute inset-0 bg-white/60 md:bg-transparent"></div>

              <div className="relative max-w-md">

                <h3 className="font-semibold text-base md:text-lg text-gray-800">
                  Kertas
                </h3>

                <p className="text-gray-700 md:text-gray-600 text-sm md:text-base mt-1 md:mt-2">
                  Koran, kertas bekas, karton, dan majalah.
                </p>

              </div>

            </div>

          </div>

        </div>



        {/* ================= BUTTON BACK ================= */}
        <div className="max-w-6xl mx-auto px-4 md:px-12 pb-12 md:pb-16 flex justify-center md:block">

          <button
            onClick={() => navigate("/content")}
            className="
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            text-white
            px-6
            md:px-10
            py-2
            md:py-3
            rounded-xl
            shadow-lg
            hover:scale-105
            hover:shadow-xl
            transition
            w-full
            md:w-auto
            "
          >
            Kembali ke Edukasi
          </button>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default ContentPemilahan;