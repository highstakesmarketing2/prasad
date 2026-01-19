import { Building2, Users, Globe, Calendar } from "lucide-react";

const stats = [
  {
    icon: Building2,
    label: "Nature of Business",
    value: "Exporter, Supplier, Trader",
  },
  {
    icon: Users,
    label: "Team Size",
    value: "Growing Team",
  },
  {
    icon: Calendar,
    label: "Year of Establishment",
    value: "2025",
  },
  {
    icon: Globe,
    label: "Market Covered",
    value: "Worldwide",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Welcome to High Stakes
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in <strong className="text-foreground">2025</strong> by{" "}
                <strong className="text-foreground">Mr. Prasad Parab</strong>,
                High Stakes is a growing Exporter, Supplier, and
                Trader of premium spice powders, masala blends, seasonings, and
                instant mixes.
              </p>
              <p>
                We deliver pure, aromatic, and high-quality products sourced and
                processed with strict hygiene and global standards. With a focus
                on reliability, authenticity, and customer satisfaction, High
                Stakes brings the true flavors of India to kitchens
                across the world.
              </p>
              <p>
                We export premium-quality Indian spices in flexible quantities,
                catering to both small trial orders and large bulk shipments as
                per global buyer requirements.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Glimpse of Our Company
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                >
                  <stat.icon className="h-8 w-8 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
