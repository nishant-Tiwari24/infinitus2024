"use client";

import React from "react";
import { CardContainer } from "@/components/sub/RegisterCard";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div className="inter-var flex gap-20 flex-col sm:flex-row">
      <Link href={"https://unstop.com/p/music-fiesta-infinitus-2024-srm-university-srmap-andhra-pradesh-927977"} target="_blank">
        <div>
          <div className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[34rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8">
            <div className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 dark:text-white">
              Registrations for SRMAP University students
            </div>
            <div className="text-neutral-500 text-xl sm:text-2xl mt-2 dark:text-neutral-300">
              Click here to continue
            </div>
            <div className="w-full mt-4">
              <img
                src="/images/reg1.jpeg"
                height="1000"
                width="1000"
                className="h-[40rem] w-full object-cover rounded-xl group-hover/card:shadow-xl hover:scale-105"
                alt="thumbnail"
              />
            </div>
            <div className="flex justify-between items-center mt-20">
              <div className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-3xl font-light">
                Register
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"https://unstop.com/p/music-fiesta-infinitus-2024-srm-university-srmap-andhra-pradesh-927977"} target="_blank">
        <div>
          <div className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[34rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8">
            <div className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 dark:text-white">
              Registrations for SRMUAP University students
            </div>
            <div className="text-neutral-500 text-xl sm:text-2xl mt-2 dark:text-neutral-300">
              Click here to continue
            </div>
            <div className="w-full mt-4">
              <img
                src="/images/reg1.jpeg"
                height="1000"
                width="1000"
                className="h-[40rem] w-full object-cover rounded-xl group-hover/card:shadow-xl hover:scale-105"
                alt="thumbnail"
              />
            </div>
            <div className="flex justify-between items-center mt-20">
              <div className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-3xl font-light">
                Register Now
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
