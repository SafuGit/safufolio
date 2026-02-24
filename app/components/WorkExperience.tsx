"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: "stepnextgenai",
    company: "StepNextGenAI",
    role: "Full-Stack Developer",
    period: "AUGUST 2025 - DECEMBER 2025",
    meta: "(Internship)",
    thumb: "https://stepnextgenai.com/icon.png",
    detailsHref: "#",
    siteLink: "https://stepnextgenai.com/"
  },
];

export default function WorkExperience() {
  return (
    <section className="bg-black text-white py-24 px-12 font-poppins">
      <motion.h2
        className="text-5xl md:text-6xl font-light uppercase leading-tight"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        WORK
        <br />
        EXPERIENCE
      </motion.h2>

      <div className="mt-12 max-w-6xl">
        {data.map((job, idx) => (
          <div key={job.id} className="mb-12">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <motion.div
                className="shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="w-64 h-40 overflow-hidden border border-white/10">
                  <Image
                    src={job.thumb}
                    alt={`${job.company} thumbnail`}
                    width={800}
                    height={400}
                    className="object-cover w-full h-full grayscale transition-all duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex-1 text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.08 }}
              >
                <div className="flex items-baseline gap-3">
                  <Link href={job.siteLink} className="text-base font-semibold underline underline-offset-4">
                    {job.company}
                  </Link>
                  <span className="text-sm font-light">{job.meta}</span>
                </div>

                <div className="mt-6 text-sm text-white/80 uppercase leading-snug">
                  {job.period}
                  <br />
                  {job.role.toUpperCase()}
                </div>

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.35 + idx * 0.08 }}
                >
                  <Link href={job.detailsHref} className="text-sm font-medium underline">
                    VIEW DETAILS
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
