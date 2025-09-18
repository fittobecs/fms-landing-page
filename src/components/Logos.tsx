"use client"
import React, { useState } from "react"

interface Course {
  id: string
  title: string
  active?: boolean
}

const Logos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const courses: Course[] = [
    { id: "fms-l1", title: "FMS L1" },
    { id: "fms-l2", title: "FMS L2" },
    { id: "sfma-l1", title: "SFMA L1" },
    { id: "breathing", title: "BREATHING" },
    { id: "ybt", title: "YBT" },
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < courses.length - 1 ? prev + 1 : prev))
  }

  const handleCourseClick = (index: number) => {
    setCurrentIndex(index)
  }

  // SVG 화살표 아이콘
  const ChevronLeft = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  )

  const ChevronRight = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )

  return (
    <div
      className="w-full py-8"
      style={{ backgroundColor: "rgb(202, 202, 202)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-700 tracking-wide">
            FMS 사 교육 과정
          </h2>
        </div>

        {/* Navigation Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full transition-colors duration-200 ${
              currentIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-500 hover:text-gray-700 hover:bg-white"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Course Navigation */}
          <div className="flex items-center space-x-8 mx-8">
            {courses.map((course, index) => (
              <button
                key={course.id}
                onClick={() => handleCourseClick(index)}
                className={`text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  index === currentIndex
                    ? "text-gray-900 bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === courses.length - 1}
            className={`p-2 rounded-full transition-colors duration-200 ${
              currentIndex === courses.length - 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-500 hover:text-gray-700 hover:bg-white"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Logos
