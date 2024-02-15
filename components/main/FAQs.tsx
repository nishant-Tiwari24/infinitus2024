'use client';

import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Navbar from '@/components/main/Navbar';
import FlareCursor from "@/components/main/Cursor";

const faqData = [
  {
    question: "What is the name of this project1?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae."
  },
  {
    question: "What is the name of this project2?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae."
  },
  {
    question: "What is the name of this project3?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae."
  },
  {
    question: "What is the name of this project4?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae."
  },
  {
    question: "What is the name of this project5?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae."
  },
  {
    question: "What is the name of this project6?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae."
  },
  {
    question: "What is the name of this project7?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem nesciunt nobis eos animi quaerat ut odio doloremque laboriosam ea. Pariatur esse eaque vel non reiciendis dolorum sint eos quae."
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
    <section className='max-h-screen pt-20'>
      <FlareCursor />
      <h1 className='m-20 text-center text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono'>
        Frequently Asked Questions
      </h1>
      <div className='py-6 mx-auto px-3'>
        <div className='mx-auto mx max-w-7xl flex flex-col'>
          {faqData.map((faq, index) => (
            <div key={faq.question} className="z-10">
              <Navbar />
              <div
                onClick={() => handleClick(index)}
                className="flex cursor-pointer justify-between gap-2 text-[#bdbdbe] active:text-purple-200 font-extralight font-mono border-[#76767661] border m-5 px-5 py-8 rounded-xl"
              >
                <span className="text-4xl font-thin">{faq.question}</span>
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
                  <p className='text-3xl text-gray-200 font-mono text-wrap'>{faq.answer}</p>
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