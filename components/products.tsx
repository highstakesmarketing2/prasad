import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Indian Red Chilli Powder",
    image: "/images/chilli-powder.jpg",
    specs: {
      Form: "Fine Powder",
      Grade: "Premium",
      Purity: "100%",
      "Shelf Life": "12 Months",
    },
  },
  {
    name: "Premium Turmeric Powder",
    image: "/images/turmeric-powder.jpg",
    specs: {
      Form: "Fine Powder",
      Curcumin: "3-5%",
      Color: "Golden Yellow",
      "Shelf Life": "12 Months",
    },
  },
  {
    name: "Authentic Garam Masala",
    image: "/images/garam-masala.jpg",
    specs: {
      Form: "Fine Blend",
      Flavor: "Strong Aroma",
      Color: "Brown",
      "Shelf Life": "12 Months",
    },
  },
  {
    name: "Aromatic Biryani Masala",
    image: "/images/biryani-masala.jpg",
    specs: {
      Form: "Fine Powder",
      Flavor: "Rich & Aromatic",
      Usage: "Biryani & Pulao",
      "Shelf Life": "12 Months",
    },
  },
  {
    name: "Pure Cumin Powder",
    image: "/images/cumin-powder.jpg",
    specs: {
      Form: "Fine Powder",
      Purity: "100%",
      Aroma: "Earthy",
      "Shelf Life": "12 Months",
    },
  },
  {
    name: "Natural Coriander Powder",
    image: "/images/coriander-powder.jpg",
    specs: {
      Form: "Fine Powder",
      Purity: "100%",
      Color: "Light Brown-Green",
      "Shelf Life": "12 Months",
    },
  },
];

const categories = [
  "Basic Spice Powders",
  "Indian Masala Powders",
  "Premium Salt & Seasonings",
  "Instant Mixes & Batter Powders",
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Premium Culinary Spices & Masalas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A versatile selection of basic spices, aromatic herbs, blended
            masalas, and ready mixes designed to enhance flavor and authenticity
            in every recipe.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <div className="space-y-2 mb-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-medium text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="#contact">Enquiry Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
