"use client";

import Link from "next/link";

export function Header() {
  return (
    <div className="py-8">
      <Link href={"/"} className="text-4xl font-extrabold py-8 sm:text-5xl sm:py-10 md:text-6xl sm:py-11 lg:text-7xl lg:py-12">Meu Blog</Link>
    </div>
  );
}
