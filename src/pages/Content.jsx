import bgHero from "../assets/bg-edukasi.png";
import plastikImg from "../assets/plastik.png";
import pilahImg from "../assets/pilah.png";
import daurImg from "../assets/daur.png";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Content() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <div className="relative border-t bg-gray-50">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgHero})` }}
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative h-[260px] md:h-[360px] flex items-center">

          <div className="z-10 px-6 md:px-20 text-white">

            <h1 className="text-3xl md:text-5xl font-bold">
              Edukasi
            </h1>

            <p className="mt-2 text-sm md:text-lg">
              Pelajari informasi tentang lingkungan
            </p>

            <p className="text-sm md:text-lg">
              dan panduan pengelolaan sampah
            </p>

          </div>

        </div>
      </div>



      {/* BACKGROUND */}
      <div className="bg-gradient-to-b from-green-50 via-white to-green-100 py-8 md:py-10 px-4 md:px-12">


        {/* CARD 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">


          {/* CARD 1 */}
          <div
            className="
            bg-white/80 backdrop-blur
            rounded-3xl
            shadow-xl
            p-5 md:p-6
            border border-green-100
            hover:-translate-y-2
            transition
          "
          >

            <img
              src={plastikImg}
              className="w-full h-32 md:h-36 object-contain rounded-2xl"
            />

            <h3 className="font-semibold text-base md:text-lg mt-4 text-gray-800">
              Mengurangi Sampah Plastik
            </h3>

            <p className="text-gray-500 text-sm mt-1 mb-4">
              Langkah-langkah untuk mengurangi penggunaan plastik
              dalam kehidupan sehari-hari
            </p>

            <button
              onClick={() => navigate("/content/plastik")}
              className="
              w-full
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              text-white
              py-3
              rounded-xl
              shadow-md
              hover:shadow-lg
              hover:scale-105
              transition
            "
            >
              Baca Selengkapnya
            </button>

          </div>



          {/* CARD 2 */}
          <div
            className="
            bg-white/80 backdrop-blur
            rounded-3xl
            shadow-xl
            p-5 md:p-6
            border border-green-100
            hover:-translate-y-2
            transition
          "
          >

            <img
              src={pilahImg}
              className="w-full h-32 md:h-36 object-contain rounded-2xl"
            />

            <h3 className="font-semibold text-base md:text-lg mt-4 text-gray-800">
              Panduan Pemilahan Sampah
            </h3>

            <p className="text-gray-500 text-sm mt-1 mb-4">
              Panduan untuk memilah sampah organik,
              plastik, logam, dan kertas
            </p>

            <button
              onClick={() => navigate("/content/pemilahan")}
              className="
              w-full
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              text-white
              py-3
              rounded-xl
              shadow-md
              hover:shadow-lg
              hover:scale-105
              transition
            "
            >
              Baca Selengkapnya
            </button>

          </div>

        </div>



        {/* CARD 3 RESPONSIVE */}
        <div
          className="
          mt-8
          rounded-3xl
          overflow-hidden
          shadow-xl
          border border-green-100
          hover:-translate-y-2
          transition
        "
        >

          {/* DESKTOP */}
          <div
            className="
            hidden md:block
            relative
            min-h-[220px]
            bg-cover
            bg-left
          "
            style={{ backgroundImage: `url(${daurImg})` }}
          >

            <div className="flex justify-end items-center h-full px-12">

              <div className="max-w-md text-gray-800">

                <h3 className="text-2xl font-bold">
                  Manfaat Daur Ulang
                </h3>

                <p className="mt-2">
                  Ketahui berbagai manfaat dari proses
                  daur ulang untuk lingkungan kita
                </p>

                <button
                  onClick={() => navigate("/content/daur-ulang")}
                  className="
                  mt-4
                  bg-gradient-to-r
                  from-green-500
                  to-emerald-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  shadow-md
                "
                >
                  Baca Selengkapnya
                </button>

              </div>

            </div>

          </div>


          {/* MOBILE */}
          <div className="md:hidden bg-white p-5">

            <img
              src={daurImg}
              className="w-full h-40 object-cover rounded-xl"
            />

            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              Manfaat Daur Ulang
            </h3>

            <p className="text-gray-600 mt-2">
              Ketahui berbagai manfaat dari proses
              daur ulang untuk lingkungan kita
            </p>

            <button
              onClick={() => navigate("/content/daur-ulang")}
              className="
              mt-4
              w-full
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              text-white
              py-3
              rounded-xl
            "
            >
              Baca Selengkapnya
            </button>

          </div>

        </div>


      </div>


      {/* FOOTER */}
      <Footer />

    </>
  );
}

export default Content;