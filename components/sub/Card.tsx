"use client";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div className="inter-var flex gap-20 flex-col sm:flex-row">
      <Link href={"https://unstop.com/p/music-fiesta-infinitus-2024-srm-university-srmap-andhra-pradesh-927977"} target="_blank">
        <div>
          <div className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[35rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8">
            <div className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 dark:text-white">
              Registrations for SRMAP university students
            </div>
            <div className="text-neutral-500 hover:scale-105 text-xl sm:text-2xl mt-2 dark:text-neutral-300">
              Click here to continue
            </div>
            <div className="w-full mt-8">
              <img
                src="/images/grab.jpeg"
                height="1000"
                width="1000"
                className="h-[46rem] w- w-full object-cover rounded-xl group-hover/card:shadow-xl hover:scale-105"
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href={""} target="_blank">
        <div>
          <div className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[35rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8">
            <div className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 dark:text-white">
              Registrations for non SRMUAP students
            </div>
            <div className="text-neutral-500 text-xl hover:scale-105 sm:text-2xl mt-2 dark:text-neutral-300">
              Registrations coming soon
            </div>
            <div className="w-full mt-8">
              <img
                src="/images/open.jpeg"
                height="1000"
                width="1000"
                className="h-[46rem] w-full object-cover rounded-xl group-hover/card:shadow-xl hover:scale-105"
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
