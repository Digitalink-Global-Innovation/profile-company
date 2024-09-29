import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./components";
import { About, Home, NotFound } from "./pages";
import { useTranslation } from "react-i18next";

function App() {
    const location = useLocation();

    const { i18n } = useTranslation();
    const handleValueLang = (value) => {
        i18n.changeLanguage(value);
    };
    // Daftar path di mana Navbar akan ditampilkan
    const showNavbar = ["/", "/about"].includes(location.pathname);
    return (
        <>
            {showNavbar && <Navbar setLang={handleValueLang} />}
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
