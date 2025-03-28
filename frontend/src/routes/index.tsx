import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import '@/components/custom/HeroSection/Hero.css';
import HeroSection from "@/components/custom/HeroSection/Hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [body, setBody] = useState([]);

  const fetchBody = async () => {
    try {
      const res = await fetch("http://localhost:3002/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "karthika" }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      toast.success("Data fetched successfully");
      setMessage(data.message);
      setBody(data.receivedBody);
      console.log("the data received from backend is", data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error(error.message);
    }
  };

  useEffect(() => {
    console.log("use effect is running");
    fetchBody();
  }, []);

  return (
    <>
       <div className='hero-section'>
        <HeroSection />
        </div>
    </>
  );
}
