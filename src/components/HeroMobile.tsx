import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 h-[650px] pt-[70px] md:hidden"
    >
      <div className="relative w-full h-full">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/fms_mobile_251216.png"
          fill
          alt="picture of fms-academy-header"
          className="object-fill min-[500px]:hidden"
        />
        <Image
          src="/images/fms_tablet_251216.png"
          fill
          alt="picture of fms-academy-header"
          className="object-fill max-[501px]:hidden"
        />
      </div>

      {/* 검은 오버레이 (투명도 조절 가능) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* 오버레이 텍스트 */}
      <div className="absolute flex flex-col justify-center items-center text-center px-2 md:px-4">
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-40 md:h-40 mb-2 md:mb-4">
          <Image src="/images/fms.png" fill alt="DVRT Logo" className="" />
        </div>
        <p className="text-xl text-white drop-shadow-lg">
          더 잘 움직이고 더 자주 움직일 수 있도록 돕는 체계적인 접근법
        </p>
        <p className="text-xl text-white drop-shadow-lg">
          FMS(Functional Movement System)
        </p>
      </div>
    </section>
  )
}

export default Hero
