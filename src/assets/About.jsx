import SocialMedias from "./SocialMedias";
import Skills from "./Skills";

export default function About() {
    return (
        <main className="flex flex-col mt-3 gap-5 animate-slide-right overflow-hidden">
            <SocialMedias />
            <p className="md:text-xl">Hello! My name is Muhammad Syazanie Amirin bin Othman. I am currently a 22-year-old student pursuing a degree in Software Engineering at Universiti Kuala Lumpur Malaysian Institute of Information Technology (UniKL MIIT). I am currently based in Kuala Lumpur.</p>
            <h1 className="font-bold mt-4 text-xl lg:text-2xl">Skills</h1>
            <Skills />
        </main>
    )
}