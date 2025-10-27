import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 md:h-[650px] h-[350px] pt-[60px] md:pt-[85px]"
    >
      <div className="relative w-full h-full">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/main_logo_no.png"
          fill
          alt="picture of fms-academy-header"
          className="object-cotain" // 또는 object-contain
        />
      </div>

      {/* 오버레이 텍스트 */}
      <div className="absolute left-1 md:left-11 flex flex-col justify-center items-left text-left px-4">
        <div className="relative w-20 h-20 md:w-40 md:h-40 ml-10 md:ml-14  mb-4">
          <Image src="/images/fms.png" fill alt="DVRT Logo" className="" />
        </div>
        <p className="text-sm md:text-xl text-white drop-shadow-lg">
          더 잘 움직이고 더 자주 움직일 수 있도록 돕는 체계적인 접근법
        </p>
        <p className="text-sm md:text-xl text-white drop-shadow-lg">
          FMS(Functional Movement System)
        </p>
      </div>
    </section>
  )
}

export default Hero
