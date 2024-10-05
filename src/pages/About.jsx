import backgroundImage from "../assets/img/coverAbout.png";
import profile from "../assets/img/profile.png";
const About = () => {
    return (
        <>
            <div
                className="h-screen bg-cover bg-center relative flex justify-center items-center "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-white bg-opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-[#00507C]">
                        About Us
                    </h1>
                    <div className="flex justify-center">
                        <button className="mt-2 py-2 px-6 bg-[#0093E5] text-white rounded-full">
                            View More
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="h-screen bg-green-100 flex justify-center items-center">
                <h1 className="text-4xl font-bold">About Page</h1>
            </div> */}
            {/* Horizontal anchor section */}
            <div className="flex justify-center bg-gray-100 py-4 shadow-md">
                <a
                    href="#overview"
                    className="mx-4 text-sm lg:text-lg text-[#0093E5] hover:underline"
                >
                    Overview
                </a>
                <a
                    href="#visi-misi"
                    className="mx-4 text-sm lg:text-lg text-[#0093E5] hover:underline"
                >
                    Visi Misi
                </a>
                <a
                    href="#nilai-perusahaan"
                    className="mx-4 text-sm lg:text-lg text-[#0093E5] hover:underline"
                >
                    Nilai Perusahaan
                </a>
                <a
                    href="#our-team"
                    className="mx-4 text-sm lg:text-lg text-[#0093E5] hover:underline"
                >
                    Our Team
                </a>
            </div>

            {/* Sections for each anchor */}
            <section
                id="overview"
                className="h-full lg:h-screen flex justify-center items-center bg-white py-24 lg:py-0"
            >
                <div>
                    <h2 className="text-center text-4xl font-bold text-[#00507C]">
                        DigitaLink Global Innovation
                    </h2>
                    <p className="text-justify mt-4 px-8 mx-auto">
                        DigitaLink Global Innovation, merupakan perusahaan
                        teknologi yang berfokus pada pengembangan produk IT
                        inovatif yang bertujuan untuk mendorong efisiensi dan
                        modernisasi dalam berbagai aspek kehidupan dan bisnis.
                        Didirikan pada tanggal 29 Juni 2024, perusahaan ini
                        menargetkan fleksibilitas dalam ekspansi dan
                        pengembangan usaha baik di dalam negeri maupun di luar
                        negeri.
                    </p>
                    <p className="text-justify mt-4 px-8 mx-auto">
                        Sebagai entitas yang bergerak di bidang teknologi,
                        DigitaLink Global Innovation berkomitmen kuat untuk
                        menyediakan produk dan layanan IT yang tidak hanya
                        memenuhi kebutuhan pelanggan tetapi juga meningkatkan
                        operasional bisnis kami. Dengan mengusung tagline
                        &quot;Global Innovation, Digital Solutions&quot;,
                        perusahaan kami menawarkan berbagai produk seperti
                        undangan digital dan sistem manajemen event, serta
                        layanan seperti pembuatan website dan aplikasi.
                        DigitaLink juga memprioritaskan keberlanjutan dan
                        tanggung jawab sosial, berupaya mengurangi dampak
                        lingkungan negatif serta mengoptimalkan efisiensi energi
                        melalui pemanfaatan teknologi yang ramah lingkungan.
                    </p>
                </div>
            </section>

            <section
                id="visi-misi"
                className="h-full lg:h-screen flex flex-col justify-center items-center bg-white pt-24 lg:pt-16 px-8"
            >
                <div>
                    <h2 className="text-center text-4xl mb-5 font-bold text-[#00507C]">
                        Visi Misi
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                        <div id="visi" className="p-8 bg-[#0093E5] rounded-2xl">
                            <p className="text-white text-center text-3xl font-bold">
                                Visi
                            </p>
                            <div className="mt-4 bg-white rounded-xl max-w-[444px] h-[330px] p-4">
                                <p className="h-full flex justify-center items-center text-center">
                                    Menjadi pioner global dalam inovasi
                                    teknologi yang menghubungkan dunia digital
                                    untuk mendorong transformasi yang
                                    berkelanjutan dan berdampak positif bagi
                                    masyarakat global.
                                </p>
                            </div>
                        </div>
                        <div id="misi" className="p-8 bg-[#0093E5] rounded-2xl">
                            <p className="text-white text-center text-3xl font-bold">
                                Misi
                            </p>
                            {/* <div className="mt-4 bg-white rounded-xl max-w-[444px] h-[330px] py-4 px-10 ">
                                <ol className="list-decimal">
                                    <li>
                                        Now this is a story all about how, my
                                        life got flipped-turned upside down
                                    </li>
                                </ol>
                            </div> */}
                            <div className="mt-4 bg-white rounded-xl w-auto lg:w-[444px] h-[330px] p-4 overflow-y-auto">
                                <ul className="text-sm leading-tight text-start">
                                    <li className="mb-2">
                                        <strong>1. Inovasi terdepan:</strong>{" "}
                                        Mengembangkan produk dan layanan
                                        teknologi secara revolusioner untuk
                                        memenuhi kebutuhan pelanggan di era
                                        digital yang terus berubah.
                                    </li>
                                    <li className="mb-2">
                                        <strong>
                                            2. Pengalaman pengguna utama:
                                        </strong>{" "}
                                        Menyediakan pengalaman pengguna yang
                                        superior melalui solusi yang intuitif,
                                        aman, dan handal.
                                    </li>
                                    <li className="mb-2">
                                        <strong>
                                            3. Kemitraan Kolaboratif:
                                        </strong>{" "}
                                        Bermitra dengan pelanggan dan mitra
                                        strategis untuk menciptakan nilai tambah
                                        yang signifikan dalam setiap interaksi
                                        dan solusi.
                                    </li>
                                    <li>
                                        <strong>
                                            4. Keberlanjutan dan Tanggung Jawab
                                            Teknologi Sosial:
                                        </strong>{" "}
                                        Mengadopsi praktik berkelanjutan dalam
                                        semua operasi perusahaan serta
                                        mengurangi jejak karbon dan dampak
                                        lingkungan negatif dengan menggunakan
                                        teknologi ramah lingkungan dan
                                        mengoptimalkan efisiensi energi dalam
                                        infrastruktur teknologi.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="nilai-perusahaan"
                className="h-full flex justify-center items-center bg-white pt-24 lg:pt-20 px-8"
            >
                <div>
                    <h2 className="text-center text-2xl font-bold mb-3 text-[#00507C]">
                        Nilai-Nilai Inti Perusahaan
                    </h2>
                    <h2 className="text-center text-4xl font-bold underline underline-offset-2 mb-5 text-[#00507C]">
                        BER DIGITAL
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                        {/* 01 */}
                        <div className="bg-[#00507C] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-2">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="100" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            01
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">Ber</span>
                                        kelanjutan
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Mengutamakan keberlanjutan dalam setiap
                                        langkah dari teknologi yang kami
                                        kembangkan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 02 */}
                        <div className="bg-[#0093E5] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-4">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="80" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            02
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">D</span>
                                        edikasi
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Berkomitmen penuh dalam setiap proyek
                                        dan layanan, memastikan kualitas terbaik
                                        dan kepuasan pelanggan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 03 */}
                        <div className="bg-[#00507C] lg:bg-[#0093E5] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-2">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="100" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            03
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">I</span>
                                        ntegritas
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Menjunjung tinggi integritas dalam
                                        setiap tindakan dan keputusan, menjaga
                                        kepercayaan pelanggan dan mitra bisnis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 04 */}
                        <div className="bg-[#0093E5] lg:bg-[#00507C] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-2">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="100" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            04
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">G</span>
                                        lobalisasi
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Mengembangkan teknologi yang tidak hanya
                                        berdampak lokal, tetapi juga dapat
                                        diterapkan secara global, membantu
                                        mendorong transformasi digital di dunia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 05 */}
                        <div className="bg-[#00507C] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-2">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="100" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            05
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">I</span>
                                        novasi
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Selalu mencari cara baru untuk
                                        berinovasi, menciptakan produk dan
                                        layanan revolusioner yang menjawab
                                        tantangan zaman.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 06 */}
                        <div className="bg-[#0093E5] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-0 lg:gap-2">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="100" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            06
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">T</span>
                                        ransformasi Digital
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Membantu pelanggan dalam proses
                                        transformasi digital yang berkelanjutan,
                                        menciptakan solusi yang relevan dengan
                                        kebutuhan bisnis di era modern.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 07 */}
                        <div className="bg-[#00507C] lg:bg-[#0093E5] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-2">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="100" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            07
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">A</span>
                                        kuntabilitas
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Bertanggung jawab penuh terhadap
                                        kualitas dan hasil dari setiap produk
                                        dan layanan yang kami sediakan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 08 */}
                        <div className="bg-[#0093E5] lg:bg-[#00507C] w-full lg:w-[577px] h-auto lg:h-[151px] p-4 rounded-2xl">
                            <div className="grid grid-cols-8 gap-2">
                                <div className="col-span-1 flex justify-start">
                                    <svg width="100" height="50">
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="stroke-current lg:text-[48px] text-[36px]"
                                            style={{
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                fill: "none",
                                            }}
                                        >
                                            08
                                        </text>
                                    </svg>
                                </div>
                                <div className="ml-2 col-span-7">
                                    <p className="text-3xl lg:text-4xl text-white">
                                        <span className="font-bold">L</span>
                                        ayanan Terbaik
                                    </p>
                                    <p className="mt-2 lg:mt-4 text-white">
                                        Berkomitmen untuk memberikan layanan
                                        terbaik dan solusi yang tepat waktu bagi
                                        setiap pelanggan kami.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="our-team"
                className="h-full lg:h-screen flex justify-center items-center bg-white py-24 lg:py-20 px-8"
            >
                <div>
                    <h2 className="text-center text-2xl font-bold mb-3 text-[#00507C]">
                        Tim Manajemen Kunci
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                        <div className="w-[390px] h-[390px] border-2 border-[#0093E5] rounded-2xl flex flex-col justify-between items-center p-6">
                            {/* Foto */}
                            <img
                                src={profile}
                                alt="Foto Nama"
                                className="rounded-t-xl"
                            />

                            <div className="h-[86px] w-full bg-[#0093E5] rounded-b-xl p-2">
                                <p className="text-2xl font-bold text-white">
                                    Hilal Akbar
                                </p>
                                <p className="text-xl font-bold text-white">
                                    CTO
                                </p>
                            </div>
                        </div>
                        <div className="w-[390px] h-[390px] border-2 border-[#0093E5] rounded-2xl flex flex-col justify-between items-center p-6">
                            {/* Foto */}
                            <img
                                src={profile}
                                alt="Foto Nama"
                                className="rounded-t-xl"
                            />

                            <div className="h-[86px] w-full bg-[#0093E5] rounded-b-xl p-2">
                                <p className="text-2xl font-bold text-white">
                                    Devi Apriyani
                                </p>
                                <p className="text-xl font-bold text-white">
                                    CEO
                                </p>
                            </div>
                        </div>
                        <div className="w-[390px] h-[390px] border-2 border-[#0093E5] rounded-2xl flex flex-col justify-between items-center p-6">
                            {/* Foto */}
                            <img
                                src={profile}
                                alt="Foto Nama"
                                className="rounded-t-xl"
                            />

                            <div className="h-[86px] w-full bg-[#0093E5] rounded-b-xl p-2">
                                <p className="text-2xl font-bold text-white">
                                    Izzati Millah Hanifah
                                </p>
                                <p className="text-xl font-bold text-white">
                                    COO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
