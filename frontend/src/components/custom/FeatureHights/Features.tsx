import { useEffect, useState } from "react";

const ProductFeatures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const features = [
      "🚀 High-speed performance",
      "💡 AI-powered recommendations",
      "🎨 Customizable UI themes",
      "🔒 Enhanced security layers",
      "⚡ Lightning-fast loading times",
      "📊 Real-time analytics dashboard",
      "📱 Mobile-friendly and responsive",
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [features.length]);
  
    return (
      <div className="h-80 w-96 flex items-center justify-center border p-4 rounded-xl shadow-lg bg-white">
        <div className="p-4 bg-gray-100 shadow-md rounded-lg text-lg font-semibold text-center w-full">
          {features[currentIndex]}
        </div>
      </div>
    );
  };
  
  export default ProductFeatures;
  