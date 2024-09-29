import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        ID: {
            translation: {
                menu: {
                    home: "Beranda",
                    product: "Produk Kami",
                    why: "Kenapa DigitaLink",
                    about: "Tentang Kami"
                }
            }
        },
        EN: {
            translation: {
                menu: {
                    home: "Home",
                    product: "Our Product",
                    why: "Why DigitaLink",
                    about: "About Us"
                }
            }
        },
    },
    lng: localStorage.getItem('lng') || "ID",
})

export default i18next