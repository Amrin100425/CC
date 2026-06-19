"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { defaultContent } from "@/lib/store";

export default function ContactPage() {
  const content = defaultContent;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="min-h-screen" style={{ background: "#F8F6F2" }}>
      <div className="py-14 px-4" style={{ background: "linear-gradient(135deg, #1A2744 0%, #2A3F6F 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#28B4C8" }}>Get in Touch</p>
          <h1 className="font-display text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>We&apos;re here to help with career questions or employer inquiries.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <h2 className="font-bold text-lg mb-5" style={{ color: "#1A2744" }}>Contact Information</h2>
              <div className="space-y-4">
                {[
                  { icon: <MapPin style={{ color: "#D63B3B" }} size={20} />, title: "Address", val: content.address },
                  { icon: <Phone style={{ color: "#28B4C8" }} size={20} />, title: "Phone", val: content.contactPhone },
                  { icon: <Mail style={{ color: "#E8A020" }} size={20} />, title: "Email", val: content.contactEmail },
                  { icon: <Clock style={{ color: "#1A2744" }} size={20} />, title: "Hours", val: "Mon–Fri: 8:00 AM – 5:00 PM\nSat: 8:00 AM – 12:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "#F9FAFB" }}>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.title}</p>
                      <p className="text-sm font-medium whitespace-pre-line" style={{ color: "#1A2744" }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#16A34A" }} />
                <h3 className="font-bold text-xl mb-2" style={{ color: "#1A2744" }}>Message Sent!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you within 1–2 business days.</p>
                <button onClick={() => setSent(false)} className="mt-5 text-sm hover:underline" style={{ color: "#D63B3B" }}>Send another message</button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-lg mb-5" style={{ color: "#1A2744" }}>Send a Message</h2>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "Your name" },
                      { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">{f.label}</label>
                        <input required type={f.type || "text"} value={(form as Record<string, string>)[f.key]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none"
                          placeholder={f.placeholder} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1 block">Subject</label>
                    <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none"
                      placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1 block">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none resize-none"
                      placeholder="Write your message..." />
                  </div>
                  <button type="submit" className="w-full text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all" style={{ background: "#1A2744" }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
