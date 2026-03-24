import { useState } from "react";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 lg:py-32 px-6 bg-card">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-muted-foreground text-xs font-body tracking-[0.3em] uppercase mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground mb-4">
          Priority Access
        </h2>
        <div className="w-12 h-px bg-border mx-auto mb-6" />
        <p className="text-muted-foreground text-sm font-body mb-10 leading-relaxed">
          Be the first to know when Edition II drops. Members receive early access, 
          exclusive colorways, and behind-the-scenes stories from the atelier.
        </p>

        {submitted ? (
          <div className="space-y-3">
            <p className="font-serif text-xl text-foreground italic">Benvenuto.</p>
            <p className="text-muted-foreground text-xs font-body tracking-wider">
              You're now part of the MARÉ NOIR inner circle.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-transparent border border-border px-5 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-8 py-3.5 text-xs font-body tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailCapture;
