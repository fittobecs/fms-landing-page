"use client"

import Image from "next/image"
import React from "react"

const FMSInfo2: React.FC = () => {
  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor: "rgb(239, 239, 239)" }}
    >
      {/* 상단 수평선 */}
      <div className="mt-8 px-4">
        <hr className="border-2 border-gray-800 w-3/4 mx-auto" />
      </div>
      {/* 제목 */}
      <h1 className="text-[42px] font-bold m-12 text-center leading-10">
        FMS사 7가지 자격 과정
      </h1>

      {/* 컨테이너 */}
      <div className="container mx-auto px-4 max-w-5xl">
        {/* FMS L1, L2 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 order-1">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/FMS_Kyle_Screen_HR-0768.jpg"
                alt="FMS L1/L2 이미지"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-8 order-2">
            <div className="w-full text-center">
              <h2 className="text-2xl font-semibold text-gray-800 py-9">
                FMS L1, L2
              </h2>
              <ul className="text-gray-700 space-y-1 list-inside">
                <li>01_움직임의 기능제한과 불균형 식별</li>
                <li>02_부상 예방을 위한 교정운동 제공</li>
              </ul>
              <p className="py-5 text-blue-500">
                <a
                  href="https://www.fittobe.ac/course/course_list.jsp?cid=117698"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  상세 페이지 바로 가기
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* SFMA L1, L2 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 order-2 md:order-1">
            <div className="w-full text-center">
              <h2 className="text-2xl font-semibold text-gray-800 py-9">
                SFMA L1, L2
              </h2>
              <ul className="text-gray-700 space-y-1 list-inside">
                <li>01_통증의 근본 원인 진단</li>
                <li>02_신속한 회복과 재활의 경로 제시</li>
              </ul>
              <p className="py-5 text-blue-500">
                <a
                  href="https://www.fittobe.ac/course/course_list.jsp?cid=117698"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  상세 페이지 바로 가기
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/SFMA_CA_Assessment_2900px-5216.jpg"
                alt="SFMA L1/L2 이미지"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* FCS */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 order-1">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/FMS_Arizona_2900px-9020.jpg"
                alt="FCS 이미지"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-8 order-2">
            <div className="w-full text-center">
              <h2 className="text-2xl font-semibold text-gray-800 py-9">FCS</h2>
              <ul className="text-gray-700 space-y-1 list-inside">
                <li>01_퍼포먼스의 약한 고리 탐색</li>
                <li>02_효과적 퍼포먼스 트레이닝 가이드</li>
              </ul>
              <p className="py-5 text-blue-500">
                <a
                  href="https://www.fittobe.ac/course/course_list.jsp?cid=117698"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  상세 페이지 바로 가기
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* YBT */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 order-2 md:order-1">
            <div className="w-full text-center">
              <h2 className="text-2xl font-semibold text-gray-800 py-9">YBT</h2>
              <ul className="text-gray-700 space-y-1 list-inside">
                <li>01_정밀 측정을 통한 개선 여부 판단</li>
                <li>02_상체 및 하체의 균형 테스트</li>
              </ul>
              <p className="py-5 text-blue-500">
                <a
                  href="https://www.fittobe.ac/course/course_list.jsp?cid=117698"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  상세 페이지 바로 가기
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/img_seminar_ybt.jpg"
                alt="YBT 이미지"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* BREATHING */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 order-1">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/img_seminar_breathing_goal.jpg"
                alt="BREATHING 이미지"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-8 order-2">
            <div className="w-full text-center">
              <h2 className="text-2xl font-semibold text-gray-800 py-9">
                BREATHING
              </h2>
              <ul className="text-gray-700 space-y-1 list-inside">
                <li>01_호흡기능 제한을 테스트하는 방법</li>
                <li>02_호흡 재훈련 운동법</li>
              </ul>
              <p className="py-5 text-blue-500">
                <a
                  href="https://www.fittobe.ac/course/course_list.jsp?cid=117698"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  상세 페이지 바로 가기
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* FMS사 기타 강좌 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 order-2 md:order-1">
            <div className="w-full text-center">
              <h2 className="text-2xl font-semibold text-gray-800 py-9">
                FMS사 기타 강좌
              </h2>
              <ul className="text-gray-700 space-y-1 list-inside">
                <li>01_보강 강좌 무제한 시청</li>
                <li>02_인디안 클럽, CSA, 힙힌지 등</li>
              </ul>
              <p className="py-5 text-blue-500">
                <a
                  href="https://www.fittobe.ac/course/course_list.jsp?cid=117698"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  상세 페이지 바로 가기
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/Landing-Page-ImageStarting-Point.jpg"
                alt="FMS사 기타 강좌 이미지"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4">
        <hr className="border-2 border-gray-800 w-3/4 mx-auto" />
      </div>
    </section>
  )
}

export default FMSInfo2
