"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/sub/RegisterCard";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var flex gap-20 flex-col sm:flex-row">
      <Link href={"https://unstop.com/p/music-fiesta-infinitus-2024-srm-university-srmap-andhra-pradesh-927977"} target="_blank">
        <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[34rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8">
        <CardItem
          translateZ="50"
          className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 dark:text-white"
        >Registrations for SRMAP University students
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xl sm:text-2xl mt-2 dark:text-neutral-300"
        >
          Click here to continue
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="/images/reg1.jpeg"
            height="1000"
            width="1000"
            className="h-[40rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xl sm:text-2xl font-normal dark:text-white"
          >
            Click here to Register →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-3xl font-light"
          >
            Register
          </CardItem>
        </div>
      </CardBody>
      </Link>
      <div>
        <Link href={"https://unstop.com/p/music-fiesta-infinitus-2024-srm-university-srmap-andhra-pradesh-927977"} target="_blank">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[34rem] sm:w-[60rem] mx-6 sm:h-[60rem] h-auto rounded-xl p-6 border sm:p-8">
        <CardItem
          translateZ="50"
          className="text-3xl sm:text-4xl font-space font-bold text-neutral-600 dark:text-white"
        >Registrations for other university Students
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xl sm:text-2xl mt-2 dark:text-neutral-300"
        >
          Click here to continue
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="/images/reg2.jpeg"
            height="1000"
            width="1000"
            className="h-[40rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xl sm:text-2xl font-normal dark:text-white"
          >
            Click here to Register →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-3xl font-space font-light"
          >
            Register
          </CardItem>
        </div>
      </CardBody>
      </Link>
      </div>
    </CardContainer>
  );
}
