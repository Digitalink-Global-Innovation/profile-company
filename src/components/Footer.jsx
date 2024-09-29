import {
    RiInstagramFill,
    RiWhatsappFill,
    RiLinkedinBoxFill,
} from "react-icons/ri";
import { SiShopee } from "react-icons/si";

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className="px-10 bg-[#00507C] h-[82px] ">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="flex items-center justify-center md:justify-start w-full">
                    <p className="text-xs lg:text-base text-center md:text-start text-white">
                        Copyright &copy; {currentYear} DigitaLink Global
                        Solution.
                        <br className="hidden md:block " />
                        {" "}All Rights Reserved.
                    </p>
                </div>
                <div className="flex items-center justify-center md:justify-end w-full">
                    <div className="me-10">
                        <a href="https://wa.me/message/SRTLMAGW522OE1" target="_blank">
                            <RiWhatsappFill color="white" size={24} />
                        </a>
                    </div>
                    <div className="me-10">
                        <a href="https://www.instagram.com/digitalink.global" target="_blank">
                            <RiInstagramFill color="white" size={24} />
                        </a>
                    </div>
                    <div className="me-10">
                        <a href="https://www.linkedin.com/company/digitalink-global/" target="_blank">
                            <RiLinkedinBoxFill color="white" size={24} />
                        </a>
                    </div>
                    <div>
                        <a href="http://shopee.co.id/digitalink.inv" target="_blank">
                            <SiShopee color="white" size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
