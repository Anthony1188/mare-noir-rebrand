import heroImage from "@/assets/hero-ocean.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-noir">
      <img
        src={heroImage}
        alt="Mediterranean ocean waves"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover hero-zoom opacity-60"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="text-primary-foreground/50 text-xs font-body tracking-[0.3em] uppercase mb-6 fade-in-slow">
          Edition I — Summer MMXXVI
        </p>

        <h1 className="text-logo text-primary-foreground text-4xl sm:text-6xl lg:text-8xl mb-6 fade-in-up">
          MARÉ NOIR
        </h1>

        <div className="w-12 h-px bg-primary-foreground/30 mb-6 line-reveal" />

        <p className="font-serif text-primary-foreground/70 text-lg sm:text-xl lg:text-2xl italic font-light mb-8 fade-in-up" style={{ animationDelay: "0.3s" }}>
          Reclaimed from the Ocean. Limited by Design.
        </p>

        <p className="text-primary-foreground/40 text-xs font-body tracking-[0.2em] uppercase mb-10 fade-in-up" style={{ animationDelay: "0.6s" }}>
          Limited to 120 pieces per style
        </p>

        <a
          href="#edition-i"
          className="border border-primary-foreground/30 text-primary-foreground/80 hover:bg-primary-foreground hover:text-noir px-10 py-3.5 text-xs font-body tracking-[0.25em] uppercase transition-all duration-500 fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          Discover Edition I
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-primary-foreground/20 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
