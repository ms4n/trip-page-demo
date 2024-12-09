import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./styles/FAQSection.css";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: {
    experience: FAQ[];
    general: FAQ[];
  };
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'general'>('experience');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const currentFaqs = activeTab === 'experience' ? faqs.experience : faqs.general;

  return (
    <div className="faq-section">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-buttons-outer-container">
        <div className="faq-buttons-container">
          <button 
            className={activeTab === 'experience' ? "faq-button-active" : "faq-button-inactive"}
            onClick={() => setActiveTab('experience')}
          >
            <span>Experience</span>
          </button>
          <button 
            className={activeTab === 'general' ? "faq-button-active" : "faq-button-inactive"}
            onClick={() => setActiveTab('general')}
          >
            <span>General</span>
          </button>
        </div>
      </div>
      <div className="faq-items-container">
        {currentFaqs.map((faq, index) => (
          <div 
            key={index} 
            className="faq-item"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center w-full">
              <span className="faq-item-text flex-1">{faq.question}</span>
              <ChevronDown
                className="faq-item-icon"
                size={20}
                strokeWidth={1.5}
                style={{
                  transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease-in-out'
                }}
              />
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
