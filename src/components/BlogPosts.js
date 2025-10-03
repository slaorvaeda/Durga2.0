import { useEffect, useState } from "react";
import BlogPallet from "./BlogPallet";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function BlogPosts() {
  const [openPost, setOpenPost] = useState(null);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    AOS.init({ once: true, duration: 2000 });
  }, []);
  const blogData = [
    {
      image: "/1.png",
      tag: "UI/UX Design",
      author: "Durga Nayak",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic ",
      desc: "A deep dive into the creative process and technical skills behind modern UI/UX design. ",
      recommendations: ["Design", "UI/UX", "Creativity"],
    },
    {
      image: "/1.png",
      tag: "App Design",
      author: "Durga Nayak",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector.",
      desc: "How Sugee is transforming loan management for rural communities.",
      recommendations: ["App Design", "Finance", "Rural"],
    },
    {
      image: "/1.png",
      tag: "App Design",
      author: "Durga Nayak",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media",
      desc: "Cinetrade brings a new approach to digital media investment.",
      recommendations: ["Media", "Investment", "Tech"],
    },
    {
      image: "/1.png",
      tag: "Productivity",
      author: "Durga Nayak",
      date: "22 Jul, 2023",
      title: "Boosting Productivity with Design Systems",
      desc: "Learn how design systems can streamline your workflow and boost productivity.",
      recommendations: ["Productivity", "Design Systems", "Workflow"],
    },
    {
      image: "/1.png",
      tag: "Innovation",
      author: "Durga Nayak",
      date: "05 Jun, 2023",
      title: "Innovation in Mobile App Experiences",
      desc: "Exploring the latest innovations in mobile app user experiences.",
      recommendations: ["Innovation", "Mobile", "UX"],
    },
    {
      image: "/1.png",
      tag: "Tech",
      author: "Durga Nayak",
      date: "18 May, 2023",
      title: "Tech Trends Shaping 2025",
      desc: "A look at the technology trends that will shape the future.",
      recommendations: ["Tech", "Trends", "Future"],
    },
    {
      image: "/1.png",
      tag: "UI/UX",
      author: "Durga Nayak",
      date: "02 Apr, 2023",
      title: "Mastering Microinteractions in UI",
      desc: "Tips and tricks for creating delightful microinteractions in your UI designs.",
      recommendations: ["UI/UX", "Microinteractions", "Tips"],
    },
  ];
  return (
  <section className="bg-white py-12 px-4" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">From my <span className="text-orange-400">blog post</span></h2>
          <button
            className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition"
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? "Close" : "See All"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(showAll ? blogData : blogData.slice(0, 3)).map((post, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4 relative flex flex-col gap-4">
              <div className="relative">
                <Image width={500} height={300} src={post.image} alt={post.title} className="rounded-xl w-full mb-2" />
                <button
                  className="absolute top-0 right-0 bg-orange-400 text-white rounded-full h-14 w-14 shadow-lg cursor-pointer text-xl text-center m-auto flex justify-center items-center"
                  onClick={() => setOpenPost(post)}
                  aria-label="Open Blog Post"
                >
                  →
                </button>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{post.tag}</span>
                <span className="text-xs text-gray-400">• {post.author}</span>
                <span className="text-xs text-gray-400">• {post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.desc}</p>
            </div>
          ))}
        </div>
        {/* Blog Pallet Modal */}
        <BlogPallet post={openPost} onClose={() => setOpenPost(null)} />
      </div>
    </section>
  );
}
