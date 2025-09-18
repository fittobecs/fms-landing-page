import Image from "next/image"

const FmsIcons: React.FC = () => {
  return (
    <section className="w-full py-16 flex justify-center items-center">
      <div className="relative w-80% max-w-[1200px]">
        <Image
          src="/images/FMS-Icons-1.png"
          width={1200}
          height={1200}
          alt="icons"
          style={{ width: "100%", height: "auto" }} // 비례 크기 조정
          className="object-contain" // 이미지 비율 유지
        />
      </div>
    </section>
  )
}

export default FmsIcons
