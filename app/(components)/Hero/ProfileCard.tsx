"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { LiquidGlassCard } from '@/app/(ui-layouts)/LiquidGlassCard';

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
  const [isHovered] = useState(false);

  return (
    <div className="relative w-full max-w-sm aspect-[0.7] rounded-3xl transition-all duration-500 ease-out glow-primary">
      <LiquidGlassCard
        className="absolute inset-0 rounded-3xl overflow-hidden"
        shadowIntensity="sm"
        borderRadius="24px"
        glowIntensity="none"
      >
        <div
          style={{
            boxShadow: '0 0 30px rgba(163, 230, 53, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.3)'
          }}
          className="relative h-full flex flex-col items-center justify-between p-8"
        >
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
      </LiquidGlassCard>
    </div>
  );
};

export default ProfileCard;