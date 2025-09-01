"use client";
import React from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  const currentYear = new Date().getFullYear();

  // Array for running text items
  const runningTextItems = [
    "✨ Full Stack Developer ✨",
    "✨ Open to Opportunities ✨",
    "✨ Microcontrollers ✨",
    "✨ Linux Ubuntu ✨",  
    "✨ Let's Build Something Amazing ✨",
    "✨ Hardware & Software ✨", 
    "✨ Embedded System ✨"
  ];

  return (
    <footer className="w-full bg-black pt-8 pb-8">
      {/* Running Text Section */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 py-3 mb-6">
        <div className="animate-marquee whitespace-nowrap">
          {runningTextItems.map((item, index) => (
            <span 
              key={index}
              className={`text-cyan-300 mx-8 text-sm font-medium ${
                index % 2 === 0 ? "text-cyan-300" : "text-purple-300"
              }`}
            >
              {item}
            </span>
          ))}
          {/* Duplicate for seamless looping */}
          {runningTextItems.map((item, index) => (
            <span 
              key={`duplicate-${index}`}
              className={`text-cyan-300 mx-8 text-sm font-medium ${
                index % 2 === 0 ? "text-cyan-300" : "text-purple-300"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="pb-6 justify-center flex">
          {Social_Icons.slice(0, 2).map((social) => (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1] transition-transform duration-300 hover:scale-110 mx-4"
            >
              <Image
                src={social.image}
                height={32}
                width={32}
                alt={social.alt}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
          <p className="text-gray-300 text-sm">Built with ❤️ using</p>
          <Image
              src="/tech-icon/nextjs.svg"
              alt="Next.js"
              width={20}
              height={20}
              className="ml-1"
            />
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} <strong>Anhar Fahrudin</strong>. All rights reserved.
          </p>
        </div>

      {/* Improved CSS for seamless marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
          display: inline-block;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default Footer;