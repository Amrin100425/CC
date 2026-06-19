import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#1A2744" }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="USEA" width={48} height={48} className="rounded-lg" />
              <div>
                <p className="text-white font-bold text-base">USEA</p>
                <p className="text-xs font-medium" style={{ color: "#28B4C8" }}>Career Center</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering Cambodian talent through opportunities, training, and employer connections in Siem Reap.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all" style={{ background: "rgba(255,255,255,0.1)" }}>
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all" style={{ background: "rgba(255,255,255,0.1)" }}>
                <Play size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Browse Jobs", href: "/jobs" },
                { label: "Activities & Events", href: "/activities" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Admin Panel", href: "/admin" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Job Categories</h4>
            <ul className="space-y-2">
              {["Hospitality", "Tourism", "Technology", "Finance", "Marketing", "Education", "Healthcare", "Retail"].map((c) => (
                <li key={c}>
                  <Link href={`/jobs?category=${c}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#28B4C8" }} />
                <p className="text-sm text-gray-400">Street 60, Sala Kamroeuk<br />Siem Reap, Cambodia</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: "#28B4C8" }} />
                <p className="text-sm text-gray-400">+855 63 123 456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: "#28B4C8" }} />
                <p className="text-sm text-gray-400">info@useacareercenter.edu.kh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© 2025 USEA Career Center, Siem Reap. All rights reserved.</p>
          <p className="text-xs text-gray-500">Connecting Cambodian talent with opportunity.</p>
        </div>
      </div>
    </footer>
  );
}
