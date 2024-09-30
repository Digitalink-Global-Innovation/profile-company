import backgroundImage from "../assets/img/coverAbout.png";
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
                    className="mx-4 text-lg text-[#0093E5] hover:underline"
                >
                    Overview
                </a>
                <a
                    href="#visi-misi"
                    className="mx-4 text-lg text-[#0093E5] hover:underline"
                >
                    Visi Misi
                </a>
                <a
                    href="#nilai-perusahaan"
                    className="mx-4 text-lg text-[#0093E5] hover:underline"
                >
                    Nilai Perusahaan
                </a>
                <a
                    href="#our-team"
                    className="mx-4 text-lg text-[#0093E5] hover:underline"
                >
                    Our Team
                </a>
            </div>

            {/* Sections for each anchor */}
            <section
                id="overview"
                className="h-screen flex justify-center items-center bg-white"
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
                className="h-screen flex justify-center items-center bg-white"
            >
                <div>
                    <h2 className="text-center text-4xl font-bold text-[#00507C]">
                        Visi Misi
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                        <div id="visi" className="p-8 bg-[#0093E5] rounded-2xl">
                            <p className="text-white text-center text-2xl font-bold">
                                Visi
                            </p>
                            <div className="mt-4 bg-white rounded-xl w-[444px] h-[330px] p-4">
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
                            <p className="text-white text-center text-2xl font-bold">
                                Misi
                            </p>
                            <div className="mt-4 bg-white rounded-xl w-[444px] h-[330px]">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="nilai-perusahaan"
                className="h-screen flex justify-center items-center bg-white"
            >
                <div>
                    <h2 className="text-center text-4xl font-bold">
                        Nilai Perusahaan
                    </h2>
                    <p className="text-center mt-4 px-4 max-w-3xl mx-auto">
                        This is the Nilai Perusahaan section content.
                    </p>
                </div>
            </section>

            <section
                id="our-team"
                className="h-screen flex justify-center items-center bg-white"
            >
                <div>
                    <h2 className="text-center text-4xl font-bold">Our Team</h2>
                    <p className="text-center mt-4 px-4 max-w-3xl mx-auto">
                        This is the Our Team section content.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
