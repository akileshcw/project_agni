import './FAQ.css';
import { useState, useRef } from "react";

const FAQ: React.FC = () => {
    // State to track which FAQ is open
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Ref to hold all content divs
    const contentRefs = useRef<HTMLDivElement[]>([]);

    // Sample FAQ data
    const faqs = [
        { question: "How do I register?", answer: "You can register by signing up on the Agni website." },
        { question: "What is the refund policy?", answer: "We offer a full refund within 30 days of purchase." },
        { question: "How can I contact support?", answer: "You can contact us via email at support@example.com." }
    ];

    // Function to toggle the accordion
    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-Section">
            <h1>Help Section</h1>
            {faqs.map((faq, index: number) => (
                <div key={index} className="faq-items">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </div>
                    <div
                        ref={(el) => {
                            if (el) contentRefs.current[index] = el; // Store reference to the current FAQ answer div
                        }}
                        className={`faq-answer ${openIndex === index ? "show" : ""}`}
                        style={{
                            maxHeight: openIndex === index 
                                ? `${contentRefs.current[index]?.scrollHeight}px` // Use scrollHeight to set the max height dynamically
                                : "0"
                        }}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
