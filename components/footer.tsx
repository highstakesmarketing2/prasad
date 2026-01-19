import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">High Stakes</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Exporter, Supplier & Trader of premium spice powders, masala
              blends, seasonings, and instant mixes from Mumbai, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="#home"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="#products"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm text-background/70 space-y-2">
              <p>Prasad Parab</p>
              <p>
                204 Excel Chs, Azad Nagar, Veera Desai Road, Andheri West,
                Mumbai, Maharashtra - 400053, India
              </p>
              <p>
                <a
                  href="tel:+917039119025"
                  className="hover:text-background transition-colors"
                >
                  +91 7039119025
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} High Stakes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
