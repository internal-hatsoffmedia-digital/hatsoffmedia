import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <h1 className="text-2xl font-bold text-[#FFCC00]">
        Hatsoff <span className="text-white">Media</span>
      </h1>
    </Link>
  );
}