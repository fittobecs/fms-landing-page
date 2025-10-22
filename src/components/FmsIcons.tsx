import React from "react"

const FmsIcons: React.FC = () => {
  const benefits = [
    {
      iconPath: "/images/icons/write_icon_2.png",
      title: "7가지 국제 자격 과정 포함",
      subtitle: "FMS사의 모든 온라인 강좌",
      description: "1년간 무제한 수강",
    },
    {
      iconPath: "/images/icons/chart_icon.png",
      title: "FMS 프로 앱",
      subtitle: "무료 사용 가능",
      description: "",
    },
    {
      iconPath: "/images/icons/certificate_icon.png",
      title: "과정 별 3회의 시험 기회,",
      subtitle: "자격증 발급 비용 포함",
      description: "",
    },
    {
      iconPath: "/images/icons/watch_icon.png",
      title: "600여 개의 멤버십 전용",
      subtitle: "교정 운동 라이브러리",
      description: "(영문)",
    },
    {
      iconPath: "/images/icons/free_icon.png",
      title: "연 1회 개최되는",
      subtitle: "FMS Day(15만원 상당)",
      description: "무료 참석\n(한국 전용)",
    },
    {
      iconPath: "/images/icons/internet_icon.png",
      title: "멤버 전용 칼럼 및 콘텐츠",
      subtitle: "한글 제공",
      description: "(한국 전용)",
    },
    {
      iconPath: "/images/icons/fittobe_icon_2.png",
      title: "회원 관리 프로그램 핏투비",
      subtitle: "(스타터 요금제 무료 사용)",
      description: "(한국 전용)",
    },
    {
      iconPath: "/images/icons/coupon_icon.png",
      title: "핏투비 아카데미 장비 모든",
      subtitle: "품목 5%할인",
      description: "오프라인 재수강 30% 할인\n(한국 전용)",
    },
  ]

  return (
    <section className="w-full pb-16 flex justify-center items-center bg-white">
      <div className="relative w-[90%] md:w-[80%] max-w-[1200px]">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          FMS 아카데미 혜택
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="mb-2">
                <img
                  src={benefit.iconPath}
                  alt={benefit.title}
                  className="w-[4.5rem] h-16"
                />
              </div>
              <div className="space-y-1">
                <p className="text-base font-medium leading-snug">
                  {benefit.title}
                </p>
                <p className="text-base font-medium leading-snug">
                  {benefit.subtitle}
                </p>
                {benefit.description && (
                  <p className="text-sm text-gray-600 whitespace-pre-line mt-2">
                    {benefit.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FmsIcons
