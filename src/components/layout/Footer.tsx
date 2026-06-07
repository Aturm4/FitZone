import { Zap, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const FOOTER_LINKS = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Services: ["Personal Training", "Group Classes", "Nutrition Plans", "Recovery"],
  Support: ["FAQ", "Contact", "Privacy Policy", "Terms of Service"],
};

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-display text-2xl tracking-wider text-white">
                FIT<span className="text-brand-500">ZONE</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Premium fitness training since 2014. We are committed to helping
              you achieve your goals through expert coaching, world-class
              facilities, and a community that lifts you higher.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-500 hover:border-brand-500/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/45 text-sm hover:text-brand-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} FitZone. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Built for champions. Designed for results.
          </p>
        </div>
      </div>
    </footer>
  );
}
