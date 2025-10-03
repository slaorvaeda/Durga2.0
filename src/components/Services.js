"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

export default function Services({ servicesRef }) {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  const cards = [
    {
      title: "UI/ UDesign",
      image: "/1.png", // Replace with your actual image path
      img1:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsg9FmxrbL_cyY1DTkg4DZY7g9cL4RLOs766qhiBry9myIi6a8wHKQIBFBDkItSz75_4M&usqp=CAU",
      alt: "UI/UX Design Example"
    },
    {
      title: "DevOps",
      image: "2.png", // Replace with your actual image path
      img1:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      img2:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      alt: "UI/UX "
    },
    {
      title: "Problem Solver",
      image: "/3.png", // Replace with your actual image path
      img1:"/python.png",
      img2:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "UI/UX Design Example"
    }, {
      title: "Freelancer",
      image: "/service1.png", // Replace with your actual image path
      img1:"https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224",
      img2:"https://www.pngfind.com/pngs/m/281-2810396_slack-slack-new-logo-png-transparent-png.png",
      alt: "UI/UX Design Example"
    },
    {
      title: "SDE",
      image: "/service2.png", // Replace with your actual image path
      img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ_CU3a6muH84mLfoP6xmM4ZJ9Z6RAXMmdA&s",
      img2:"https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png",
      alt: "UI/UX Design Example"
    },
    {
      title: "Entrepreneur",
      image: "/service3.png", // Replace with your actual image path
      img1:"data:image/png;base64,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",
      img2:"https://www.vhv.rs/dpng/d/164-1641253_google-cloud-logo-hd-png-download.png",
      alt: "UI/UX Design Example"
    }
  ];

  // Add tool icons for each card
  const toolIcons = [
    [ // UI/UX Design
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg"
    ],
    [ // DevOps
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
    ],
    [ // Problem Solver
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
    ],
    [ // Freelancer
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224",
      "https://www.pngfind.com/pngs/m/281-2810396_slack-slack-new-logo-png-transparent-png.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/asana/asana-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zoom/zoom-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dropbox/dropbox-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/skype/skype-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    ],
    [ // SDE
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    ],
    [ // Entrepreneur
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mailchimp/mailchimp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg"
    ]
  ];

  return (
    <section ref={servicesRef} className="flex justify-center items-center relative bg-[url('/service-bg.jpg')] bg-[#9b9b9bb5] bg-blend-multiply  bg-cover bg-center min-h-screen" data-aos="fade-up">
      <div className=" mx-auto">
        <h2 className="text-5xl font-bold mb-2"><span className="text-orange-400">My Services</span></h2>
        <p className="text-gray-300 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales lorem30</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-black/80 rounded-2xl p-6 shadow-lg relative overflow-hidden group md:h-60 md:w-80 hover:scale-105 transition-all duration-300" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <div className="flex gap-2 mb-4">
                <div className="w-20 h-20  rounded-lg" >
                    <Image width={80} height={80} src={card.img1} alt={card.alt} className="w-full h-full object-cover rounded-lg" onError={e => { e.target.onerror = null; e.target.src = '/globe.svg'; }} />
                    </div>
                <div className="w-20 h-20  rounded-lg" >
                    <Image width={80} height={80}  src={card.img2} alt={card.alt} className="w-full h-full object-cover rounded-lg" onError={e => { e.target.onerror = null; e.target.src = '/globe.svg'; }} />
                    </div>
              </div>
              <button
                className="absolute h-16 w-16 bottom-0 right-0 bg-orange-400 text-black rounded-full p-3 shadow-lg flex items-center justify-center text-xl hover:-rotate-45 "
                onClick={() => setOpenIdx(idx)}
                aria-label="Show Tools"
              >
                →
              </button>
            </div>
          ))}
        </div>
        {/* Modal for tools */}
        {openIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadein">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-orange-400 text-2xl font-bold"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">{cards[openIdx].title}</h3>
              <div className="grid grid-cols-5 gap-4 mb-2">
                {toolIcons[openIdx].map((icon, i) => (
                  <Image width={48} height={48} key={i} src={icon} alt="tool" className="w-12 h-12 object-contain rounded-lg border border-gray-200" />
                ))}
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
        )}
      </div>
    </section>
  );
}
