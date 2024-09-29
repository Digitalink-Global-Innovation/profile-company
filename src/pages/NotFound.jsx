import { Link } from "react-router-dom";
import ilustrationNotFound from "../assets/img/ilustrasi-not-found.svg";
import logo from "../assets/logo/logoTransparent.png";

function NotFound() {
    return (
        <div className="h-screen flex flex-col">
            <div className="px-8 py-4 flex items-center">
                <img src={logo} alt="Logo" className="h-[48px] lg:h-[64px]" />
                <div className="text-[#0093E5]">
                    <p className="font-bold text-xl">DigitaLink</p>
                    <p className="font-bold">Global Innovation</p>
                </div>
            </div>
            <div className="flex-grow flex justify-center items-center">
                <div className="text-center">
                    <img
                        src={ilustrationNotFound}
                        alt="Ilustrasi Not Found"
                        className="w-[500px] h-auto mx-auto"
                    />
                    <p className="font-bold text-3xl text-[#00507C] mt-4">
                        404 - Page Not Found
                    </p>
                    <Link to="/">
                        <button className="mt-10 bg-[#0093E5] rounded-lg px-[16px] py-[8px] text-white font-bold">
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
