const Footer = () => {
  return (
    <footer className="bg-noir py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-logo text-primary-foreground/80 text-lg tracking-[0.4em]">
            MARÉ NOIR
          </p>
          <p className="text-primary-foreground/30 text-xs font-body italic font-serif">
            Reclaimed from the Ocean. Limited by Design.
          </p>
          <div className="w-12 h-px bg-primary-foreground/10" />
          <div className="flex gap-8">
            {["Story", "Atelier", "Sustainability", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-primary-foreground/30 hover:text-primary-foreground/60 text-xs font-body tracking-[0.15em] uppercase transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-primary-foreground/15 text-xs font-body">
            © MMXXVI MARÉ NOIR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
