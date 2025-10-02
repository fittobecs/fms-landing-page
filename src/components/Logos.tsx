"use client"
import React from "react"
import LogoSlider from "./LogoSlider"

const Logos: React.FC = () => {
  return (
    <div
      className="w-full py-8"
      style={{ backgroundColor: "rgb(202, 202, 202)" }}
    >
      <div className=" mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-700 tracking-wide">
            FMS 사 교육 과정
          </h2>
        </div>

        {/* Navigation Container */}
        <div className="relative flex items-center justify-center">
          <LogoSlider />
        </div>
      </div>
    </div>
  )
}

export default Logos
