 import './FAQ.css';
 import { useState } from "react";

 const FAQ: React.FC = () => {
     // State to track which FAQ is open
     const [openIndex, setOpenIndex] = useState<number | null>(null);
 
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
                     <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                         {faq.answer}
                     </div>
                 </div>
             ))}
         </div>
     );
 };
 
 export default FAQ;
 