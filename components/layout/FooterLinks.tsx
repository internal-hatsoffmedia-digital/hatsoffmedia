import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Branding & Identity", href: "/services" },
  { name: "Website Development", href: "/services" },
  { name: "Social Media Growth", href: "/services" },
  { name: "Video Production", href: "/services" },
  { name: "Performance Marketing", href: "/services" },
];

export default function FooterLinks() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {/* Navigation */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFCC00]">
          Navigation
        </h3>
        <ul className="mt-4 space-y-2.5">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-neutral-400 transition-colors duration-200 hover:text-[#FFCC00]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFCC00]">
          Services
        </h3>
        <ul className="mt-4 space-y-2.5">
          {services.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-neutral-400 transition-colors duration-200 hover:text-[#FFCC00]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFCC00]">
          Contact
        </h3>
        <div className="mt-4 space-y-2 text-sm text-neutral-400">
          <p>Chennai, Tamil Nadu, India</p>
          <p>
            <a
              href="mailto:contact@hatsoffmedia.in"
              className="text-neutral-300 transition-colors hover:text-[#FFCC00]"
            >
              contact@hatsoffmedia.in
            </a>
          </p>
          <p>
            <a
              href="tel:+918925881695"
              className="font-mono text-neutral-300 transition-colors hover:text-[#FFCC00]"
            >
              +91 89258 81695
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
