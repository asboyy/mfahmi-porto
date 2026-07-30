import { motion } from "motion/react";
import { CONTACTS } from "../data";
import { TranslationSchema } from "../translations";
import LucideIcon from "./LucideIcon";

// Properti untuk komponen ContactSection
interface ContactSectionProps {
  translations: TranslationSchema["contact"]; // Objek lokalisasi teks untuk bagian Contact
  footerText: string; // Teks copyright kecil di bagian bawah section ini
}

export default function ContactSection({
  translations,
  footerText,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center px-4 sm:px-6 py-16"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Judul Bagian */}
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-black mb-10 tracking-tight text-center uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {translations.heading}
        </motion.h2>

        {/* Kisi Media Sosial & Email (Social Accounts Grid) */}
        {/* Menggunakan grid-cols-2 pada mobile, sm:grid-cols-3, dan md:grid-cols-5 pada desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full">
          {CONTACTS.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Ikon Dinamis dengan efek pembesaran saat kursor didekatkan */}
              <div
                className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-200 ${contact.color} text-white`}
              >
                <LucideIcon
                  name={contact.iconName}
                  size={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-base font-black text-black">
                {contact.name}
              </h3>
            </motion.a>
          ))}
        </div>
        <p className="mt-10 font-extrabold text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} {footerText}
        </p>
      </div>
    </section>
  );
}
