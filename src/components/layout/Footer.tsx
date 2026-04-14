"use client";

import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/common/Logo";
import { Container } from "./Container";

export function Footer() {
  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="bg-[var(--color-charcoal-900)] py-16 text-[var(--color-cream-200)]">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="full" color="light" className="h-12 w-auto" />
            <p className="text-sm leading-relaxed text-[var(--color-taupe-300)]">
              קליניקה לאסתטיקה רפואית ודנטלית.
              <br />
              מומחיות, דיוק ותוצאות טבעיות.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-[var(--color-cream-100)]">
              ניווט מהיר
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-start text-sm text-[var(--color-taupe-300)] transition-colors hover:text-[var(--color-gold-400)]"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-[var(--color-cream-100)]">
              צרו קשר
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-[var(--color-taupe-300)] transition-colors hover:text-[var(--color-gold-400)]"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-[var(--color-taupe-300)] transition-colors hover:text-[var(--color-gold-400)]"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-center gap-2 text-[var(--color-taupe-300)]">
                <MapPin className="h-4 w-4 shrink-0" />
                {CONTACT_INFO.address}
              </div>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-taupe-300)] transition-colors hover:text-[var(--color-gold-400)]"
              >
                <AtSign className="h-4 w-4 shrink-0" />
                @{CONTACT_INFO.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[var(--color-taupe-700)]/30 pt-8 text-center text-xs text-[var(--color-taupe-500)]">
          <p>&copy; {new Date().getFullYear()} ד״ר חיים טל | קליניקה לאסתטיקה רפואית. כל הזכויות שמורות.</p>
        </div>
      </Container>
    </footer>
  );
}
