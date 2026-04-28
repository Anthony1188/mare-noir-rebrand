import ProductCard from "./ProductCard";
import productNoirFront from "@/assets/product-noir-front.jpg";
import productNoirBack from "@/assets/product-noir-back.jpg";
import productOceanoFront from "@/assets/product-oceano-front.jpg";
import productOceanoBack from "@/assets/product-oceano-back.jpg";
import productSabbiaFront from "@/assets/product-sabbia-front.jpg";
import productSabbiaBack from "@/assets/product-sabbia-back.jpg";

const products = [
  {
    image: productNoirFront,
    imageBack: productNoirBack,
    name: "The Noir",
    italianName: "Il Nero",
    number: "018",
    total: 120,
    remaining: 47,
    bottles: 12,
    price: 185,
  },
  {
    image: productOceanoFront,
    imageBack: productOceanoBack,
    name: "The Oceano",
    italianName: "L'Oceano",
    number: "042",
    total: 120,
    remaining: 73,
    bottles: 12,
    price: 185,
  },
  {
    image: productSabbiaFront,
    imageBack: productSabbiaBack,
    name: "The Sabbia",
    italianName: "La Sabbia",
    number: "007",
    total: 120,
    remaining: 91,
    bottles: 12,
    price: 185,
  },
];

const ProductSection = () => {
  return (
    <section id="edition-i" className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-muted-foreground text-xs font-body tracking-[0.3em] uppercase mb-4">
          Drop 001 — Edition I
        </p>
        <h2 className="font-serif text-4xl lg:text-6xl font-light text-foreground mb-4">
          The Collection
        </h2>
        <div className="w-16 h-px bg-border mx-auto mb-6" />
        <p className="text-muted-foreground text-sm font-body max-w-lg mx-auto leading-relaxed">
          Three silhouettes. 120 pieces each. Crafted from reclaimed ocean materials 
          along the Mediterranean coast. Once they're gone, they're gone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
