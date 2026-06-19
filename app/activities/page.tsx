"use client";
import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Users, ChevronRight, Search } from "lucide-react";
import { defaultActivities } from "@/lib/store";

const activityTypes = [
  "All",
  "Career Fair",
  "Workshop",
  "Seminar",
  "Training",
  "Networking",
];

const typeColors: Record<string, { bg: string; color: string }> = {
  "Career Fair": { bg: "rgba(214,59,59,0.1)", color: "#D63B3B" },
  Workshop: { bg: "#EFF6FF", color: "#1D4ED8" },
  Seminar: { bg: "#F5F3FF", color: "#6D28D9" },
  Training: { bg: "#F0FDF4", color: "#15803D" },
  Networking: { bg: "rgba(40,180,200,0.1)", color: "#28B4C8" },
};

export default function ActivitiesPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [search, setSearch] = useState("");

  const activities = defaultActivities.filter((a) => {
    const matchType = selectedType === "All" || a.type === selectedType;
    const matchSearch =
      !search || a.title.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: "#F8F6F2" }}>
      <div
        className="py-12 px-4"
        style={{
          background: "linear-gradient(135deg, #1A2744 0%, #2A3F6F 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-2"
            style={{ color: "#28B4C8" }}
          >
            Learn & Connect
          </p>
          <h1 className="font-display text-4xl font-bold text-white mb-2">
            Activities & Events
          </h1>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            Career fairs, workshops, seminars and networking events in Siem Reap
          </p>
          <div
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 max-w-md"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Search size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              className="bg-transparent text-sm outline-none flex-1 text-white placeholder-white/40"
              style={{ color: "#fff" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {activityTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={
                selectedType === type
                  ? {
                      background: "#1A2744",
                      color: "#fff",
                      boxShadow: "0 2px 8px rgba(26,39,68,0.3)",
                    }
                  : {
                      background: "#fff",
                      color: "#6B7280",
                      border: "1px solid #E5E7EB",
                    }
              }
            >
              {type}
            </button>
          ))}
        </div>

        {activities.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="font-bold text-xl mb-2" style={{ color: "#1A2744" }}>
              No events found
            </h3>
            <p className="text-gray-500 text-sm">
              Check back soon for new activities
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {activities.map((act) => {
              const spotsLeft = act.capacity - act.registered;
              const pct = Math.round((act.registered / act.capacity) * 100);
              const tc = typeColors[act.type] || {
                bg: "#F9FAFB",
                color: "#6B7280",
              };
              return (
                <div
                  key={act.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 group transition-all"
                  style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}
                >
                  <div
                    className="p-6 flex items-center justify-between"
                    style={{ background: "#1A2744" }}
                  >
                    <div className="text-4xl">{act.image}</div>
                    <div className="text-right">
                      <p
                        className="font-bold text-xs uppercase"
                        style={{ color: "#E8A020" }}
                      >
                        {new Date(act.date).toLocaleString("en-US", {
                          month: "long",
                        })}
                      </p>
                      <p className="text-white font-bold text-3xl">
                        {new Date(act.date).getDate()}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {new Date(act.date).getFullYear()}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: tc.bg, color: tc.color }}
                    >
                      {act.type}
                    </span>
                    <h3
                      className="font-bold mt-3 mb-2 leading-snug"
                      style={{ color: "#1A2744" }}
                    >
                      {act.title}
                    </h3>
                    <div className="space-y-1.5 mb-4">
                      <p className="text-xs text-gray-500 flex items-center gap-1.5">
                        <Calendar size={12} style={{ color: "#28B4C8" }} />{" "}
                        {act.date} · {act.time}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1.5">
                        <MapPin size={12} style={{ color: "#28B4C8" }} />{" "}
                        {act.location}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {act.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        {/* <span className="flex items-center gap-1">
                          <Users size={11} /> {act.registered} registered
                        </span> */}
                        {/* <span>
                          {spotsLeft > 0 ? `${spotsLeft} spots left` : "Full"}
                        </span> */}
                      </div>
                      {/* <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#F3F4F6" }}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct > 80 ? "#D63B3B" : "#28B4C8" }} />
                      </div> */}
                    </div>

                    <Link
                      href={`/activities/${act.id}`}
                      className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                      style={
                        spotsLeft <= 0
                          ? {
                              background: "#F3F4F6",
                              color: "#9CA3AF",
                              pointerEvents: "none",
                            }
                          : { background: "#1A2744", color: "#fff" }
                      }
                    >
                      {spotsLeft <= 0 ? (
                        "Fully Booked"
                      ) : (
                        <>
                          <span>Register Now</span>
                          <ChevronRight size={15} />
                        </>
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
