"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border-soft">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-50 focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-green"
      >
        Skip to content
      </a>
      <Container className="py-5 sm:py-6">
        <nav
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.28em] text-green"
          >
            Kamila Meshaj
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "nav-link relative pb-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-green",
        isActive
          ? "is-active text-green"
          : "text-foreground/65 hover:text-green",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
