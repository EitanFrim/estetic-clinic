"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail, Phone, AtSign } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CONTACT_INFO, getWhatsAppUrl } from "@/lib/constants";
import { slideInFromRight, slideInFromLeft, fadeInUp } from "@/lib/animations";

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <Container>
        <SectionHeading
          label="צרו קשר"
          title="התחילו את המסע שלכם"
          subtitle="נשמח לענות על כל שאלה ולעזור לכם לקבוע תור"
        />

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          {/* Contact Details + WhatsApp CTA */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-5 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#20BD5C] hover:shadow-xl"
            >
              <MessageCircle className="h-6 w-6" />
              שלחו הודעה בוואטסאפ
            </a>

            <div className="space-y-5">
              <h3 className="font-heading text-xl font-semibold text-[var(--color-charcoal-900)]">
                פרטי הקליניקה
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-[var(--color-taupe-500)] transition-colors hover:text-[var(--color-gold-500)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-cream-100)]">
                    <Phone className="h-5 w-5 text-[var(--color-gold-400)]" />
                  </div>
                  {CONTACT_INFO.phone}
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-[var(--color-taupe-500)] transition-colors hover:text-[var(--color-gold-500)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-cream-100)]">
                    <Mail className="h-5 w-5 text-[var(--color-gold-400)]" />
                  </div>
                  {CONTACT_INFO.email}
                </a>

                <div className="flex items-center gap-3 text-[var(--color-taupe-500)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-cream-100)]">
                    <MapPin className="h-5 w-5 text-[var(--color-gold-400)]" />
                  </div>
                  {CONTACT_INFO.address}
                </div>

                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--color-taupe-500)] transition-colors hover:text-[var(--color-gold-500)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-cream-100)]">
                    <AtSign className="h-5 w-5 text-[var(--color-gold-400)]" />
                  </div>
                  @{CONTACT_INFO.instagram}
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="rounded-xl border border-[var(--color-cream-200)] bg-white p-6">
              <h4 className="mb-3 font-heading font-semibold text-[var(--color-charcoal-900)]">
                שעות פעילות
              </h4>
              <div className="space-y-2 text-sm text-[var(--color-taupe-500)]">
                <div className="flex justify-between">
                  <span>ראשון - חמישי</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>שישי</span>
                  <span>09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>שבת</span>
                  <span>סגור</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-2xl border border-[var(--color-cream-200)] shadow-sm">
              <iframe
                src={CONTACT_INFO.googleMapsUrl}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת הקליניקה"
                className="h-[500px] w-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
