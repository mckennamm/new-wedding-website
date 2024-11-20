// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css'; // Import CSS for styling

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsAnswers = [
    {
      question: '1. Where is the venue?',
      answer: 'The venue is located at 4519 Murphy School Road, Durham, NC.',
    },
    {
      question: '2. What should I wear?',
      answer: 'The dress code is Semi-formal, springtime attire.',
    },
    {
      question: '3. Can I bring a guest?',
      answer: 'Please check your invitation for details about bringing a guest.',
    },
    {
      question: '4. Are children invited?',
      answer: 'No',
    },
    {
      question: '5. What is the RSVP deadline?',
      answer: 'The deadline for RSVP submission is March 17th, 2025. We will not be able to accept RSVPs submitted past that date due to vendor headcount submissions.',
    },
    {
      question: '6. Is there parking available at the venue?',
      answer: 'Yes! However, it is limited. Try to carpool where you can!',
    },
    {
      question: '7. Will the wedding be indoors or outdoors?',
      answer: 'Weather permitting, the wedding ceremony and reception will both be outdoors. If rain is in the forecast, we will move the ceremony indoors at the same location. The reception will be outdoors under a tent in rain or shine',
    },
    {
      question: '8. What is the weather like in this area?',
      answer: 'Check back closer to wedding date for updated weather info.',
    },
    // Add more questions and answers as needed
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        {questionsAnswers.map((qa, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {qa.question}
            </div>
            {openIndex === index && <div className="faq-answer">{qa.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
