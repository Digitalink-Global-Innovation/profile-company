import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./components";
import { About, Home } from "./pages";
import { useTranslation } from "react-i18next";

function App() {
    const { i18n } = useTranslation();
    const handleValueLang = (value) => {
        i18n.changeLanguage(value);
    };

    return (
        <>
            <Navbar setLang={handleValueLang} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
