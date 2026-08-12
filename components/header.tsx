"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import { navLinks } from "@/app/config/lists";
import { getWhatsAppLink } from "@/app/config/global-functions";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const headerOffset = 90;
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 transition-all duration-500 container",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-between rounded-2xl border px-5 transition-all duration-500",
          "border-white/10 dark:border-white/10",
          "backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-background/40",
          scrolled
            ? "h-14 bg-background/60 shadow-lg shadow-black/5"
            : "h-16 bg-background/30 shadow-none",
        )}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-linear-to-r from-transparent via-white/40 to-transparent" />

        <Link
          href="#inicio"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          <Image
            src={"/logo.png"}
            alt="Logo da Empresa Adamantis"
            width={35}
            height={35}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative py-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full bg-primary",
                  "transition-all duration-300 ease-out group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Fale conosco</Button>
          </Link>
        </div>

        <Button
          className="md:hidden"
          variant={"ghost"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out md:hidden",
          mobileOpen ? "mt-2 max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className={cn(
            "flex flex-col gap-1 rounded-2xl border border-white/10 p-3",
            "backdrop-blur-xl backdrop-saturate-150 bg-background/60 shadow-lg shadow-black/5",
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-primary/10 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
