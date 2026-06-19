import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, ArrowRight, MapPin } from "lucide-react";
import { defaultContent } from "@/lib/store";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function AboutPage() {
  const content = defaultContent;
  const team = [
    { name: "Ne Sokna", role: "Director", emoji: "👨‍💼" },
    { name: "Jane Doe", role: "Career Counselor", emoji: "👩‍🏫" },
    { name: "John Doe", role: "Employer Relations", emoji: "👨‍💻" },
    { name: "Jackie Chan", role: "Training Coordinator", emoji: "👩‍🎓" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#F8F6F2" }}>
      <div
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #1A2744 0%, #2A3F6F 100%)",
        }}
      >
        <Image
          src="/logo.jpg"
          alt="USEA"
          width={80}
          height={80}
          className="rounded-xl mx-auto mb-6"
        />
        <h1 className="font-display text-4xl font-bold text-white mb-4">
          About USEA Career Center
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {content.aboutText}
        </p>
      </div>

      <div className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {content.stats.map((s, i) => (
            <div key={i}>
              <p
                className="font-display text-3xl font-bold"
                style={{ color: "#1A2744" }}
              >
                {s.value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Target size={28} style={{ color: "#D63B3B" }} />,
              title: "Our Mission",
              bg: "#FEF2F2",
              text: "To empower job seekers across Siem Reap with the skills, connections, and opportunities they need to build meaningful careers.",
            },
            {
              icon: <Eye size={28} style={{ color: "#1A2744" }} />,
              title: "Our Vision",
              bg: "#EFF6FF",
              text: "To be Cambodia's most trusted career development center, recognized for bridging talent and industry in Siem Reap and beyond.",
            },
            {
              icon: <Heart size={28} style={{ color: "#28B4C8" }} />,
              title: "Our Values",
              bg: "#ECFEFF",
              text: "Integrity, inclusivity, and community. We believe every Cambodian deserves access to career support and a chance to succeed.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ background: item.bg }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3
                className="font-bold text-lg mb-3"
                style={{ color: "#1A2744" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2
            className="font-display text-3xl font-bold text-center mb-10"
            style={{ color: "#1A2744" }}
          >
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center"
                style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}
              >
                <div className="text-5xl mb-3">{member.emoji}</div>
                <h3 className="font-bold text-sm" style={{ color: "#1A2744" }}>
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-white rounded-2xl p-8 text-center"
          style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}
        >
          <MapPin
            size={32}
            className="mx-auto mb-3"
            style={{ color: "#D63B3B" }}
          />
          <h3 className="font-bold text-xl mb-2" style={{ color: "#1A2744" }}>
            Find Us in Siem Reap
          </h3>

          <p className="text-gray-500 mb-4">{content.address}</p>

          <p className="text-gray-500 text-sm">
            Open Mon – Fri: 8:00 AM – 5:00 PM | Sat: 8:00 AM – 12:00 PM
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-xl font-semibold mt-5 transition text-sm"
            style={{ background: "#1A2744" }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
