"use client";
import Image from "next/image";
import bg from "@/photos/Careercenter.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  ArrowRight,
  Star,
  ChevronRight,
  Users,
} from "lucide-react";
import { defaultJobs, defaultActivities, defaultContent, defaultPhotos } from "@/lib/store";

export default function HomePage() {
  const featuredJobs = defaultJobs.filter((j) => j.featured);
  const featuredActivities = defaultActivities.filter((a) => a.featured);
  const featuredPhotos = defaultPhotos.filter((p) => p.featured);
  const content = defaultContent;

  const categories = [
    {
      name: "Hospitality",
      icon: "🏨",
      count: 45,
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    {
      name: "Tourism",
      icon: "🗺️",
      count: 38,
      bg: "#ECFEFF",
      border: "#A5F3FC",
    },
    {
      name: "Technology",
      icon: "💻",
      count: 22,
      bg: "#F5F3FF",
      border: "#DDD6FE",
    },
    {
      name: "Finance",
      icon: "💰",
      count: 19,
      bg: "#F0FDF4",
      border: "#BBF7D0",
    },
    {
      name: "Marketing",
      icon: "📣",
      count: 17,
      bg: "#FFF7ED",
      border: "#FED7AA",
    },
    {
      name: "Education",
      icon: "📚",
      count: 14,
      bg: "#FEFCE8",
      border: "#FEF08A",
    },
    {
      name: "Healthcare",
      icon: "⚕️",
      count: 11,
      bg: "#FEF2F2",
      border: "#FECACA",
    },
    { name: "Retail", icon: "🛍️", count: 9, bg: "#FDF4FF", border: "#F0ABFC" },
  ];

  return (
    <div>
      {/* HERO */}
      <section>
        <div />
        <div />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl ">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  x: ["100%", "-100%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 flex"
              >
                {/* Image 1 */}
                <div className="relative min-w-full h-full">
                  <Image src={bg} alt="" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
            {/* <div>
              <MapPin size={13} style={{ color: "#28B4C8" }} />
              <span
                className="text-xs font-medium"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Siem Reap, Cambodia
              </span>
            </div> */}

            <div>
              <div>
                {/* <Search size={18} className="text-gray-400 shrink-0" /> */}
                {/* <input
                  type="text"
                  placeholder="Job title, keyword or company..."
                  className="w-full text-gray-700 text-sm outline-none bg-transparent placeholder-gray-400"
                /> */}
              </div>
              {/* <div className="flex items-center gap-3 px-4 py-2 border-t sm:border-t-0 sm:border-l border-gray-200">
                <MapPin size={18} className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Siem Reap"
                  className="w-full text-gray-700 text-sm outline-none bg-transparent placeholder-gray-400"
                />
              </div> */}
              {/* <Link
                href="/jobs"
                className="text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ background: "#D63B3B" }}
              >
                <Search size={16} /> Search Jobs
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-5"> */}
              {/* <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Popular: */}
              {/* </span>
              {[
                "Hotel Manager",
                "Tour Guide",
                "IT Developer",
                "Accountant",
                "Teacher",
              ].map((t) => (
                <Link
                  key={t}
                  href={`/jobs?q=${t}`}
                  className="text-xs rounded-full px-3 py-1 transition"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {t}
                </Link> */}
              {/* ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1A2744 0%, #2A3F6F 50%, #1A2744 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2"
          style={{ background: "rgba(40,180,200,0.10)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full translate-y-1/2 -translate-x-1/2"
          style={{ background: "rgba(232,160,32,0.10)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <MapPin size={13} style={{ color: "#28B4C8" }} />
              <span
                className="text-xs font-medium"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                University of South-East Asia (USEA), Siem Reap, Cambodia
              </span>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
                className="text-6xl font-bold text-white whitespace-nowrap"
              >
                {/* <span style={{ color: "#ffffff" }}>Your</span>{" "}
                <span style={{ color: "#ffffff" }}>Career</span>{" "}
                <span style={{ color: "#ffffff" }}>Starts</span>{" "}
                <span style={{ color: "#ffffff" }}>Here</span> */}
                Your Career Starts Here
              </motion.h1>
            </div>
            <p
              className="text-lg leading-relaxed mb-10 max-w-2xl"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {content.heroSubtitle}
            </p>
            <div>
              <div></div>
              {/* <div className="flex items-center gap-3 px-4 py-2 border-t sm:border-t-0 sm:border-l border-gray-200"></div> */}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {/* {[
                "Hotel Manager",
                "Tour Guide",
                "IT Developer",
                "Accountant",
                "Teacher",
              ].map((t) => (
                <Link
                  key={t}
                  href={`/jobs?q=${t}`}
                  className="text-xs rounded-full px-3 py-1 transition"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {t}
                </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      {/* FEATURED JOBS */}
      <section className="py-16" style={{ background: "#F0EDE8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#D63B3B" }}
              >
                Don&apos;t Miss Out
              </p>
              <h2
                className="font-display text-3xl font-bold"
                style={{ color: "#1A2744" }}
              >
                CAREER CENTER
              </h2>
            </div>
            <Link
              href="/jobs"
              className="hidden sm:flex items-center gap-1 text-sm font-medium"
              style={{ color: "#1A2744" }}
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPhotos.map(ph => (
              <motion.div
                key={ph.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4 cursor-pointer"
                style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}
              >
                <Image
                  src={ph.heroImg}
                  alt="USEA Career Center"
                  width={250}
                  height={210}
                  className="rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">{ph.heroSubtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{ph.articles}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-xl font-semibold transition-all"
              style={{ background: "#1A2744" }}
            >
              Explore All Jobs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#28B4C8" }}
            >
              Grow Your Skills
            </p>
            <h2
              className="font-display text-3xl font-bold"
              style={{ color: "#1A2744" }}
            >
              Upcoming Activities
            </h2>
          </div>
          <Link
            href="/activities"
            className="hidden sm:flex items-center gap-1 text-sm font-medium"
            style={{ color: "#1A2744" }}
          >
            All Events <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 group flex transition-all"
              style={{ boxShadow: "0 4px 24px rgba(26,39,68,0.10)" }}
            >
              <div
                className="w-24 flex-shrink-0 flex flex-col items-center justify-center p-4"
                style={{ background: "#1A2744" }}
              >
                <span className="text-3xl">{act.image}</span>
                <div className="mt-3 text-center">
                  <p
                    className="text-xs font-bold uppercase"
                    style={{ color: "#E8A020" }}
                  >
                    {new Date(act.date).toLocaleString("en-US", {
                      month: "short",
                    })}
                  </p>
                  <p className="text-white font-bold text-2xl">
                    {new Date(act.date).getDate()}
                  </p>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-center">
                <span
                  className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 w-fit"
                  style={{
                    background: "rgba(40,180,200,0.1)",
                    color: "#28B4C8",
                  }}
                >
                  {act.type}
                </span>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: "#1A2744" }}
                >
                  {act.title}
                </h3>
                <p className="text-gray-500 text-xs mb-3">
                  {act.time} · {act.location}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Users size={12} className="text-gray-400" />
                    <span className="text-xs text-gray-400">
                      {act.registered}/{act.capacity} registered
                    </span>
                  </div>
                  <Link
                    href={`/activities/${act.id}`}
                    className="text-xs font-semibold hover:underline"
                    style={{ color: "#28B4C8" }}
                  >
                    Register →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            style={{ background: "#28B4C8" }}
          >
            View All Events <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4" style={{ background: "#D63B3B" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Are You an Employer in Siem Reap?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Post your job openings and reach thousands of qualified candidates.
            Partner with USEA Career Center today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admin"
              className="bg-white px-8 py-3 rounded-xl font-bold transition-all"
              style={{ color: "#D63B3B" }}
            >
              Post a Job
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white px-8 py-3 rounded-xl font-bold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
