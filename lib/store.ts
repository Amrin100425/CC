// Shared in-memory data store (in production, use a database)
export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  category: string;
  description: string;
  requirements: string[];
  salary: string;
  deadline: string;
  postedDate: string;
  featured: boolean;
  logo: string;
};

export type Activity = {
  id: string;
  title: string;
  type: "Workshop" | "Career Fair" | "Seminar" | "Training" | "Networking";
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  registered: number;
  image: string;
  featured: boolean;
};

export type SiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  stats: { label: string; value: string }[];
  contactEmail: string;
  contactPhone: string;
  address: string;
};

export const defaultJobs: Job[] = [
  {
    id: "1",
    title: "Hotel Operations Manager",
    company: "Anantara Angkor Resort",
    location: "Siem Reap",
    type: "Full-time",
    category: "Hospitality",
    description: "Lead daily hotel operations ensuring exceptional guest experiences at one of Siem Reap's premier luxury resorts. Oversee front desk, housekeeping, and F&B teams.",
    requirements: ["5+ years hotel management experience", "English & Khmer fluency", "Leadership skills", "Knowledge of PMS systems"],
    salary: "$800 – $1,200/month",
    deadline: "2025-08-15",
    postedDate: "2025-07-01",
    featured: true,
    logo: "🏨",
  },
  {
    id: "2",
    title: "Tour Guide (English/Chinese)",
    company: "Angkor Heritage Tours",
    location: "Siem Reap",
    type: "Full-time",
    category: "Tourism",
    description: "Share the wonders of Angkor Wat and Siem Reap's cultural heritage with international visitors. Conduct engaging tours in English and/or Mandarin Chinese.",
    requirements: ["Licensed tour guide certification", "Fluent English or Mandarin", "History knowledge", "Excellent communication"],
    salary: "$400 – $700/month + tips",
    deadline: "2025-07-30",
    postedDate: "2025-06-28",
    featured: true,
    logo: "🗺️",
  },
  {
    id: "3",
    title: "Web Developer",
    company: "Mekong Tech Solutions",
    location: "Siem Reap",
    type: "Full-time",
    category: "Technology",
    description: "Build and maintain web applications for local and international clients. Work with React, Node.js, and modern cloud infrastructure.",
    requirements: ["React/Next.js experience", "Node.js backend skills", "1+ years experience", "Portfolio required"],
    salary: "$500 – $900/month",
    deadline: "2025-08-01",
    postedDate: "2025-06-25",
    featured: false,
    logo: "💻",
  },
  {
    id: "4",
    title: "Marketing Coordinator",
    company: "Siemreap Food & Beverage Co.",
    location: "Siem Reap",
    type: "Full-time",
    category: "Marketing",
    description: "Develop and execute marketing strategies for our restaurant group. Manage social media, coordinate events, and build brand awareness in Siem Reap.",
    requirements: ["Marketing degree or equivalent", "Social media expertise", "Creative mindset", "Khmer & English required"],
    salary: "$350 – $550/month",
    deadline: "2025-07-25",
    postedDate: "2025-06-22",
    featured: false,
    logo: "📣",
  },
  {
    id: "5",
    title: "Accounting Intern",
    company: "Phnom Penh Commercial Bank – SR Branch",
    location: "Siem Reap",
    type: "Internship",
    category: "Finance",
    description: "Gain hands-on accounting experience in a reputable banking environment. Assist with bookkeeping, financial reporting, and client account management.",
    requirements: ["Accounting/Finance student", "Basic Excel skills", "Attention to detail", "Honest and punctual"],
    salary: "$150 – $200/month stipend",
    deadline: "2025-07-20",
    postedDate: "2025-06-20",
    featured: false,
    logo: "🏦",
  },
  {
    id: "6",
    title: "Spa Therapist",
    company: "Secrets of Elephants Spa",
    location: "Siem Reap",
    type: "Full-time",
    category: "Wellness",
    description: "Provide traditional Khmer massage and modern spa treatments to resort guests. Full training provided for certified candidates.",
    requirements: ["Spa/massage certification", "Customer service skills", "Attention to hygiene", "English communication"],
    salary: "$300 – $500/month + gratuities",
    deadline: "2025-08-10",
    postedDate: "2025-06-18",
    featured: false,
    logo: "💆",
  },
];

export const defaultActivities: Activity[] = [
  {
    id: "1",
    title: "Career Fair 2025 – Hospitality & Tourism",
    type: "Career Fair",
    date: "2025-07-20",
    time: "9:00 AM – 4:00 PM",
    location: "Angkor Century Resort, Siem Reap",
    description: "Meet 30+ top employers from Siem Reap's hospitality and tourism sector. Bring your CV and dress professionally. On-the-spot interviews available.",
    capacity: 500,
    registered: 312,
    image: "🎪",
    featured: true,
  },
  {
    id: "2",
    title: "CV Writing & Interview Skills Workshop",
    type: "Workshop",
    date: "2025-07-12",
    time: "2:00 PM – 5:00 PM",
    location: "USEA Career Center, Siem Reap",
    description: "A hands-on workshop covering how to craft a compelling CV, write cover letters, and ace interviews. Limited seats — register now!",
    capacity: 40,
    registered: 34,
    image: "📝",
    featured: true,
  },
  {
    id: "3",
    title: "Digital Marketing for Small Business",
    type: "Training",
    date: "2025-07-18",
    time: "8:30 AM – 12:00 PM",
    location: "USEA Career Center, Siem Reap",
    description: "Learn how to grow your business with Facebook, Instagram, and TikTok marketing. Free for registered USEA members.",
    capacity: 30,
    registered: 22,
    image: "📱",
    featured: false,
  },
  {
    id: "4",
    title: "Entrepreneurship Seminar: Starting a Business in Cambodia",
    type: "Seminar",
    date: "2025-07-25",
    time: "10:00 AM – 12:00 PM",
    location: "Online (Zoom)",
    description: "Expert panel discussing legal registration, funding, and market opportunities for entrepreneurs in Siem Reap and beyond.",
    capacity: 200,
    registered: 87,
    image: "🚀",
    featured: false,
  },
  {
    id: "5",
    title: "Young Professionals Networking Night",
    type: "Networking",
    date: "2025-08-02",
    time: "6:00 PM – 9:00 PM",
    location: "The Hive Coworking, Siem Reap",
    description: "Connect with professionals under 35 in Siem Reap. Light refreshments provided. Grow your network and discover new opportunities.",
    capacity: 80,
    registered: 45,
    image: "🤝",
    featured: false,
  },
];

export const defaultContent: SiteContent = {
  heroTitle: "Your Career Starts Here",
  heroSubtitle: "USEA Career Center connects talented Cambodians with top employers across Siem Reap and beyond. Find jobs, grow skills, and build your future.",
  aboutText: "USEA Career Center is Siem Reap's leading employment and professional development hub. Founded to bridge the gap between local talent and employers, we offer job placement services, career counseling, skills training, and employer partnerships. Located in the heart of Siem Reap, we serve job seekers from all backgrounds and industries.",
  stats: [
    { label: "Jobs Posted", value: "500+" },
    { label: "Employers Partnered", value: "120+" },
    { label: "Job Seekers Placed", value: "1,800+" },
    { label: "Training Programs", value: "30+" },
  ],
  contactEmail: "info@useacareercenter.edu.kh",
  contactPhone: "+855 16 736 214" + ", " + "+855 67 536 769",
  address: "7 Makara St, Sala Kamroeuk, Siem Reap, Cambodia",
};
