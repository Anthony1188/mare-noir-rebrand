const AtelierSection = () => {
  const details = [
    { label: "Material", value: "ECONYL® regenerated nylon" },
    { label: "Source", value: "Mediterranean fishing nets & ocean waste" },
    { label: "Construction", value: "Italian-cut, triple-stitched seams" },
    { label: "Hardware", value: "Recycled ocean-grade stainless steel" },
    { label: "Lining", value: "Quick-dry recycled mesh" },
    { label: "Finishing", value: "Hand-inspected, individually numbered" },
  ];

  return (
    <section id="atelier" className="py-24 lg:py-40 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-xs font-body tracking-[0.3em] uppercase mb-4">
            L'Atelier
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-4">
            Crafted in Small Batches
          </h2>
          <div className="w-16 h-px bg-border mx-auto mb-6" />
          <p className="text-muted-foreground text-sm font-body max-w-xl mx-auto leading-relaxed">
            Every piece passes through the hands of artisans who understand that luxury 
            isn't about excess — it's about intention. From reclaimed ocean waste to your coastline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {details.map((detail) => (
            <div key={detail.label} className="bg-background p-8 lg:p-12">
              <p className="text-muted-foreground text-xs font-body tracking-[0.2em] uppercase mb-2">
                {detail.label}
              </p>
              <p className="font-serif text-lg text-foreground font-light">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtelierSection;
