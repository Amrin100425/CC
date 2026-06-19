import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, Clock, CheckCircle } from "lucide-react";
import { defaultActivities } from "@/lib/store";
import { notFound } from "next/navigation";

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  const activity = defaultActivities.find((a) => a.id === params.id);
  if (!activity) notFound();

  const spotsLeft = activity.capacity - activity.registered;
  const pct = Math.round((activity.registered / activity.capacity) * 100);

  return (
    <div className="min-h-screen py-10" style={{ background: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/activities" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition">
          <ArrowLeft size={16} /> Back to Activities
        </Link>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <div className="p-8 flex items-center gap-6" style={{ background: "#1A2744" }}>
                <div className="text-6xl">{activity.image}</div>
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#E8A020", color: "#1A2744" }}>{activity.type}</span>
                  <h1 className="font-display text-2xl font-bold text-white mt-3">{activity.title}</h1>
                </div>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Calendar size={16} style={{ color: "#D63B3B" }} />, label: "Date", value: activity.date },
                  { icon: <Clock size={16} style={{ color: "#D63B3B" }} />, label: "Time", value: activity.time },
                  { icon: <MapPin size={16} style={{ color: "#D63B3B" }} />, label: "Location", value: activity.location },
                  { icon: <Users size={16} style={{ color: "#D63B3B" }} />, label: "Capacity", value: `${activity.registered}/${activity.capacity} registered` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#F9FAFB" }}>
                    {item.icon}
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-sm font-semibold" style={{ color: "#1A2744" }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <h2 className="font-bold text-lg mb-4" style={{ color: "#1A2744" }}>About This Event</h2>
              <p className="text-gray-600 leading-relaxed">{activity.description}</p>
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6 sticky top-20" style={{ background: "#1A2744", boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <h3 className="text-white font-bold text-lg mb-1">Register Now</h3>
              <p className="text-gray-400 text-sm mb-5">Secure your spot before it fills up.</p>

              <div className="mb-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">{activity.registered} registered</span>
                  <span style={{ color: spotsLeft <= 0 ? "#D63B3B" : "#E8A020" }}>{spotsLeft > 0 ? `${spotsLeft} left` : "Full"}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct > 80 ? "#D63B3B" : "#28B4C8" }} />
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {["Full Name", "Email Address", "Phone Number"].map((p, i) => (
                  <input key={i} type={i === 1 ? "email" : i === 2 ? "tel" : "text"} placeholder={p}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
                  />
                ))}
              </div>

              <button
                disabled={spotsLeft <= 0}
                className="w-full py-3 rounded-xl font-bold text-sm transition-all"
                style={spotsLeft <= 0 ? { background: "#4B5563", color: "#9CA3AF" } : { background: "#D63B3B", color: "#fff" }}
              >
                {spotsLeft <= 0 ? "Event is Full" : "Confirm Registration"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
