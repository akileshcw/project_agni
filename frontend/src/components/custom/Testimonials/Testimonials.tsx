import { useRef, useState } from "react";
import "./Testimonials.css";
import recruiterImage from "@/assets/Testimonial-Recruiter.png";
import studentFemale from "@/assets/Testimonial-Student-Female.png";
import studentMale from "@/assets/Testimonial-Student-Male.png";

const Testimonials = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = 920; // Adjust to fit card width + gap
            const newPosition =
                direction === "left"
                    ? Math.max(scrollPosition - scrollAmount, 0)
                    : Math.min(
                          scrollPosition + scrollAmount,
                          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
                      );

            setScrollPosition(newPosition);
            carouselRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
        }
    };

    return (
        <div className="testimonial-section">
            <h1>Testimonials & Success Stories</h1>
            <div className="testimonial-wrapper">
                <button className="scroll-btn left" onClick={() => handleScroll("left")}>
                    ◀
                </button>

                <div className="testimonial-container" ref={carouselRef}>
                    <div className="testimonial-cards">
                        <div className="testimonial-card">
                            <img className="Testimonial-image"src={recruiterImage} alt="Testimonial" />
                            <div className="feedback">
                                <p>"The hiring landscape is evolving, and we need professionals who are equipped with the latest skills..."</p>
                                <h4>Isac Newton, Senior Recruiter</h4>
                            </div>
                        </div>

                      <div className="testimonial-card">
                            <img className="Testimonial-image" src={studentFemale} alt="Testimonial" />
                            <div className="feedback">
                                <p>"As someone transitioning into tech, I needed a course that provided both knowledge and credibility..."</p>
                                <h4>Mala, Fresher</h4>
                            </div>
                      </div>

                        <div className="testimonial-card">
                            <img className="Testimonial-image" src={studentMale} alt="Testimonial" />
                            <div className="feedback">
                                <p>"As someone transitioning into tech, I needed a course that provided both knowledge and credibility.
                                The EdTech program not only enhanced my technical skills but also gave me access to hiring opportunities 
                                through their job placement assistance. I secured my dream job within a month of completing the certification!"</p>
                                <h4>Harry, Graduate</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="scroll-btn right" onClick={() => handleScroll("right")}>
                    ▶
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
