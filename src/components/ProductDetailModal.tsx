import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

export interface ProductDetail {
  image: string;
  name: string;
  italianName: string;
  number: string;
  total: number;
  remaining: number;
  bottles: number;
  price: number;
  description?: string;
  materials?: string[];
  specs?: { label: string; value: string }[];
}

interface Props {
  product: ProductDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SIZES = ["S", "M", "L", "XL", "XXL"];

const ProductDetailModal = ({ product, open, onOpenChange }: Props) => {
  const [size, setSize] = useState<string | null>(null);

  if (!product) return null;

  const handleAdd = () => {
    if (!size) {
      toast({ title: "Select a size", description: "Please choose your size before adding to cart." });
      return;
    }
    toast({
      title: "Added to your edition",
      description: `${product.name} (${size}) — €${product.price}`,
    });
    onOpenChange(false);
    setSize(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          <div className="relative bg-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="absolute top-4 left-4">
              <span className="text-foreground/50 text-xs font-body tracking-[0.2em]">
                {product.number}/{product.total}
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-12 space-y-6">
            <div>
              <p className="text-muted-foreground text-xs font-body tracking-[0.3em] uppercase mb-3">
                Edition I
              </p>
              <DialogTitle className="font-serif text-3xl lg:text-4xl font-light text-foreground">
                {product.name}
              </DialogTitle>
              <p className="text-muted-foreground text-sm italic font-serif mt-1">
                {product.italianName}
              </p>
            </div>

            <div className="w-12 h-px bg-border" />

            <DialogDescription className="text-sm font-body text-muted-foreground leading-relaxed">
              {product.description ??
                "A study in restraint. Tailored along the Mediterranean coast from reclaimed ocean materials, finished by hand in our atelier."}
            </DialogDescription>

            <div>
              <p className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-3">
                Materials
              </p>
              <ul className="space-y-1.5 text-sm font-body text-muted-foreground">
                {(product.materials ?? [
                  "78% Regenerated ECONYL® nylon",
                  "22% Elastane (recycled)",
                  "Inner mesh: 100% recycled polyester",
                ]).map((m) => (
                  <li key={m}>— {m}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-3">
                Specifications
              </p>
              <dl className="grid grid-cols-2 gap-y-2 text-sm font-body">
                {(product.specs ?? [
                  { label: "Cut", value: "Tailored mid-thigh" },
                  { label: "Lining", value: "Recycled mesh" },
                  { label: "Closure", value: "Drawcord & D-ring" },
                  { label: "Origin", value: "Made in Italy" },
                ]).map((s) => (
                  <div key={s.label} className="contents">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-foreground">{s.value}</dd>
                  </div>
                ))}
                <div className="contents">
                  <dt className="text-muted-foreground">Reclaimed</dt>
                  <dd className="text-foreground">{product.bottles} ocean bottles</dd>
                </div>
              </dl>
            </div>

            <div className="w-12 h-px bg-border" />

            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-2xl font-light text-foreground">€{product.price}</span>
                <span className="text-muted-foreground text-xs font-body tracking-wider">
                  {product.remaining} of {product.total} remaining
                </span>
              </div>

              <div>
                <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Size
                </p>
                <div className="flex gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`w-10 h-10 text-xs font-body tracking-wider border transition-all duration-300 ${
                        size === s
                          ? "bg-foreground text-background border-foreground"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="w-full bg-foreground text-background hover:bg-noir-soft py-4 text-xs font-body tracking-[0.3em] uppercase transition-all duration-500"
              >
                Add to Cart — €{product.price}
              </button>
              <p className="text-center text-muted-foreground text-[10px] font-body tracking-[0.2em] uppercase">
                Complimentary shipping & returns within Europe
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
