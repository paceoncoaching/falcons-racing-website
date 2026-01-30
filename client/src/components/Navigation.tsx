import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "/assets/Falcons-Racing_1769682474129.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/riders", label: "Team" },
    { href: "/events", label: "Race Center" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src={logo} 
                alt="Falcons Pedal Mafia Racing Team" 
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-display font-bold text-2xl md:text-3xl text-primary tracking-wider uppercase hidden sm:block">
                Falcons <span className="text-white">Pedal Mafia Racing Team</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "font-display text-lg uppercase tracking-wide cursor-pointer transition-colors duration-200 hover:text-primary",
                    location === link.href ? "text-primary" : "text-white/90"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-wider px-6 py-2 rounded skew-x-[-12deg] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                <span className="skew-x-[12deg] inline-block">Join Us</span>
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden h-[100dvh] w-full",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-display text-3xl uppercase tracking-wider cursor-pointer hover:text-primary transition-colors",
                location === link.href ? "text-primary" : "text-white"
              )}
            >
              {link.label}
            </span>
          </Link>
        ))}
        <button 
          onClick={() => setIsOpen(false)}
          className="mt-8 text-white/50 hover:text-white font-body text-sm"
        >
          Close Menu
        </button>
      </div>
    </nav>
  );
}
