import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 md:h-[90vh] h-[44vh] md:pt-[85px] pt-[60px]"
    >
      <div className="relative w-full h-full">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/FMS-Academy-Header3.png"
          fill
          alt="picture of fms-academy-header"
          className="object-fill md:object-cover"
        />
      </div>
    </section>
  )
}

export default Hero
