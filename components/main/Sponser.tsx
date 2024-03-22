import React from "react";
import Image from "next/image";
import Link from "next/link";

  const SilverSponsorsData = [
    {
      name: "Marblism",
      image: "/images/sponsers/darkmode.png",
      link: "https://marbalism.co/",
      sponsorsCategory: "",
      alt: "Marblism LOGO",
    },
    {
      name: "CCC",
      image: "/images/sponsers/ccc logo.PNG",
      link: "",
      sponsorsCategory: "",
      alt: "CCC LOGO",
    },
    {
      name: "CCC",
      image: "/images/sponsers/time.jpg",
      link: "",
      sponsorsCategory: "",
      alt: "CCC LOGO",
    },
    {
      name: "",
      image: "/images/sponsers/sakshi.jpg",
      link: "",
      sponsorsCategory: "",
      alt: "CCC LOGO",
    },
    {
      name: "",
      image: "/images/sponsers/hindu.jpeg",
      link: "",
      sponsorsCategory: "",
      alt: "CCC LOGO",
    },
    {
      name: "CCC",
      image: "/images/sponsers/redfm.png",
      link: "",
      sponsorsCategory: "",
      alt: "CCC LOGO",
    },
  ];
  
  export const SponsorSection = () => {
    return (
      <section
        id="Sponsors"
        className="px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
      >
        <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space m-20 sm:m-10'>
            Sponsors
          </h1>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {SilverSponsorsData.map((sponsor) => (
            <div
              className="z-10 flex flex-col items-center justify-center space-y-5 rounded py-5"
              key={sponsor.name}
            >
              <Link href={sponsor.link}>
                <img
                  src={sponsor.image}
                  loading="lazy"
                  alt={sponsor.alt}
                  className={`h-[140px] sm:h-[240px] w-[350px] rounded-2xl bg-gray-950 object-contain p-3`}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };