import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 h-[900px] pt-[85px]"
    >
      <div className="relative w-full h-full">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/FMS-Academy-Header3.png"
          fill
          alt="picture of fms-academy-header"
          className="object-cover" // 또는 object-contain
        />
      </div>
    </section>
  )
}

export default Hero
