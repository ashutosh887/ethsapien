"use client";

import appConfig from "@/configs/appConfig";
import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      name: "Email",
      icon: Mail,
      url: appConfig.socials.email,
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: appConfig.socials.telegram,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: appConfig.socials.linkedin,
    },
    {
      name: "GitHub",
      icon: Github,
      url: appConfig.socials.github,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: appConfig.socials.twitter,
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-bold mb-6">Connect with us:</p>
        <div className="flex justify-center space-x-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-200"
            >
              <social.icon className="w-6 h-6 mb-1" />
              <span className="text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
