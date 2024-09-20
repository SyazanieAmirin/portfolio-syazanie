import { useState } from "react";
import SidebarCOMP from "./SidebarCOMP";
import About from "./assets/About";
import Projects from "./assets/Projects";
import Clients from "./assets/Clients";

export default function App() {
  const [activeItem, setActiveItem] = useState("About");

  return (
    <div className="flex flex-row gap-5 mb-10 px-3 py-10 lg:gap-10 animate-fade-in max-w-[1000px] mx-auto">
      {/* SidebarCOMP should not be stretched in height by flex */}
      <SidebarCOMP activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {activeItem === "About" && <About />}
        {activeItem === "Projects" && <Projects />}
        {activeItem === "Clients" && <Clients />}
      </div>
    </div>
  );
}

