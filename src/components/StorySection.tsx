import storyImage from "@/assets/story-mediterranean.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <p className="text-muted-foreground text-xs font-body tracking-[0.3em] uppercase">
              La Nostra Storia
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground leading-tight">
              Born from the sea.<br />
              Returned with purpose.
            </h2>
            <div className="w-16 h-px bg-border" />
            <div className="space-y-5 text-muted-foreground text-sm font-body leading-relaxed">
              <p>
                MARÉ NOIR was conceived on the shores of the Amalfi Coast, where the 
                beauty of the Mediterranean meets the reality of what we've left behind. 
                Discarded fishing nets. Forgotten plastics. The remnants of a coastline 
                we once took for granted.
              </p>
              <p>
                We chose not to look away. Instead, we partnered with Italian textile 
                innovators to transform ocean waste into something worthy of the very 
                waters it was reclaimed from — luxury swimwear that carries the story 
                of its origin in every thread.
              </p>
              <p>
                Each edition is limited. Each piece is numbered. Because when you respect 
                the source, you don't mass-produce. You create with care, and you let 
                scarcity speak for itself.
              </p>
            </div>
            <p className="font-serif text-foreground/60 italic text-sm">
              "Il mare ci ha dato tutto. È tempo di restituire."
            </p>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden">
            <img
              src={storyImage}
              alt="Mediterranean coastline at golden hour"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
