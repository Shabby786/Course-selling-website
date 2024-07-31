import React, { useState } from "react";

const MarqLtoR = () => {
    // marquee
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div>
        {/* First Marquee */}
        <div className="overflow-hidden bg-gray-200 rounded-lg shadow-md marquee-container ">
          <div
            className={`marquee left-to-right px-1 py-1 whitespace-nowrap ${
              isHovered1 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            Admissions Open: 2024-25 : B.Com | B.Sc | BCA | B.Tech | D.Pharm |
            B.Pharm | LLB | Diploma | MBA | MCA | MA
          </div>
        </div>

        {/* Second Marquee */}
        <div className="overflow-hidden bg-gray-200 rounded-lg shadow-md marquee-container">
          <div
            className={`marquee right-to-left px-4 py-2 whitespace-nowrap ${
              isHovered2 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            Admissions Open: 2024-25 : B.Com | B.Sc | BCA | B.Tech | D.Pharm |
            B.Pharm | LLB | Diploma | MBA | MCA | MA
          </div>
        </div>
      </div>
  )
}

export default MarqLtoR