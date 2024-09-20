import SocialMedias from "./SocialMedias";

export default function About() {
    return (
        <main className="flex flex-col mt-3 gap-5 animate-slide-right overflow-hidden">
            <SocialMedias />
            <p className="md:text-xl">Hello! My name is Muhammad Syazanie Amirin bin Othman. Currently, I am a student of software engineering in Universiti Kuala Lumpur MIIT (UniKL MIIT).</p>
        </main>
    )
}