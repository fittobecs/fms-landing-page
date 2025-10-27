"use client"

import { BsFillCheckCircleFill, BsPlusCircleFill } from "react-icons/bs"

const PricingColumn2 = () => {
  const registrationFee = {
    name: "FMS ACADEMY 등록비",
    price: 112,
    unit: "/ 최초 1회",
    features: [
      "FMS 사 모든 온라인 강좌 무제한 수강",
      "매년 새 강좌 추가 업데이트",
      "7가지 자격과정 시험 통과시 자격증 발급",
      "핏투비 아카데미 장비 할인",
      "FMS 데이 무료 참석(1년에 1회)",
      "FMS 프로 앱 사용",
    ],
  }

  const annualFee = {
    name: "연회비",
    price: 33,
    unit: "/ 년",
    features: [
      "모든 혜택 및 과정 1년 연장",
      "1년 33만원으로 모든 혜택 유지",
      "6백여개의 멤버십 전용 교정 운동(영문)",
      "오프라인 강좌 재수강 30% 할인",
      "핏투비 회원관리프로그램 무료 사용",
    ],
  }

  const handlePurchase = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const url =
      "https://www.fittobe.ac/course/course_view.jsp?id=174227&cid=116081#course-view-174227"
    if (isMobile) {
      window.location.href = url
    } else {
      window.open(url, "_blank")
    }
  }

  return (
    <div className=" bg-white p-4 md:p-8">
      <div className="max-w-[800px] mx-auto shadow-lg rounded-lg border border-gray-200 p-6 md:p-20">
        {/* 가격 헤더 섹션 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 mb-10">
          {/* 등록비 */}
          <div className="text-center flex-1">
            <h3 className="text-base font-semibold text-gray-700 mb-3">
              {registrationFee.name}
            </h3>
            <div className="flex items-baseline justify-center">
              <span className="text-7xl font-bold text-red-600">
                {registrationFee.price}
              </span>
              <span className="text-2xl font-medium ml-1">만원</span>
              <p className="text-sm text-gray-500 mt-2">
                {registrationFee.unit}
              </p>
            </div>
          </div>

          {/* + 아이콘 */}
          <div className="flex items-center justify-center flex-0">
            <BsPlusCircleFill className="h-8 w-8 md:h-12 md:w-12 text-white bg-red-600 rounded-full" />
          </div>

          {/* 연회비 */}
          <div className="text-center flex-1">
            <h3 className="text-base font-semibold text-gray-700 mb-3">
              {annualFee.name}
            </h3>
            <div className="flex items-baseline justify-center">
              <span className="text-7xl font-bold text-red-600">
                {annualFee.price}
              </span>
              <span className="text-2xl font-medium ml-1">만원</span>
              <p className="text-sm text-gray-500 mt-2">{annualFee.unit}</p>
            </div>
          </div>
        </div>

        {/* 구매하기 버튼 */}
        <div className="mb-8 pb-10 border-b border-gray-200">
          <button
            onClick={handlePurchase}
            className="w-[50%] max-w-2xl mx-auto block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-8 rounded-full text-lg transition-colors"
          >
            구매하기
          </button>
        </div>

        {/* 혜택 목록 섹션 */}
        <div className="grid grid-rows-1 md:grid-cols-2 max-[762px]:justify-items-center gap-x-12 gap-y-3 md:gap-y-6">
          {/* 등록비 혜택 */}
          <div>
            <ul className="space-y-3 min-w-[275px]">
              {registrationFee.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <BsFillCheckCircleFill className="h-9 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 연회비 혜택 */}
          <div>
            <ul className="space-y-3 min-w-[275px]">
              {annualFee.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <BsFillCheckCircleFill className="h-9 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingColumn2
