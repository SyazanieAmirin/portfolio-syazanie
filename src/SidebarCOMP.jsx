import GithubIcon from "./assets/icons/github.svg"

export default function SidebarCOMP({ activeItem, setActiveItem }) {
    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <aside className="flex flex-col gap-5 sticky top-12 self-start"> {/* Added self-start for sticky to work in flex container */}
            <h1 className="text-xl font-bold md:text-4xl">Syazanie's<br />Portfolio</h1>
            <section>
                <ul className="flex flex-col gap-3 md:text-xl">
                    <li
                        className={activeItem === "About" ? "font-bold hover:cursor-default" : "font-normal hover:cursor-pointer"}
                        onClick={() => handleClick("About")}
                    >
                        About
                    </li>
                    <li
                        className={activeItem === "Projects" ? "font-bold hover:cursor-default" : "font-normal hover:cursor-pointer"}
                        onClick={() => handleClick("Projects")}
                    >
                        Projects
                    </li>
                    <li
                        className={activeItem === "Clients" ? "font-bold hover:cursor-default" : "font-normal hover:cursor-pointer"}
                        onClick={() => handleClick("Clients")}
                    >
                        Clients
                    </li>
                </ul>
            </section>
            <hr></hr>
            <div className="flex flex-row gap-3 items-center">
                <p>v1.0.2 |</p> <a href="https://github.com/SyazanieAmirin/portfolio-syazanie" target="_blank"><img src={GithubIcon} className="h-6 w-6" /></a>
            </div>
        </aside>
    );
}
