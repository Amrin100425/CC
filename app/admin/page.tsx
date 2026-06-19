"use client";
import { useState } from "react";
import {
  LayoutDashboard, Briefcase, Calendar, Settings, Plus, Pencil, Trash2,
  LogIn, Users, TrendingUp, X, Save, Shield
} from "lucide-react";
import { defaultJobs, defaultActivities, defaultContent, Job, Activity, SiteContent } from "@/lib/store";

type Tab = "dashboard" | "jobs" | "activities" | "content";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [tab, setTab] = useState<Tab>("dashboard");
  const [jobs, setJobs] = useState<Job[]>(defaultJobs);
  const [activities, setActivities] = useState<Activity[]>(defaultActivities);
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [saved, setSaved] = useState(false);
  const [newJob, setNewJob] = useState<Partial<Job>>({ type: "Full-time", featured: false, requirements: [], logo: "💼" });
  const [newActivity, setNewActivity] = useState<Partial<Activity>>({ type: "Workshop", featured: false, image: "📅" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") { setAuthed(true); setLoginError(""); }
    else setLoginError("Incorrect password. Hint: admin123");
  };

  const deleteJob = (id: string) => { if (confirm("Delete this job?")) setJobs(jobs.filter(j => j.id !== id)); };
  const deleteActivity = (id: string) => { if (confirm("Delete this event?")) setActivities(activities.filter(a => a.id !== id)); };

  const saveJob = () => {
    if (editingJob) {
      setJobs(jobs.map(j => j.id === editingJob.id ? editingJob : j));
      setEditingJob(null);
    } else {
      const job = { ...newJob, id: Date.now().toString(), postedDate: new Date().toISOString().split("T")[0], requirements: newJob.requirements || [] } as Job;
      setJobs([job, ...jobs]);
      setNewJob({ type: "Full-time", featured: false, requirements: [], logo: "💼" });
      setShowJobForm(false);
    }
  };

  const saveActivity = () => {
    if (editingActivity) {
      setActivities(activities.map(a => a.id === editingActivity.id ? editingActivity : a));
      setEditingActivity(null);
    } else {
      const act = { ...newActivity, id: Date.now().toString(), registered: 0 } as Activity;
      setActivities([act, ...activities]);
      setNewActivity({ type: "Workshop", featured: false, image: "📅" });
      setShowActivityForm(false);
    }
  };

  const saveContent = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#F8F6F2" }}>
        <div className="bg-white rounded-2xl p-8 w-full max-w-sm" style={{ boxShadow: "0 8px 40px rgba(26,39,68,0.18)" }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#1A2744" }}>
              <Shield size={28} className="text-white" />
            </div>
            <h1 className="font-display text-2xl font-bold" style={{ color: "#1A2744" }}>Admin Panel</h1>
            <p className="text-gray-500 text-sm mt-1">USEA Career Center</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 font-medium mb-1 block">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" />
            </div>
            {loginError && <p className="text-sm" style={{ color: "#D63B3B" }}>{loginError}</p>}
            <button type="submit" className="w-full text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition" style={{ background: "#1A2744" }}>
              <LogIn size={16} /> Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "jobs", label: "Jobs", icon: <Briefcase size={18} /> },
    { id: "activities", label: "Activities", icon: <Calendar size={18} /> },
    { id: "content", label: "Site Content", icon: <Settings size={18} /> },
  ];

  const inputCls = "w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none";

  const JobForm = ({ job, onChange, onSave, onCancel }: { job: Partial<Job>; onChange: (j: Partial<Job>) => void; onSave: () => void; onCancel: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ boxShadow: "0 8px 40px rgba(26,39,68,0.3)" }}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-bold text-lg" style={{ color: "#1A2744" }}>{editingJob ? "Edit Job" : "New Job"}</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>
        <div className="p-6 grid sm:grid-cols-2 gap-4">
          {[
            { label: "Job Title", key: "title", placeholder: "e.g. Hotel Manager" },
            { label: "Company", key: "company", placeholder: "Company name" },
            { label: "Salary", key: "salary", placeholder: "e.g. $500 – $800/month" },
            { label: "Deadline", key: "deadline", type: "date" },
            { label: "Emoji Logo", key: "logo", placeholder: "e.g. 🏨" },
            { label: "Category", key: "category", placeholder: "e.g. Hospitality" },
          ].map((f) => (
            <div key={f.key}>
              <label className="text-xs text-gray-500 font-medium mb-1 block">{f.label}</label>
              <input type={f.type || "text"} value={(job as Record<string, string>)[f.key] || ""}
                onChange={(e) => onChange({ ...job, [f.key]: e.target.value })}
                placeholder={f.placeholder} className={inputCls} />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-500 font-medium mb-1 block">Description</label>
            <textarea rows={3} value={job.description || ""} onChange={(e) => onChange({ ...job, description: e.target.value })}
              className={inputCls + " resize-none"} placeholder="Job description..." />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-500 font-medium mb-1 block">Requirements (one per line)</label>
            <textarea rows={3} value={(job.requirements || []).join("\n")}
              onChange={(e) => onChange({ ...job, requirements: e.target.value.split("\n").filter(Boolean) })}
              className={inputCls + " resize-none"} placeholder="Requirement 1&#10;Requirement 2" />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 block">Job Type</label>
            <select value={job.type || "Full-time"} onChange={(e) => onChange({ ...job, type: e.target.value as Job["type"] })} className={inputCls}>
              {["Full-time", "Part-time", "Internship", "Contract"].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <input type="checkbox" id="featured" checked={job.featured || false} onChange={(e) => onChange({ ...job, featured: e.target.checked })} className="w-4 h-4" />
            <label htmlFor="featured" className="text-sm text-gray-600">Mark as Featured</label>
          </div>
        </div>
        <div className="flex gap-3 p-6 border-t border-gray-100">
          <button onClick={onSave} className="flex-1 text-white py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition" style={{ background: "#1A2744" }}>
            <Save size={16} /> Save Job
          </button>
          <button onClick={onCancel} className="px-6 border border-gray-200 rounded-xl text-sm text-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  );

  const ActivityForm = ({ act, onChange, onSave, onCancel }: { act: Partial<Activity>; onChange: (a: Partial<Activity>) => void; onSave: () => void; onCancel: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ boxShadow: "0 8px 40px rgba(26,39,68,0.3)" }}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-bold text-lg" style={{ color: "#1A2744" }}>{editingActivity ? "Edit Event" : "New Event"}</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>
        <div className="p-6 grid sm:grid-cols-2 gap-4">
          {[
            { label: "Title", key: "title", placeholder: "Event title" },
            { label: "Date", key: "date", type: "date" },
            { label: "Time", key: "time", placeholder: "e.g. 9:00 AM – 4:00 PM" },
            { label: "Location", key: "location", placeholder: "Venue or Online" },
            { label: "Capacity", key: "capacity", type: "number", placeholder: "Max attendees" },
            { label: "Emoji", key: "image", placeholder: "e.g. 🎪" },
          ].map((f) => (
            <div key={f.key}>
              <label className="text-xs text-gray-500 font-medium mb-1 block">{f.label}</label>
              <input type={f.type || "text"} value={(act as Record<string, string>)[f.key] || ""}
                onChange={(e) => onChange({ ...act, [f.key]: f.type === "number" ? Number(e.target.value) : e.target.value })}
                placeholder={f.placeholder} className={inputCls} />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-500 font-medium mb-1 block">Description</label>
            <textarea rows={3} value={act.description || ""} onChange={(e) => onChange({ ...act, description: e.target.value })}
              className={inputCls + " resize-none"} />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 block">Type</label>
            <select value={act.type || "Workshop"} onChange={(e) => onChange({ ...act, type: e.target.value as Activity["type"] })} className={inputCls}>
              {["Workshop", "Career Fair", "Seminar", "Training", "Networking"].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <input type="checkbox" id="afeatured" checked={act.featured || false} onChange={(e) => onChange({ ...act, featured: e.target.checked })} className="w-4 h-4" />
            <label htmlFor="afeatured" className="text-sm text-gray-600">Mark as Featured</label>
          </div>
        </div>
        <div className="flex gap-3 p-6 border-t border-gray-100">
          <button onClick={onSave} className="flex-1 text-white py-2.5 rounded-xl font-bold flex items-center justify-center gap-2" style={{ background: "#28B4C8" }}>
            <Save size={16} /> Save Event
          </button>
          <button onClick={onCancel} className="px-6 border border-gray-200 rounded-xl text-sm text-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex" style={{ background: "#F8F6F2" }}>
      {/* Sidebar */}
      <aside className="w-60 shrink-0 hidden lg:flex flex-col" style={{ background: "#1A2744" }}>
        <div className="p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-white font-bold text-sm">USEA Admin Panel</p>
          <p className="text-gray-400 text-xs mt-0.5">Content Management</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={tab === item.id ? { background: "#D63B3B", color: "#fff" } : { color: "#9CA3AF" }}>
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <button onClick={() => setAuthed(false)} className="w-full text-gray-400 hover:text-white text-xs flex items-center gap-2 px-4 py-2 transition">
            <LogIn size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex" style={{ background: "#1A2744", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        {navItems.map((item) => (
          <button key={item.id} onClick={() => setTab(item.id)}
            className="flex-1 flex flex-col items-center py-2 text-xs gap-1 transition"
            style={{ color: tab === item.id ? "#E8A020" : "#9CA3AF" }}>
            {item.icon}<span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20 lg:pb-0">
        <div className="p-6 max-w-5xl mx-auto">

          {/* DASHBOARD */}
          {tab === "dashboard" && (
            <div>
              <h1 className="font-display text-2xl font-bold mb-6" style={{ color: "#1A2744" }}>Dashboard</h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total Jobs", value: jobs.length, icon: <Briefcase size={20} />, bg: "#EFF6FF", color: "#1D4ED8" },
                  { label: "Active Events", value: activities.length, icon: <Calendar size={20} />, bg: "#F0FDF4", color: "#15803D" },
                  { label: "Featured Jobs", value: jobs.filter(j => j.featured).length, icon: <TrendingUp size={20} />, bg: "#FEFCE8", color: "#92620A" },
                  { label: "Total Registered", value: activities.reduce((s, a) => s + a.registered, 0), icon: <Users size={20} />, bg: "#F5F3FF", color: "#6D28D9" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                    <p className="font-display text-2xl font-bold" style={{ color: "#1A2744" }}>{s.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-5 mb-5" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: "#1A2744" }}><Briefcase size={16} /> Recent Jobs</h3>
                <div className="space-y-3">
                  {jobs.slice(0, 4).map((j) => (
                    <div key={j.id} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "#F9FAFB" }}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{j.logo}</span>
                        <div>
                          <p className="font-semibold text-sm" style={{ color: "#1A2744" }}>{j.title}</p>
                          <p className="text-gray-400 text-xs">{j.company} · {j.type}</p>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full" style={j.featured ? { background: "#FEF9C3", color: "#92620A" } : { background: "#F3F4F6", color: "#6B7280" }}>
                        {j.featured ? "Featured" : "Standard"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: "#1A2744" }}><Calendar size={16} /> Upcoming Events</h3>
                <div className="space-y-3">
                  {activities.slice(0, 3).map((a) => (
                    <div key={a.id} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "#F9FAFB" }}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{a.image}</span>
                        <div>
                          <p className="font-semibold text-sm" style={{ color: "#1A2744" }}>{a.title}</p>
                          <p className="text-gray-400 text-xs">{a.date} · {a.type}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{a.registered}/{a.capacity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* JOBS */}
          {tab === "jobs" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-display text-2xl font-bold" style={{ color: "#1A2744" }}>Manage Jobs</h1>
                <button onClick={() => setShowJobForm(true)} className="text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition" style={{ background: "#D63B3B" }}>
                  <Plus size={16} /> Add Job
                </button>
              </div>
              <div className="space-y-3">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl p-5 flex items-center justify-between gap-4 border border-gray-100" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{job.logo}</span>
                      <div>
                        <p className="font-bold" style={{ color: "#1A2744" }}>{job.title}</p>
                        <p className="text-gray-500 text-sm">{job.company} · <span style={{ color: "#1D4ED8" }}>{job.type}</span></p>
                        <p className="text-xs font-medium mt-0.5" style={{ color: "#15803D" }}>{job.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {job.featured && <span className="text-xs px-2 py-1 rounded-full" style={{ background: "#FEF9C3", color: "#92620A" }}>Featured</span>}
                      <button onClick={() => setEditingJob(job)} className="w-9 h-9 rounded-lg flex items-center justify-center transition" style={{ background: "#EFF6FF", color: "#1D4ED8" }}>
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => deleteJob(job.id)} className="w-9 h-9 rounded-lg flex items-center justify-center transition" style={{ background: "#FEF2F2", color: "#D63B3B" }}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACTIVITIES */}
          {tab === "activities" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-display text-2xl font-bold" style={{ color: "#1A2744" }}>Manage Activities</h1>
                <button onClick={() => setShowActivityForm(true)} className="text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition" style={{ background: "#28B4C8" }}>
                  <Plus size={16} /> Add Event
                </button>
              </div>
              <div className="space-y-3">
                {activities.map((act) => (
                  <div key={act.id} className="bg-white rounded-2xl p-5 flex items-center justify-between gap-4 border border-gray-100" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{act.image}</span>
                      <div>
                        <p className="font-bold" style={{ color: "#1A2744" }}>{act.title}</p>
                        <p className="text-gray-500 text-sm">{act.date} · <span style={{ color: "#28B4C8" }}>{act.type}</span></p>
                        <p className="text-gray-400 text-xs mt-0.5">{act.registered}/{act.capacity} registered</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {act.featured && <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(40,180,200,0.1)", color: "#28B4C8" }}>Featured</span>}
                      <button onClick={() => setEditingActivity(act)} className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#EFF6FF", color: "#1D4ED8" }}>
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => deleteActivity(act.id)} className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#FEF2F2", color: "#D63B3B" }}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTENT */}
          {tab === "content" && (
            <div>
              <h1 className="font-display text-2xl font-bold mb-6" style={{ color: "#1A2744" }}>Site Content</h1>
              <div className="bg-white rounded-2xl p-6 space-y-5" style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}>
                {[
                  { label: "Hero Title", key: "heroTitle" },
                  { label: "Hero Subtitle", key: "heroSubtitle", textarea: true, rows: 3 },
                  { label: "About Text", key: "aboutText", textarea: true, rows: 4 },
                  { label: "Contact Email", key: "contactEmail" },
                  { label: "Contact Phone", key: "contactPhone" },
                  { label: "Address", key: "address" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-xs text-gray-500 font-medium mb-1 block">{f.label}</label>
                    {f.textarea ? (
                      <textarea rows={f.rows} value={(content as unknown as Record<string, string>)[f.key]}
                        onChange={(e) => setContent({ ...content, [f.key]: e.target.value })}
                        className={inputCls + " resize-none"} />
                    ) : (
                      <input value={(content as unknown as Record<string, string>)[f.key]}
                        onChange={(e) => setContent({ ...content, [f.key]: e.target.value })}
                        className={inputCls} />
                    )}
                  </div>
                ))}

                <div>
                  <label className="text-xs text-gray-500 font-medium mb-3 block">Homepage Stats</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {content.stats.map((s, i) => (
                      <div key={i} className="flex gap-2">
                        <input value={s.value} onChange={(e) => { const st = [...content.stats]; st[i] = { ...s, value: e.target.value }; setContent({ ...content, stats: st }); }}
                          placeholder="Value" className="w-24 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none" />
                        <input value={s.label} onChange={(e) => { const st = [...content.stats]; st[i] = { ...s, label: e.target.value }; setContent({ ...content, stats: st }); }}
                          placeholder="Label" className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none" />
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={saveContent} className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all text-white" style={{ background: saved ? "#16A34A" : "#1A2744" }}>
                  <Save size={16} /> {saved ? "Saved!" : "Save Changes"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {(showJobForm || editingJob) && (
        <JobForm job={editingJob || newJob} onChange={(j) => editingJob ? setEditingJob(j as Job) : setNewJob(j)}
          onSave={saveJob} onCancel={() => { setEditingJob(null); setShowJobForm(false); setNewJob({ type: "Full-time", featured: false, requirements: [], logo: "💼" }); }} />
      )}
      {(showActivityForm || editingActivity) && (
        <ActivityForm act={editingActivity || newActivity} onChange={(a) => editingActivity ? setEditingActivity(a as Activity) : setNewActivity(a)}
          onSave={saveActivity} onCancel={() => { setEditingActivity(null); setShowActivityForm(false); setNewActivity({ type: "Workshop", featured: false, image: "📅" }); }} />
      )}
    </div>
  );
}
