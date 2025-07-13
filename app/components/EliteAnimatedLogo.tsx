"use client";

import { useEffect, useRef, useState } from "react";

const EliteAnimatedLogo = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      ref={logoRef}
      width="100%"
      viewBox="0 0 600 120"
      className="h-14 md:h-16 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gold gradient definition */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FDB813" />
          <stop offset="50%" stopColor="#FFAA00" />
          <stop offset="100%" stopColor="#FDB813" />
        </linearGradient>

        {/* Glow effect */}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Animated background elements */}
      <rect
        x="10"
        y="10"
        width="580"
        height="100"
        rx="15"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeDasharray="600 120"
        strokeDashoffset={animationStep === 0 ? 0 : 720}
        style={{
          transition: "all 1.5s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      />

      {/* Main text */}
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="800"
        fontSize="52"
        fill="url(#goldGradient)"
      >
        <tspan
          style={{
            opacity: animationStep >= 0 ? 1 : 0.3,
            filter: animationStep >= 0 ? "url(#glow)" : "none",
            transition: "all 0.8s ease-out",
          }}
        >
          LAGOS
        </tspan>
        <tspan
          dx="10"
          style={{
            opacity: animationStep >= 1 ? 1 : 0.3,
            filter: animationStep >= 1 ? "url(#glow)" : "none",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          DRIVERS
        </tspan>
        <tspan
          dx="10"
          fill="#ffffff"
          style={{
            opacity: animationStep >= 2 ? 1 : 0.3,
            transition: "all 0.8s ease-out 0.4s",
          }}
        >
          LINK
        </tspan>
      </text>

      {/* Animated car icon */}
      <g transform={`translate(${animationStep * 150 - 50}, 0)`}>
        <path
          d="M100,80 L120,80 L130,70 L150,70 L160,80 L180,80 L180,90 L170,100 L110,100 L100,90 Z"
          fill="url(#goldGradient)"
          style={{
            transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <circle cx="120" cy="105" r="8" fill="#111" />
        <circle cx="160" cy="105" r="8" fill="#111" />
        <path
          d="M130,70 L150,70 L160,80 L120,80 Z"
          fill="#ffffff"
          fillOpacity="0.2"
        />
      </g>

      {/* Decorative elements */}
      <path
        d="M50,30 L70,10"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeDasharray="30"
        strokeDashoffset={animationStep * 30}
        style={{
          transition: "all 1s ease-in-out",
        }}
      />
      <path
        d="M550,30 L530,10"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeDasharray="30"
        strokeDashoffset={animationStep * 30}
        style={{
          transition: "all 1s ease-in-out 0.5s",
        }}
      />
    </svg>
  );
};

export default EliteAnimatedLogo;
