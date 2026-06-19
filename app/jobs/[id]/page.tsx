import Link from "next/link";
import { ArrowLeft, MapPin, DollarSign, Calendar, CheckCircle, Briefcase, Share2 } from "lucide-react";
import { defaultJobs } from "@/lib/store";
import { notFound } from "next/navigation";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = defaultJobs.find((j) => j.id === params.id);
  if (!job) notFound();

  const related = defaultJobs.filter((j) => j.category === job.category && j.id !== job.id).slice(0, 2);

  return (
    <div className="min-h-screen py-10" style={{ background: "#F8F6F2" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/jobs" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition">
          <ArrowLeft size={16} /> Back to Jobs
        </Link>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <div className="flex items-start gap-4 p-6 mb-0">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl shrink-0" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                  {job.logo}
                </div>
                <div>
                  <h1 className="font-display text-2xl font-bold" style={{ color: "#1A2744" }}>{job.title}</h1>
                  <p className="text-gray-600 font-medium mt-1">{job.company}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 pb-6">
                {[
                  { icon: <MapPin size={15} />, label: "Location", value: job.location },
                  { icon: <Briefcase size={15} />, label: "Type", value: job.type },
                  { icon: <DollarSign size={15} />, label: "Salary", value: job.salary },
                  { icon: <Calendar size={15} />, label: "Deadline", value: job.deadline },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-3" style={{ background: "#F9FAFB" }}>
                    <div className="flex items-center gap-1.5 mb-1" style={{ color: "#D63B3B" }}>{item.icon}<span className="text-xs text-gray-500">{item.label}</span></div>
                    <p className="text-xs font-semibold" style={{ color: "#1A2744" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <h2 className="font-bold text-lg mb-4" style={{ color: "#1A2744" }}>Job Description</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <h2 className="font-bold text-lg mb-4" style={{ color: "#1A2744" }}>Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#28B4C8" }} />
                    <span className="text-gray-600 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl p-6" style={{ background: "#1A2744", boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <h3 className="text-white font-bold mb-2">Ready to Apply?</h3>
              <p className="text-gray-400 text-sm mb-5">Submit your application before: <span className="font-semibold" style={{ color: "#E8A020" }}>{job.deadline}</span></p>
              <button className="w-full text-white py-3 rounded-xl font-bold transition-all mb-3" style={{ background: "#D63B3B" }}>
                Apply Now
              </button>
              <button className="w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
                <Share2 size={15} /> Share Job
              </button>
            </div>

            <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
              <p className="text-xs text-gray-400 mb-2">Category</p>
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "#EFF6FF", color: "#1D4ED8" }}>{job.category}</span>
            </div>

            {related.length > 0 && (
              <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                <h3 className="font-bold text-sm mb-4" style={{ color: "#1A2744" }}>Related Jobs</h3>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link key={r.id} href={`/jobs/${r.id}`} className="block p-3 rounded-xl transition" style={{ background: "#F9FAFB" }}>
                      <p className="font-semibold text-sm" style={{ color: "#1A2744" }}>{r.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{r.company}</p>
                      <p className="text-xs font-medium mt-1" style={{ color: "#15803D" }}>{r.salary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
