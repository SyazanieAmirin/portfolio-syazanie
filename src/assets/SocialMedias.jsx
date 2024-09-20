import EmailIcon from "../assets/icons/email.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import InstaIcon from "../assets/icons/insta.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";

export default function SocialMedias() {
    return (
        <>
            <div className="flex flex-row gap-2 md:gap-6 flex-wrap justify-between sm:justify-normal">
                <a className="bg-[#1D1D1D] rounded-md p-2 flex items-center w-9 h-9 md:w-12 md:h-12" href="mailto:muhdsyazanieamirin@gmail.com">
                    <img src={EmailIcon} alt="Email Icon" className="w-9 h-9 md:w-12 md:h-12" />
                </a>
                <a className="bg-[#1D1D1D] rounded-md p-2 flex items-center w-9 h-9 md:w-12 md:h-12" href="https://github.com/SyazanieAmirin" target="_blank">
                    <img src={GithubIcon} alt="Email Icon" className="w-9 h-9 md:w-12 md:h-12" />
                </a>
                <a className="bg-[#1D1D1D] rounded-md p-2 flex items-center w-9 h-9 md:w-12 md:h-12" href="https://x.com/SyazanieAmirin" target="_blank">
                    <img src={TwitterIcon} alt="Email Icon" className="w-9 h-9 md:w-12 md:h-12" />
                </a>
                <a className="bg-[#1D1D1D] rounded-md p-2 flex items-center w-9 h-9 md:w-12 md:h-12" href="https://www.instagram.com/syazanieothman/" target="_blank">
                    <img src={InstaIcon} alt="Email Icon" className="w-9 h-9 md:w-12 md:h-12" />
                </a>
                <a className="bg-[#1D1D1D] rounded-md p-2 flex items-center w-9 h-9 md:w-12 md:h-12" href="https://www.linkedin.com/in/syazanie/" target="_blank">
                    <img src={LinkedinIcon} alt="Email Icon" className="w-9 h-9 md:w-12 md:h-12" />
                </a>
            </div>
        </>
    )
}