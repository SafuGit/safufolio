"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useRef, useEffect } from "react";

interface ProfileCardProps {
  avatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
}

const ProfileCard = ({
  avatarUrl = "/avatar.png",
  name = "Safwan Sadid",
  title = "Software Engineer",
  handle = "safugit",
  status = "Online",
  contactText = "Visit Github",
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
}: ProfileCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  useEffect(() => {
    if (!cardRef.current || !enableTilt) return;

    const card = cardRef.current;

    const rotateX = ((mousePosition.y - 50) / 50) * -8;
    const rotateY = ((mousePosition.x - 50) / 50) * 8;

    if (isHovered) {
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    } else {
      card.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
    }
  }, [mousePosition, isHovered, enableTilt]);

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-sm aspect-[0.7] rounded-3xl transition-all duration-500 ease-out glow-primary"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, 
              rgba(163, 230, 53, 0.08) 0%, 
              rgba(132, 204, 22, 0.05) 25%,
              transparent 50%
            ),
            linear-gradient(135deg, 
              #131a24 0%, 
              #0f172a 50%, 
              #1e293b 100%
            )
          `,
          boxShadow: isHovered
            ? "0 0 60px rgba(163, 230, 53, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "0 0 30px rgba(163, 230, 53, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-between p-8">
          {/* Avatar */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div style={{ transform: "translateZ(40px)" }}>
              <div
                className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-primary/30 transition-all duration-300"
                style={{
                  boxShadow: "0 0 30px rgba(163, 230, 53, 0.2)",
                }}
              >
                <img
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div
            className="w-full space-y-4"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-medium bg-linear-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
                {name}
              </h2>
              <p className="text-lg text-text-muted">{title}</p>
            </div>

            {showUserInfo && (
              <div className="space-y-4">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-surface/50 border border-border backdrop-blur-sm">
                  <span className="text-sm text-accent font-light">
                    @{handle}
                  </span>
                  <span className="text-xs text-text-muted">{status}</span>
                </div>

                <button
                  onClick={onContactClick}
                  className="w-full py-3 px-6 rounded-xl font-light text-main transition-all duration-300 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #84cc16, #a3e635)",
                  }}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;