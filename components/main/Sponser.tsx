import React from "react";
import Image from "next/image";
import Link from "next/link";

  const SilverSponsorsData = [
    {
      name: "Marblism",
      image: "/images/sponsers/marblism.jpeg",
      link: "https://marbalism.co/",
      sponsorsCategory: "",
      alt: "Marblism LOGO",
    },
  ];
  
  export const SponsorSection = () => {
    return (
      <section
        id="Sponsors"
        className="min-h-screen px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
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
                <Image
                  src={sponsor.image}
                  loading="lazy"
                  alt={sponsor.alt}
                  className={`h-auto w-72 rounded-2xl bg-gray-950 object-contain p-3 sm:h-28`}
                  width={72}
                  height={100}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };