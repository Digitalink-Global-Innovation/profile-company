import { useEffect, useState } from "react";
import ilustration1 from "../assets/img/ilustration1.png";
import ilustration1m from "../assets/img/ilustration1m.png";
import ilustration2 from "../assets/img/Ilustration2.png";
import ilustration2m from "../assets/img/Ilustration2m.png";
import ilustration3 from "../assets/img/Ilustration3.png";
import productData from "../data/product.json";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";

const Home = () => {
    const { t } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData);
    }, []);

    const [formData, setFormData] = useState({
        nameInput: "",
        emailInput: "",
        phoneNumberInput: "",
        companyInput: "",
        descInput: "",
    });

    const { nameInput, emailInput, phoneNumberInput } = formData;

    const isFormValid = nameInput && emailInput && phoneNumberInput;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <section
                id="home"
                className="h-screen bg-gradient-to-b from-blue-300 to-sky-600 lg:to-sky-500"
            >
                <div className="hidden lg:flex justify-between items-center">
                    <div className="w-1/2 flex justify-start relative">
                        <img
                            src={ilustration2}
                            alt="Illustration Left"
                            className="max-w-full h-screen"
                        />
                        <div className="absolute inset-0 flex items-center justify-start ps-8 2xl:ps-16">
                            <div className="text-white">
                                <p className="w-[700px] text-6xl font-bold text-white">
                                    Make Your Event More Spectacular with Us!
                                </p>
                                <p className="w-[700px] text-[16px] text-white mt-5">
                                    Kami menyediakan solusi yang inovatif dan
                                    kreatif untuk memperkaya pengalaman acara
                                    Anda. Dengan mengintegrasikan teknologi
                                    canggih dan estetika desain yang elegan,
                                    kami bertujuan untuk memastikan bahwa setiap
                                    detail acara berjalan lancar dan
                                    meninggalkan kesan yang tak terlupakan.
                                </p>
                                {/* <Link
                                    to="/#product"
                                    onClick={() => scrollToSection("product")}
                                > */}
                                {/* <p>
                                        {t("menu.product")}
                                        {/* Our Product 
                                    </p> */}
                                <button className="mt-12 bg-white rounded-lg px-[16px] py-[8px] text-[#0093E5] font-bold">
                                    See how it works
                                </button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <img
                            src={ilustration1}
                            alt="Illustration Right"
                            className="max-w-full h-screen"
                        />
                    </div>
                </div>
                <div className="h-screen relative lg:hidden">
                    <div className="flex justify-end h-1/2">
                        <img
                            src={ilustration1m}
                            alt="Illustration Left"
                            className="h-[100%]"
                        />
                    </div>
                    <div className="flex justify-start items-end h-1/2">
                        <img
                            src={ilustration2m}
                            alt="Illustration Left"
                            className="h-auto"
                        />
                    </div>
                    <div className="absolute h-screen w-full flex top-0 justify-center items-center">
                        <div className="text-white pt-60 px-4">
                            <p className="text-2xl font-bold">
                                Make Your Event More Spectacular with Us!
                            </p>
                            <p className="text-sm mt-4">
                                Kami menyediakan solusi yang inovatif dan
                                kreatif untuk memperkaya pengalaman acara Anda.
                                Dengan mengintegrasikan teknologi canggih dan
                                estetika desain yang elegan, kami bertujuan
                                untuk memastikan bahwa setiap detail acara
                                berjalan lancar dan meninggalkan kesan yang tak
                                terlupakan.
                            </p>
                            {/* <Link
                                to="/#product"
                                onClick={() => scrollToSection("product")}
                            > */}
                            {/* <p>
                                        {t("menu.product")}
                                        {/* Our Product 
                                    </p> */}
                            <button className="mt-8 bg-white rounded-lg px-[16px] py-[8px] text-[#0093E5] text-sm font-bold">
                                See how it works
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </section>

            <section id="planning" className="h-full">
                <div className=" px-8 2xl:px-16 py-12">
                    <p className="text-center font-bold text-2xl lg:text-3xl text-[#0093E5]">
                        Rencanakan segera eventmu bersama DigitaLink
                    </p>
                    <div className="flex justify-center mt-6 relative">
                        <img
                            src={ilustration3}
                            alt="Ilustration 3"
                            className="h-[170px] lg:h-[500px] lg:w-auto"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                            <div
                                className="absolute bg-orange-500 rounded-[20px] px-4 py-2"
                                style={{ top: "15%", left: "20%" }}
                            >
                                <div className="flex justify-center items-center text-neutral-100 text-[8px] lg:text-base font-medium">
                                    Revisi sepuasnya
                                </div>
                            </div>
                            <div
                                className="absolute bg-orange-500 rounded-[20px] px-4 py-2"
                                style={{ top: "40%", left: "10%" }}
                            >
                                <div className="flex justify-center items-center text-neutral-100 text-[8px] lg:text-base font-medium">
                                    Cocok untuk semua event
                                </div>
                            </div>
                            <div
                                className="absolute bg-orange-500 rounded-[20px] px-4 py-2"
                                style={{ top: "35%", right: "20%" }}
                            >
                                <div className="flex justify-center items-center text-neutral-100 text-[8px] lg:text-base font-medium">
                                    Fitur yang lengkap dan menarik
                                </div>
                            </div>
                            <div
                                className="absolute bg-orange-500 rounded-[20px] px-4 py-2"
                                style={{ bottom: "20%", right: "10%" }}
                            >
                                <div className="flex justify-center items-center text-neutral-100 text-[8px] lg:text-base font-medium">
                                    Custom sesuka hati
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-40 lg:top-auto lg:-bottom-10 flex justify-center">
                            <div className="bg-sky-800 rounded-xl w-[90%] py-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 md:px-16">
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <div className="text-white text-xl font-bold text-center md:text-left">
                                                User - Friendly
                                            </div>
                                            <div className="text-white text-sm font-medium text-center md:text-left">
                                                Semua produk yang mudah
                                                digunakan oleh pengguna.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <div className="text-white text-xl font-bold text-center md:text-left">
                                                Lengkap
                                            </div>
                                            <div className="text-white text-sm font-medium text-center md:text-left">
                                                Menyediakan fitur dan fasilitas
                                                yang lebih lengkap daripada yang
                                                lain.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <div className="text-white text-xl font-bold text-center md:text-left">
                                                Fleksibel
                                            </div>
                                            <div className="text-white text-sm font-medium text-center md:text-left">
                                                Dapat disesuaikan dengan tren
                                                dan kebutuhan klien.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="product" className="h-full px-8 2xl:px-16">
                <div className="py-28 lg:py-24">
                    <p className="text-center font-bold text-3xl text-[#0093E5]">
                        {t("menu.product")}
                    </p>
                    <div className="mt-10">
                        <div className="hidden lg:flex lg:justify-center gap-10">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="w-[500px] h-[580px] p-4 flex justify-center border-4 border-[#0093E5] rounded-3xl"
                                >
                                    <div>
                                        <div className="relative h-[320px] w-[463px] ">
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center rounded-xl"
                                                style={{
                                                    backgroundImage: `url(${product.image})`,
                                                }}
                                            ></div>
                                            {/* Overlay with Opacity */}
                                            {product.status === 2 ? (
                                                <>
                                                    <div className="absolute inset-0 bg-white opacity-70"></div>
                                                    {/* Content */}
                                                    <div className="relative z-10 flex items-center justify-center h-full text-[#0093E5]">
                                                        <h1 className="text-3xl font-bold">
                                                            COMMING SOON
                                                        </h1>
                                                    </div>
                                                </>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                        <p className="mt-5 font-bold text-2xl text-[#0093E5]">
                                            {product.name}
                                        </p>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="block lg:hidden">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {products.map((product) => (
                                        <div
                                            key={product.id}
                                            className="w-[500px] h-[580px] p-4 flex justify-center border-4 border-[#0093E5] rounded-3xl"
                                        >
                                            <div>
                                                <div className="relative h-[240px] w-full ">
                                                    {/* Background Image */}
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                                                        style={{
                                                            backgroundImage: `url(${product.image})`,
                                                        }}
                                                    ></div>
                                                    {/* Overlay with Opacity */}
                                                    {product.status === 2 ? (
                                                        <>
                                                            <div className="absolute inset-0 bg-white opacity-70"></div>
                                                            {/* Content */}
                                                            <div className="relative z-10 flex items-center justify-center h-full text-[#0093E5]">
                                                                <h1 className="text-3xl font-bold">
                                                                    COMMING SOON
                                                                </h1>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div></div>
                                                    )}
                                                </div>
                                                <p className="mt-5 font-bold text-2xl text-[#0093E5]">
                                                    {product.name}
                                                </p>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="whyUs" className="h-screen lg:h-full bg-[#0093E5]">
                <div className="pt-28 lg:py-24">
                    <p className="text-center font-bold text-3xl text-white">
                        {t("menu.why")} ?
                    </p>
                    <div className="mt-14 lg:mt-10 px-8 2xl:px-16">
                        <div className="hidden md:grid md:grid-cols-3 md:gap-10">
                            <div className="w-full bg-white h-[400px] rounded-xl">
                                <div className="flex justify-center items-center h-full">
                                    <div className="px-4">
                                        <div className="flex justify-center">
                                            <img
                                                src={icon1}
                                                alt="Icon 1"
                                                className="w-[40%]"
                                            />
                                        </div>
                                        <p className="text-center mt-2 text-xl text-[#0093E5] font-bold">
                                            Harga Terjangkau
                                        </p>
                                        <p className="text-sm mt-2 text-justify">
                                            DigitaLink menawarkan solusi
                                            undangan digital dan event
                                            management dengan harga yang sangat
                                            terjangkau. Hal ini memungkinkan
                                            client, baik perorangan maupun
                                            perusahaan, untuk menghemat biaya
                                            dalam merencanakan dan mengelola
                                            acara mereka tanpa mengorbankan
                                            kualitas atau fitur penting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-white h-[400px] rounded-xl">
                                <div className="flex justify-center items-center h-full">
                                    <div className="px-4">
                                        <div className="flex justify-center">
                                            <img
                                                src={icon2}
                                                alt="Icon 2"
                                                className="w-[40%]"
                                            />
                                        </div>
                                        <p className="text-center mt-2 text-xl text-[#0093E5] font-bold">
                                            Proses Cepat
                                        </p>
                                        <p className="text-sm mt-2 text-justify">
                                            DigitaLink memfasilitasi proses
                                            pembuatan undangan digital dan
                                            pengelolaan acara secara cepat dan
                                            efisien. Platform mereka dirancang
                                            untuk memudahkan pengguna dalam
                                            membuat dan mengirimkan undangan
                                            dalam waktu singkat, serta mengatur
                                            detail acara dengan mudah melalui
                                            antarmuka yang intuitif.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-white h-[400px] rounded-xl">
                                <div className="flex justify-center items-center h-full">
                                    <div className="px-4">
                                        <div className="flex justify-center">
                                            <img
                                                src={icon3}
                                                alt="Icon 3"
                                                className="w-[40%]"
                                            />
                                        </div>
                                        <p className="text-center mt-2 text-xl text-[#0093E5] font-bold">
                                            Analytics dan Pelaporan
                                        </p>
                                        <p className="text-sm mt-2 text-justify">
                                            DigitaLink menyediakan fitur
                                            analisis dan pelaporan yang
                                            mendalam. Client dapat melacak
                                            respons, kehadiran, dan interaksi
                                            pengguna dengan undangan mereka. Ini
                                            membantu dalam mengukur keberhasilan
                                            acara dan melakukan improvement yang
                                            diperlukan untuk meningkatkan
                                            efektivitas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className="w-full bg-white h-[356px] rounded-xl">
                                        <div className="flex justify-center">
                                            <div className="px-4">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={icon1}
                                                        alt="Icon 1"
                                                        className="w-[40%]"
                                                    />
                                                </div>
                                                <p className="text-center text-xl text-[#0093E5] font-bold">
                                                    Harga Terjangkau
                                                </p>
                                                <p className="text-sm mt-2 text-justify">
                                                    DigitaLink menawarkan solusi
                                                    undangan digital dan event
                                                    management dengan harga yang
                                                    sangat terjangkau. Hal ini
                                                    memungkinkan client, baik
                                                    perorangan maupun
                                                    perusahaan, untuk menghemat
                                                    biaya dalam merencanakan dan
                                                    mengelola acara mereka tanpa
                                                    mengorbankan kualitas atau
                                                    fitur penting.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-white h-[356px] rounded-xl">
                                        <div className="flex justify-center">
                                            <div className="px-4">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={icon2}
                                                        alt="Icon 2"
                                                        className="w-[40%]"
                                                    />
                                                </div>
                                                <p className="text-center text-xl text-[#0093E5] font-bold">
                                                    Proses Cepat
                                                </p>
                                                <p className="text-sm mt-2 text-justify">
                                                    DigitaLink memfasilitasi
                                                    proses pembuatan undangan
                                                    digital dan pengelolaan
                                                    acara secara cepat dan
                                                    efisien. Platform mereka
                                                    dirancang untuk memudahkan
                                                    pengguna dalam membuat dan
                                                    mengirimkan undangan dalam
                                                    waktu singkat, serta
                                                    mengatur detail acara dengan
                                                    mudah melalui antarmuka yang
                                                    intuitif.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-white h-[356px] rounded-xl">
                                        <div className="flex justify-center">
                                            <div className="px-4">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={icon3}
                                                        alt="Icon 3"
                                                        className="w-[40%]"
                                                    />
                                                </div>
                                                <p className="text-center text-xl text-[#0093E5] font-bold">
                                                    Analytics dan Pelaporan
                                                </p>
                                                <p className="text-sm mt-2 text-justify">
                                                    DigitaLink menyediakan fitur
                                                    analisis dan pelaporan yang
                                                    mendalam. Client dapat
                                                    melacak respons, kehadiran,
                                                    dan interaksi pengguna
                                                    dengan undangan mereka. Ini
                                                    membantu dalam mengukur
                                                    keberhasilan acara dan
                                                    melakukan improvement yang
                                                    diperlukan untuk
                                                    meningkatkan efektivitas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="section h-full px-8 2xl:px-16">
                <div className="py-28 lg:py-24">
                    <p className="text-center font-bold text-3xl text-[#0093E5]">
                        Contact Us
                    </p>
                    <div className="bg-[#F8F8F8] py-6 px-6 mt-12 rounded-xl">
                        <form action="">
                            <div className="grid grid-cols-1">
                                <div className="mb-5 grid grid-cols-1">
                                    <label htmlFor="nameInput">
                                        Name
                                        <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="py-2 px-3 rounded-lg"
                                        id="nameInput"
                                        name="nameInput"
                                        placeholder="Input your name..."
                                        value={formData.nameInput}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-5 grid grid-cols-1">
                                    <label htmlFor="emailInput">
                                        Email
                                        <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="py-2 px-3 rounded-lg"
                                        id="emailInput"
                                        name="emailInput"
                                        placeholder="Input your email..."
                                        value={formData.emailInput}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-5 grid grid-cols-1">
                                    <label htmlFor="phoneNumberInput">
                                        Phone Number
                                        <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="py-2 px-3 rounded-lg"
                                        id="phoneNumberInput"
                                        name="phoneNumberInput"
                                        placeholder="Input your phone number..."
                                        value={formData.phoneNumberInput}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-5 grid grid-cols-1">
                                    <label htmlFor="companyInput">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="py-2 px-3 rounded-lg"
                                        id="companyInput"
                                        name="companyInput"
                                        placeholder="Input your company..."
                                        value={formData.companyInput}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-5 grid grid-cols-1">
                                    <label htmlFor="descInput">
                                        Description
                                    </label>
                                    <textarea
                                        name="descInput"
                                        id="descInput"
                                        className="py-2 px-3 rounded-lg"
                                        rows={4}
                                        placeholder="Write specific description..."
                                        value={formData.descInput}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className={`px-4 py-2 rounded-lg text-white ${isFormValid ? 'bg-[#0093E5]' : 'bg-[#9A9A9A]'}`}
                                        disabled={!isFormValid}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
