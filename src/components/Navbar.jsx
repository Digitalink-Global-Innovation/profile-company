import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoTransparent from "../assets/logo/logoTransparent.png";
import { useTranslation } from "react-i18next";
import { HiMenuAlt3, HiOutlineGlobeAlt, HiX } from "react-icons/hi";
import PropTypes from "prop-types";

const Navbar = ({ setLang }) => {
    const [activeSection, setActiveSection] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolling, setIsScrolling] = useState(false); // Menyimpan state untuk mengontrol scroll
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("transparent");
    const [linkColor, setLinkColor] = useState("text-[#f5f5f5]");
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLang, setActiveLang] = useState("");

    const isAboutPage = location.pathname === "/about";

    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling) return; // Jika sedang scroll manual, abaikan event scroll

            const sections = ["home", "product", "whyUs"];
            const offsets = sections.map(
                (section) =>
                    document.getElementById(section)?.getBoundingClientRect()
                        .top
            );
            const activeIndex = offsets.findIndex(
                (offset) => offset && offset >= -50 && offset < 300
            );

            if (location.pathname !== "/about") {
                if (activeIndex !== -1) {
                    setActiveSection(sections[activeIndex]);
                } else if (window.scrollY === 0) {
                    setActiveSection("home");
                }
            }

            // Menambahkan efek shadow dan mengubah warna navbar berdasarkan scroll
            if (window.scrollY >= 90) {
                setShadow(true);
                if (location.pathname === "/") {
                    setNavBg("bg-white");
                    setLinkColor("lg:text-[#0093E5]");
                } else {
                    setNavBg("bg-gradient-to-b from-blue-300 to-sky-500");
                    setLinkColor("lg:text-[#f5f5f5]");
                }
            } else {
                setShadow(false);
                if (location.pathname === "/") {
                    setNavBg("bg-transparent");
                    setLinkColor("lg:text-[#f5f5f5]");
                } else {
                    console.log(location.pathname);
                    setNavBg("bg-gradient-to-b from-blue-300 to-sky-500");
                    setLinkColor("lg:text-[#f5f5f5]");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Cek posisi scroll saat halaman dimuat

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname, isScrolling]);

    useEffect(() => {
        if (location.pathname === "/about") {
            setActiveSection("");
        }
    }, [location.pathname]);

    const scrollToSection = (id) => {
        setIsScrolling(true); // Set state menjadi true sebelum mulai scroll
        if (location.pathname !== "/") {
            // Navigate ke halaman home jika bukan di halaman home
            navigate("/", { replace: false });

            const unlisten = () => {
                const section = document.getElementById(id);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            };

            setTimeout(unlisten, 100);
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }

        setTimeout(() => {
            setActiveSection(id); // Set section yang aktif berdasarkan tombol yang diklik
            setIsScrolling(false); // Matikan state scrolling setelah scroll selesai
        }, 600); // Sesuaikan waktu ini agar sesuai dengan durasi scroll
    };

    const getLinkClasses = (section) => {
        if (location.pathname === "/about" && section === "about") {
            return `text-start lg:text-center text-white font-bold px-4 py-2 bg-[#0093E5] rounded-[30px] shadow hover:text-white`;
        }
        return activeSection === section
            ? `text-start lg:text-center mb-3 lg:mb-0 text-white font-bold px-4 py-2 bg-[#0093E5] rounded-[30px] shadow hover:text-white`
            : `text-start lg:text-center mb-3 lg:mb-0  text-[#0093E5] ${linkColor} hover:font-bold`;
    };

    const { t, i18n } = useTranslation();

    const handleLangChange = (lang) => {
        setLang(lang);
        i18n.changeLanguage(lang);
        localStorage.setItem("lng", lang);
        setActiveLang(lang);
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("lng") || "EN";
        if (activeLang !== savedLang) {
            setActiveLang(savedLang);
            setLang(savedLang);
            i18n.changeLanguage(savedLang);
        }
    }, [i18n, setLang, activeLang]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleNav = () => {
        setNav(!nav);
        setIsOpen(isOpen);
    };

    return (
        <nav
            className={`${
                shadow ? "shadow-xl" : ""
            }  fixed w-full h-[72px] z-[100] ${navBg}`}
        >
            <div className="px-8 2xl:px-16 flex justify-between items-center h-full">
                <div className="flex items-center">
                    <img
                        src={logoTransparent}
                        alt="Logo DigitaLink Global Innovation"
                        className="h-[48px] lg:h-[64px]"
                    />
                    <div>
                        <p
                            className={
                                shadow
                                    ? `text-center ms-[10px] text-xl font-semibold ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-[#0093E5]"
                                      }`
                                    : `ms-[10px] text-xl font-semibold  ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-white"
                                      } `
                            }
                        >
                            DigitaLink
                        </p>
                        <p
                            className={
                                shadow
                                    ? `ms-[10px] mt-[-2px] text-xs font-semibold ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-[#0093E5]"
                                      }`
                                    : `ms-[10px] mt-[-2px] text-xs font-semibold  ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-white"
                                      } `
                            }
                        >
                            Global Innovation
                        </p>
                    </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:space-x-2">
                    <button
                        onClick={() => scrollToSection("home")}
                        className={`w-[192px] ${getLinkClasses("home")}`}
                    >
                        {t("menu.home")}
                    </button>
                    <button
                        onClick={() => scrollToSection("product")}
                        className={`w-[192px] ${getLinkClasses("product")}`}
                    >
                        {t("menu.product")}
                    </button>
                    <button
                        onClick={() => scrollToSection("whyUs")}
                        className={`w-[192px] ${getLinkClasses("whyUs")}`}
                    >
                        {t("menu.why")}
                    </button>
                    <Link
                        to="/about"
                        className={`w-[192px] text-center ${getLinkClasses(
                            "about"
                        )}`}
                    >
                        {t("menu.about")}
                    </Link>
                    <div className="relative text-center max-w-[150px]">
                        {/* Tombol untuk membuka dropdown */}
                        <button
                            onClick={toggleDropdown}
                            className={
                                shadow
                                    ? `text-center ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-[#0093E5]"
                                      } hover:font-bold flex justify-center items-center`
                                    : `text-center  ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-white"
                                      } hover:font-bold flex justify-center items-center`
                            }
                        >
                            <HiOutlineGlobeAlt size={24} />
                        </button>

                        {/* Dropdown yang ditampilkan saat isOpen bernilai true */}
                        {isOpen && (
                            <div
                                className={
                                    shadow
                                        ? "absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg"
                                        : `absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg`
                                }
                            >
                                {/* Isi Dropdown */}
                                <button
                                    className={`flex justify-center p-2 items-center ${
                                        activeLang === "EN"
                                            ? "text-blue-500 font-bold"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleLangChange("EN")}
                                >
                                    English
                                </button>
                                <button
                                    className={`flex justify-center p-2 items-center ${
                                        activeLang === "ID"
                                            ? "text-blue-500 font-bold"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleLangChange("ID")}
                                >
                                    Indonesia
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex lg:hidden items-center space-x-4">
                    <div className="relative text-center max-w-[150px]">
                        {/* Tombol untuk membuka dropdown */}
                        <button
                            onClick={toggleDropdown}
                            className={
                                shadow
                                    ? `text-center ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-[#0093E5]"
                                      } hover:font-bold flex justify-center items-center`
                                    : `text-center  ${
                                          isAboutPage
                                              ? "text-white"
                                              : "text-white"
                                      } hover:font-bold flex justify-center items-center`
                            }
                        >
                            <HiOutlineGlobeAlt size={24} />
                        </button>

                        {/* Dropdown yang ditampilkan saat isOpen bernilai true */}
                        {isOpen && (
                            <div
                                className={
                                    shadow
                                        ? "absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg"
                                        : `absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg`
                                }
                            >
                                {/* Isi Dropdown */}
                                <button
                                    className={`flex justify-center p-2 items-center ${
                                        activeLang === "EN"
                                            ? "text-blue-500 font-bold"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleLangChange("EN")}
                                >
                                    English
                                </button>
                                <button
                                    className={`flex justify-center p-2 items-center ${
                                        activeLang === "ID"
                                            ? "text-blue-500 font-bold"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleLangChange("ID")}
                                >
                                    Indonesia
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        onClick={handleNav}
                        className={
                            shadow
                                ? `text-center ${
                                      isAboutPage
                                          ? "text-white"
                                          : "text-[#0093E5]"
                                  } hover:font-bold flex justify-center items-center`
                                : `text-center  ${
                                      isAboutPage ? "text-white" : "text-white"
                                  } hover:font-bold flex justify-center items-center`
                        }
                    >
                        <HiMenuAlt3 className={"cursor-pointer"} size="2em" />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500"
                            : "fixed left-[-100%] h-screen w-[75%] sm:w-[60%] md:w-[45%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center h-full">
                                <img
                                    src={logoTransparent}
                                    alt="Logo DigitaLink Global Innovation"
                                    className="h-[82px] w-auto"
                                />
                                <div className="font-bold text-[#0093E5]">
                                    <p className="text-xl">DigitaLink</p>
                                    <p className="text-[12px]">
                                        Global Innovation
                                    </p>
                                </div>
                            </div>
                            <div
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                                onClick={handleNav}
                            >
                                <HiX />
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <button
                                onClick={() => {
                                    scrollToSection("home");
                                    handleNav();
                                }}
                                className={`w-[192px] ${getLinkClasses(
                                    "home"
                                )}`}
                            >
                                {t("menu.home")}
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("product");
                                    handleNav();
                                }}
                                className={`w-[192px] ${getLinkClasses(
                                    "product"
                                )}`}
                            >
                                {t("menu.product")}
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("whyUs");
                                    handleNav();
                                }}
                                className={`w-[192px] ${getLinkClasses(
                                    "whyUs"
                                )}`}
                            >
                                {t("menu.why")}
                            </button>
                            <Link
                                to="/about"
                                className={`w-[192px] text-center ${getLinkClasses(
                                    "about"
                                )}`}
                                onClick={() => handleNav()}
                            >
                                {t("menu.about")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    setLang: PropTypes.func.isRequired
};

export default Navbar;
