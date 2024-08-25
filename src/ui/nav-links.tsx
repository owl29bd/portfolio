"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      {/* checking active links */}
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>

      <Link
        // checking active links
        className={`link ${pathname === "/about" ? "active" : ""}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
