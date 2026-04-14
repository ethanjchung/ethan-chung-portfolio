// ============================================================
// Portfolio Data — Ethan Chung
// UBC Second-Year Student Portfolio
// ============================================================

export const HERO_DATA = {
  name: "Ethan Chung",
  title: "CS Student @ UBC",
  tagline: "Learning to build things. Currently exploring Python, C++, and Java.",
  location: "Vancouver, BC",
  githubUrl: "https://github.com/ethanjchung",
  linkedinUrl: "https://linkedin.com/in/ethanchung",
  twitterUrl: "https://twitter.com/ethanchung",
  email: "ethanchung2929@gmail.com",
  resumeUrl: "#",
  available: true,
};

export const TECH_STACK = [
  { name: "Python", icon: "python" },
  { name: "C++", icon: "node" },
  { name: "Java", icon: "react" },
  { name: "JSON", icon: "docker" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Study Tracker Application",
    description: "A Study Tracker to track how long you study each day with stats such as subject, duration, time, and location. Battle on the leaderboard against others!",
    tags: ["Python", "Learning", "Productivity"],
    liveUrl: null,
    repoUrl: "https://github.com/ethanjchung/study-tracker",
    featured: true,
    status: "Learning",
  },
  {
    id: 2,
    title: "Java Console App",
    description: "A command-line application built in Java to practice OOP concepts and basic algorithms.",
    tags: ["Java", "OOP"],
    liveUrl: null,
    repoUrl: "https://github.com/ethanjchung",
    featured: true,
    status: "Learning",
  },
  {
    id: 3,
    title: "C++ Data Structures",
    description: "Implementing common data structures (linked lists, trees, graphs) in C++ as part of coursework.",
    tags: ["C++", "Algorithms"],
    liveUrl: null,
    repoUrl: "https://github.com/ethanjchung",
    featured: false,
    status: "In Progress",
  },
  {
    id: 4,
    title: "Python Utilities",
    description: "Small utility scripts in Python for automating tasks and learning the language.",
    tags: ["Python", "Scripting"],
    liveUrl: null,
    repoUrl: "https://github.com/ethanjchung",
    featured: false,
    status: "Learning",
  },
];

export const SKILLS_CATEGORIES = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 65 },
      { name: "Java", level: 55 },
      { name: "C++", level: 50 },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOP", level: 60 },
      { name: "Data Structures", level: 55 },
      { name: "Algorithms", level: 50 },
    ],
  },
];

export const OPEN_SOURCE = [
  {
    project: "Learning",
    contribution: "Exploring open-source projects and contributing to learning communities",
    prUrl: "https://github.com/ethanjchung",
    merged: false,
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Getting Started with Python",
    excerpt: "My journey learning Python and why I think it's a great first language for CS students.",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["Python", "Learning"],
    slug: "getting-started-python",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding OOP in Java",
    excerpt: "Breaking down object-oriented programming concepts through Java examples and practical exercises.",
    date: "2024-02-08",
    readTime: "7 min read",
    tags: ["Java", "OOP"],
    slug: "oop-java",
    featured: true,
  },
];
