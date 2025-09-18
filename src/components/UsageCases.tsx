"use client"

import Image from "next/image"
import React, { useCallback, useEffect, useState } from "react"

interface ImageCarouselProps {
  className?: string
  showArrows?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
}

const UsageCases: React.FC<ImageCarouselProps> = ({
  className = "",
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    window.open(
      "https://www.fittobe.ac/product/product_list.jsp?cid=113703",
      "_blank",
      "noopener,noreferrer"
    )
  }

  const items = [
    {
      id: "squat",
      src: "/images/qatar-nike.png",
      alt: "스쿼트 자세",
      caption: "스쿼트 - 하체 근력 강화",
      type: "image",
    },
    {
      id: "squat-gif",
      src: "/images/zlatan.gif",
      alt: "스쿼트 동작",
      caption: "올바른 스쿼트 자세 가이드",
      type: "gif",
    },
    {
      id: "plank",
      src: "/images/holand.jpg",
      alt: "플랭크 자세",
      caption: "플랭크 - 코어 근력 강화",
      type: "image",
    },
    {
      id: "pushup",
      src: "/images/man_on_the_block.png",
      alt: "푸시업 자세",
      caption: "푸시업 - 상체 근력 강화",
      type: "image",
    },
  ]

  // Hooks를 조기 반환 전에 호출
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }, [items.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }, [items.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  // 자동 재생
  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const interval = setInterval(goToNext, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, goToNext, items.length])

  // 조기 반환을 hooks 호출 이후로 이동
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <p className="text-gray-500">이미지가 없습니다</p>
      </div>
    )
  }

  const currentItem = items[currentIndex]

  return (
    <section>
      <div
        className={`relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      >
        {/* 메인 이미지 컨테이너 */}
        <div className="relative aspect-[4/3] bg-gray-100">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            className="object-contain transition-opacity duration-300"
            priority={currentIndex === 0}
            unoptimized={currentItem.type === "gif"}
          />

          {/* 네비게이션 화살표 */}
          {showArrows && items.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center"
                aria-label="이전 이미지"
              >
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-white ml-[-2px]"></div>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center"
                aria-label="다음 이미지"
              >
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white mr-[-2px]"></div>
              </button>
            </>
          )}

          {/* 이미지 카운터 */}
          {items.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {items.length}
            </div>
          )}
        </div>

        {/* 점 인디케이터 */}
        {items.length > 1 && (
          <div className="flex justify-center space-x-2 py-4">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`${index + 1}번째 이미지로 이동`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="text-center mt-12">
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-12 rounded-full text-lg 
          transition-colors duration-300 shadow-lg hover:shadow-xl"
          onClick={handleClick}
        >
          장비 구매하기
        </button>
      </div>
    </section>
  )
}

export default UsageCases
