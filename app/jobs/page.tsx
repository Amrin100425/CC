"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, ChevronRight, Star, SlidersHorizontal } from "lucide-react";
import { defaultJobs } from "@/lib/store";

const categories = ["All", "Hospitality", "Tourism", "Technology", "Finance", "Marketing", "Education", "Healthcare", "Wellness", "Retail"];
const jobTypes = ["All", "Full-time", "Part-time", "Internship", "Contract"];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const jobs = defaultJobs.filter((j) => {
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "All" || j.category === selectedCategory;
    const matchType = selectedType === "All" || j.type === selectedType;
    return matchSearch && matchCat && matchType;
  });

  return (
    <div className="min-h-screen" style={{ background: "#F8F6F2" }}>
      {/* Header */}
      <div className="py-12 px-4" style={{ background: "linear-gradient(135deg, #1A2744 0%, #2A3F6F 50%, #1A2744 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#28B4C8" }}>Opportunities Await</p>
          <h1 className="font-display text-4xl font-bold text-white mb-6">Find Your Next Job</h1>
          <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl shadow-2xl">
            <div className="flex items-center gap-3 flex-1 px-4 py-2">
              <Search size={18} className="text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Job title or company..."
                className="w-full text-gray-700 text-sm outline-none bg-transparent"
              />
            </div>
            <button className="text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 justify-center" style={{ background: "#D63B3B" }}>
              <Search size={16} /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl p-5 sticky top-20" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold flex items-center gap-2" style={{ color: "#1A2744" }}>
                  <SlidersHorizontal size={16} /> Filters
                </h3>
                <button onClick={() => { setSelectedCategory("All"); setSelectedType("All"); setSearch(""); }} className="text-xs hover:underline" style={{ color: "#D63B3B" }}>
                  Reset
                </button>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Category</p>
                <div className="space-y-1">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(c)}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all"
                      style={selectedCategory === c ? { background: "#1A2744", color: "#fff", fontWeight: 500 } : { color: "#6B7280" }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Job Type</p>
                <div className="space-y-1">
                  {jobTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedType(t)}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all"
                      style={selectedType === t ? { background: "#1A2744", color: "#fff", fontWeight: 500 } : { color: "#6B7280" }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Listings */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 text-sm">
                Showing <span className="font-bold" style={{ color: "#1A2744" }}>{jobs.length}</span> jobs
                {selectedCategory !== "All" && <span style={{ color: "#D63B3B" }}> in {selectedCategory}</span>}
              </p>
            </div>

            {jobs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-bold text-xl mb-2" style={{ color: "#1A2744" }}>No jobs found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-100 group transition-all duration-300" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                          {job.logo}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold" style={{ color: "#1A2744" }}>{job.title}</h3>
                            {job.featured && (
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1" style={{ background: "#FEF9C3", color: "#92620A" }}>
                                <Star size={10} fill="currentColor" /> Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm font-medium mb-2">{job.company}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-3 py-1 rounded-full" style={{ background: "#EFF6FF", color: "#1D4ED8" }}>{job.type}</span>
                            <span className="text-xs px-3 py-1 rounded-full flex items-center gap-1 bg-gray-100 text-gray-600">
                              <MapPin size={10} /> {job.location}
                            </span>
                            <span className="text-xs px-3 py-1 rounded-full" style={{ background: "#F5F3FF", color: "#6D28D9" }}>{job.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3 shrink-0">
                        <p className="font-bold text-sm" style={{ color: "#15803D" }}>{job.salary}</p>
                        <Link
                          href={`/jobs/${job.id}`}
                          className="text-white px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1 transition-all"
                          style={{ background: "#1A2744" }}
                        >
                          Apply <ChevronRight size={15} />
                        </Link>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mt-4 line-clamp-2">{job.description}</p>
                    <p className="text-xs text-gray-400 mt-3">Deadline: {job.deadline}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
