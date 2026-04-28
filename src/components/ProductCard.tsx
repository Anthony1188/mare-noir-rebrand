import { useState } from "react";

interface ProductCardProps {
  image: string;
  imageBack?: string;
  name: string;
  italianName: string;
  number: string;
  total: number;
  remaining: number;
  bottles: number;
  price: number;
}

const SIZES = ["S", "M", "L", "XL", "XXL"];

const ProductCard = ({ image, imageBack, name, italianName, number, total, remaining, bottles, price }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="group">
      <div className="relative overflow-hidden bg-card mb-6">
        <img
          src={image}
          alt={`${name} — front view`}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full aspect-[4/5] object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {imageBack && (
          <img
            src={imageBack}
            alt={`${name} — back view`}
            loading="lazy"
            width={800}
            height={1000}
            className="absolute inset-0 w-full h-full aspect-[4/5] object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-foreground/50 text-xs font-body tracking-[0.2em]">{number}/{total}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-noir/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-primary-foreground/60 text-xs font-body">
            Crafted from {bottles} recycled ocean bottles
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="font-serif text-xl font-light text-foreground">{name}</h3>
            <p className="text-muted-foreground text-xs italic font-serif">{italianName}</p>
          </div>
          <span className="font-body text-sm text-foreground">€{price}</span>
        </div>

        <div className="flex gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 text-xs font-body tracking-wider border transition-all duration-300 ${
                selectedSize === size
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-muted-foreground text-xs font-body tracking-wider">
            {remaining} of {total} remaining
          </span>
          <div className="w-20 h-0.5 bg-border overflow-hidden">
            <div
              className="h-full bg-ocean transition-all duration-700"
              style={{ width: `${((total - remaining) / total) * 100}%` }}
            />
          </div>
        </div>

        <button className="w-full border border-foreground text-foreground hover:bg-foreground hover:text-background py-3 text-xs font-body tracking-[0.2em] uppercase transition-all duration-500">
          Add to Edition
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
