// FaqAccordion.tsx
import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-lg mx-auto justify-center ">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border rounded items-center ">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full p-4 bg-gray-200 focus:outline-none "
          >
            <span className="font-semibold">{faq.question}</span>
            <span className="float-right">
              {activeIndex === index ? <FaMinusCircle /> : <FaPlusCircle />}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
