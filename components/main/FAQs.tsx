'use client';

import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Navbar from '@/components/main/Navbar';
import FlareCursor from "@/components/main/Cursor";
import Footer from '@/components/main/Footer';

const faqData = [
  {
    "question": "How do I register for the college fest?",
    "answer": "To register for the college fest, simply visit our website and navigate to the registration page. Fill out the required information and follow the prompts to complete your registration."
  },
  {
    "question": "Accommodation for participants coming from other institutions?",
    "answer": "Accommodation will be provided based on first-come first-serve basis and for a duration of 3 days."
  },
  {
    "question": "Do we get Participation fee refund if we fail to show up?",
    "answer": "In any case if a registered team or participant fails to show up to the competition, their fee will not be refunded."
  },
  {
    "question": "Is transportation provided to and from the venue, or should attendees arrange their own transportation?",
    "answer": "Transport charges will not be provided for participants of other institutions, they have to pay for their own travel expenses."
  },
  {
    "question": "What are the registration deadlines?",
    "answer": "Registration deadlines vary depending on the event. Please refer to the specific event details on our website for registration deadlines."
  },
  {
    "question": "Can I register as an individual, or do I need to register as part of a team?",
    "answer": "Both individual and team registrations are accepted for certain events. Please check the event details on our website for specific registration requirements. Teams are requested to make a single registration for the competition."
  },
  {
    "question": "Is there a registration fee for the college fest?",
    "answer": "Yes, there is a registration fee for certain events. Details regarding registration fees can be found on our website."
  },
  {
    "question": "Can participants from other universities attend the college fest?",
    "answer": "Absolutely! We welcome participants from other universities to join us for the college fest. Please make sure to register on our website to secure your spot."
  },
  {
    "question": "Where can I find accommodation information for participants from other universities?",
    "answer": "Free accommodation will be provided to all participants on campus."
  },
  {
    "question": "Do participants from other universities need to stay on campus during the duration of the fest?",
    "answer": "Yes, participants from other universities are required to stay on campus for the duration of the fest. This helps facilitate networking and ensures a seamless festival experience."
  },
  {
    "question": "Are meals provided for participants staying on campus?",
    "answer": "Yes, meals will be available for participants staying on campus and participants can pay for the meals they wish to have."
  },
  {
    "question": "How can I contact the organizers if I have any questions or concerns?",
    "answer": "If you have any questions or concerns, please feel free to reach out to us via the email and contact information provided on the website."
  },
  {
    "question": "What is required for identity verification at the event?",
    "answer": "Physical identification cards from respective colleges are mandatory for entrance verification and participants are required to wear the ID cards provided by the organizers throughout the fest duration and return the same at the time of departure."
  },
  {
    "question": "Is there a provision for on-spot registrations for events?",
    "answer": "Event registration is exclusively through the website, and on-spot registrations are unavailable."
  }
];

function Questions() {
  const [openStates, setOpenStates] = useState(Array(faqData.length).fill(false));

  function handleClick(index: number) {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  }

  return (
    <section className='pt-20'>
      <FlareCursor />
      <h1 className='m-20 text-center text-5xl md:text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space'>
        Frequently Asked Questions
      </h1>
      <div className='py-6 mx-auto px-3'>
        <div className='mx-auto mx max-w-7xl flex flex-col'>
          {faqData.map((faq, index) => (
            <div key={faq.question} className="z-10">
              <Navbar />
              <div
                onClick={() => handleClick(index)}
                className="flex cursor-pointer justify-between gap-2 text-[#bdbdbe] active:text-purple-200 font-extralight font-space border-[#76767661] border m-5 px-5 py-8 rounded-xl"
              >
                <span className="text-3xl font-thin">{faq.question}</span>
                <span>
                  {openStates[index] ? (
                    <IconChevronUp stroke={1.5} size={24} />
                  ) : (
                    <IconChevronDown size={24} stroke={1.5} />
                  )}
                </span>
              </div>
              {openStates[index] ? (
                <div className='flex justify-center py-5'>
                  <p className='text-3xl text-purple-200 font-space px-10 text-wrap'>{faq.answer}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;