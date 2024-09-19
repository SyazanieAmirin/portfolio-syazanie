export default function SidebarCOMP() {
    return (
        <aside className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">Syazanie's<br></br>Portfolio</h1>
            <section>
                <ul className="flex flex-col gap-3">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Clients</li>
                </ul>
            </section>
        </aside>
    )
}