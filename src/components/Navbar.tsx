import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-noir/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="text-logo text-primary-foreground text-lg lg:text-xl tracking-[0.4em]">
          MARÉ NOIR
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Edition I", "Story", "Atelier"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-primary-foreground/70 hover:text-primary-foreground text-xs font-body tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground/80"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-px bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-noir border-t border-primary/10 px-6 py-8 space-y-6">
          {["Edition I", "Story", "Atelier"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
              className="block text-primary-foreground/70 text-sm tracking-[0.2em] uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
