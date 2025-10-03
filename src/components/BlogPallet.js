import React from "react";

export default function BlogPallet({ post, onClose }) {
  if (!post) return null;
  // Dummy data for descriptions and recommendations/tags
  const dummyDescriptions = [
    "This blog post explores the latest trends in UI/UX design, offering practical tips and insights for designers.",
    "Discover how Sugee revolutionizes loan management for rural sectors, with a focus on accessibility and impact.",
    "Cinetrade introduces a new way to invest in digital media, blending technology and creativity for modern investors."
  ];
  const dummyRecommendations = [
    "Design", "Productivity", "Innovation", "Tech", "UI/UX", "App Design"
  ];
  // Pick description based on post index (if available)
  let desc = post.desc;
  if (post.title && post.title.includes("Design Unraveled")) desc = dummyDescriptions[0];
  else if (post.title && post.title.includes("Sugee")) desc = dummyDescriptions[1];
  else if (post.title && post.title.includes("Cinetrade")) desc = dummyDescriptions[2];

  const recommendations = post.recommendations || dummyRecommendations;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadein">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-orange-400 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <img src={post.image} alt={post.title} className="rounded-xl w-full mb-4" />
        <div className="flex gap-2 items-center mb-2">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{post.tag}</span>
          <span className="text-xs text-gray-400">• {post.author}</span>
          <span className="text-xs text-gray-400">• {post.date}</span>
        </div>
        <h3 className="text-xl font-bold text-orange-400 mb-2">{post.title}</h3>
        <p className="text-gray-700 text-base mb-2">{desc}</p>
        {/* Recommendations/Tags */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Recommended Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {recommendations.map(tag => (
              <span key={tag} className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fadein {
          animation: fadein 0.3s ease;
        }
        @keyframes fadein {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
