import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="flex flex-col gap-4 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} Hatsoff Media Pvt. Ltd. All rights reserved.
      </p>

      <div className="flex gap-6">
        <Link href="/about" className="transition-colors hover:text-[#FFCC00]">
          Privacy Policy
        </Link>
        <Link href="/contact" className="transition-colors hover:text-[#FFCC00]">
          Terms of Service
        </Link>
        <a
          href="https://www.linkedin.com/company/112455932/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#FFCC00]"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
