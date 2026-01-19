import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-spices.jpg"
          alt="Premium Indian Spices"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-widest mb-4">
            Exporter & Supplier from Mumbai, India
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Premium Indian Spices & Masala Powders
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Delivering pure, aromatic, and high-quality spice powders, masala
            blends, seasonings, and instant mixes to kitchens across the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#products">Explore Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-foreground"
              asChild
            >
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
