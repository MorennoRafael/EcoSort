import bgHero from "../assets/plastikbg.png";

import img1 from "../assets/plastik1.png";
import img2 from "../assets/plastik4.png";
import img3 from "../assets/plastik2.png";
import img4 from "../assets/plastik3.png";
import img5 from "../assets/pilah.png";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ContentPlastik() {
  const navigate = useNavigate();

  const tips = [
    {
      title: "Gunakan Botol Minum Reusable",
      text: "Bawa botol minum sendiri untuk mengurangi penggunaan botol plastik sekali pakai.",
      img: img1,
    },
    {
      title: "Bawa Tas Belanja Sendiri",
      text: "Gunakan tas belanja kain untuk menggantikan kantong plastik saat berbelanja.",
      img: img2,
    },
    {
      title: "Hindari Sedotan Plastik",
      text: "Gunakan sedotan stainless atau bambu sebagai pengganti sedotan plastik sekali pakai.",
      img: img3,
    },
    {
      title: "Pilih Produk dengan Sedikit Kemasan",
      text: "Belilah produk dengan kemasan minimal dan hindari pembungkusan berlebihan.",
      img: img4,
    },
    {
      title: "Daur Ulang dan Gunakan Kembali",
      text: "Pisahkan sampah plastik dan lakukan daur ulang untuk mengurangi limbah.",
      img: img5,
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <div className="relative border-t overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgHero})` }}
        />

        {/* overlay gelap */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* gradient bawah */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20"></div>


        <div className="relative px-4 md:px-12 py-12 md:py-16">

          <div className="max-w-2xl">

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Mengurangi Sampah Plastik
            </h1>

            <p className="mt-4 text-gray-200 text-lg">
              Pelajari cara sederhana untuk mengurangi penggunaan plastik
              dalam kehidupan sehari-hari dan membantu menjaga lingkungan.
            </p>

          </div>

        </div>

      </div>



      {/* ================= CONTENT ================= */}

      <div className="bg-gradient-to-b from-green-100 via-green-50 to-green-200 px-4 md:px-12 py-12">

        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10">
          Tips Mengurangi Penggunaan Plastik
        </h2>


        <div className="space-y-5">

          {tips.map((item, i) => (

            <div
              key={i}
              className="
        w-full
        bg-white
        rounded-2xl
        shadow-lg
        border border-green-300
        p-4 md:p-6
        flex
        flex-col md:flex-row
        items-start md:items-center
        gap-4 md:gap-6
        hover:shadow-xl
        transition
      "
            >

              {/* MOBILE WRAPPER number + text */}
              <div className="flex items-start gap-3 md:contents">

                {/* NUMBER */}
                <div
                  className="
            w-10 h-10
            flex
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-green-500
            to-emerald-600
            text-white
            font-bold
            shrink-0
          "
                >
                  {i + 1}
                </div>


                {/* TEXT */}
                <div className="flex-1 text-left">

                  <h3 className="font-semibold text-green-900 text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mt-1">
                    {item.text}
                  </p>

                </div>

              </div>


              {/* IMAGE */}
              <div className="w-full md:w-56 flex justify-center md:justify-end">

                <img
                  src={item.img}
                  className="
            w-full
            max-h-44
            md:max-h-56
            object-contain
          "
                />

              </div>

            </div>

          ))}

        </div>



        {/* BUTTON */}

        <div className="mt-12 flex justify-center">

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


      <Footer />

    </>
  );
}

export default ContentPlastik;