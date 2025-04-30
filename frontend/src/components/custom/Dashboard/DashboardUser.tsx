import Logo from "@/components/custom/HeaderSection/Logo";
import "./Dashboard.css";
import "@/App.css";
import { Home, ShieldCheck, User, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import CompanyLogo from "@/assets/Hero-AI.png";

export function DashboardUser() {
  const tagsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkForScrollPosition = () => {
      const el = tagsRef.current;
      if (el) {
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
      }
    };

    const el = tagsRef.current;
    if (el) {
      checkForScrollPosition();
      el.addEventListener("scroll", checkForScrollPosition);
      return () => el.removeEventListener("scroll", checkForScrollPosition);
    }
  }, []);

  const scrollTagsRight = () => {
    const el = tagsRef.current;
    if (el && el.scrollLeft < el.scrollWidth - el.clientWidth) {
      el.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollTagsLeft = () => {
    const el = tagsRef.current;
    if (el && el.scrollLeft > 0) {
      el.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // ✅ Return starts here, inside the component
  return (
    <>
      <div className="user-dashboard">
        <div className="user-header">
          <div>
            <Logo />
          </div>
          <div className="welcome-message-user">Welcome back UserName</div>
          <User size={32} color="white" strokeWidth={1} />
        </div>

        <div className="dashboard-content">
          <div className="nav-bar">
            <div className="nav-list">
              <div>
                <Home size={32} color="white" strokeWidth={1} />
              </div>
              <p>Home</p>
            </div>

            <div className="nav-list">
              <div>
                <ShieldCheck size={32} color="white" strokeWidth={1} />
              </div>
              <p>Certificate</p>
            </div>

            <div className="nav-list">
              <span className="material-symbols-outlined material-icon">home</span>
              <p>Home</p>
            </div>
          </div>

          <div className="news-tab">
            <h3>Daily Feed</h3>
            <div className="tag-column-container">
              <ChevronLeft
                size={32}
                strokeWidth={1}
                onClick={scrollTagsLeft}
                style={{
                  cursor: canScrollLeft ? "pointer" : "not-allowed",
                  opacity: canScrollLeft ? 1 : 0.4,
                  color: "var(--primary-color)",
                }}
              />

              <div className="tag-column" ref={tagsRef}>
                <button className="tags">User Interface +</button>
                <button className="tags">Figma +</button>
                <button className="tags">User Experience Design +</button>
                <button className="tags">Artificial Intelligence +</button>
                <button className="tags">Artificial Intelligence +</button>
                <button className="tags">Hi +</button>
                <button className="tags">Figma +</button>
                <button className="tags">User Experience Design +</button>
                <button className="tags">Artificial Intelligence +</button>
                <button className="tags">Artificial Intelligence +</button>
              </div>

              <ChevronRight
                size={32}
                strokeWidth={1}
                onClick={scrollTagsRight}
                style={{
                  cursor: canScrollRight ? "pointer" : "not-allowed",
                  opacity: canScrollRight ? 1 : 0.4,
                  color: "var(--primary-color)",
                }}
              />
            </div>
          </div>

          <div className="jobs-tab">
            <h3>Jobs for You</h3>

            <div className="job-filter">
              <button className="tags">Remote</button>
              <button className="tags">Full Time</button>
              <button className="tags">0-2 years</button>
              <button className="tags">4-12 LPA</button>
              <label className="switch">
                <input type="checkbox" id="toggleFilter" />
                <span className="slider"></span>
              </label>
            </div>

            <div className="job-card-set">
              <div className="job-card">
                <img className="company-logo" src={CompanyLogo} alt="company logo" />
                <div className="job-details">
                  <div className="job-title">Associate Software Engineer</div>
                  <div className="company-name">Company: ABS Solutions</div>
                  <div className="location">Location: Hyderabad</div>
                  <div className="salary">Salary: 8-12 LPA</div>
                </div>
                <div className="card-right-section">
                  <div className="eligibility">Eligibility X</div>
                  <button className="apply-button">Apply Now</button>
                </div>
              </div>

              <div className="job-card-inactive">
                <img className="company-logo" src={CompanyLogo} alt="company logo" />
                <div className="job-details">
                  <div className="job-title">Associate Software Engineer</div>
                  <div className="company-name">Company: ABS Solutions</div>
                  <div className="location">Location: Hyderabad</div>
                  <div className="salary">Salary: 8-12 LPA</div>
                </div>
                <div className="card-right-section">
                  <div className="eligibility">Eligibility X</div>
                  <button className="apply-button">Apply Now</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default DashboardUser;
