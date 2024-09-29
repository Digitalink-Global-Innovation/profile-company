import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return (
        <div className="fixed bottom-24 right-8">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 bg-[#00507C] text-white rounded-full shadow-lg hover:bg-[#164761] focus:outline-none focus:ring-2 focus:ring-[#164761] focus:ring-opacity-50"
                >
                    <FaArrowCircleUp size={26}/>
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
