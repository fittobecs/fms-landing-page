import { IPricing } from "@/types"

export const tiers: IPricing[] = [
  {
    name: "FMS ACADEMY 등록비",
    price: 112,
    unit: "최초 1회",
    url: "https://www.fittobe.ac/course/course_view.jsp?id=174227&cid=116081#course-view-174227",
    features: [
      "FMS 사 모든 온라인 강좌 무제한 수강",
      "매년 새 강좌 추가 업데이트",
      "7가지 자격과정 시험 통과시 자격증 발급",
      "핏투비 아카데미 장비 할인",
      "FMS 데이 무료 참석(1년에 1회)",
      "FMS 프로 앱 사용",
      "6백여개의 멤버십 전용 교정 운동(영문)",
      "오프라인 강좌 재수강 30% 할인",
      "핏투비 회원관리프로그램 무료 사용",
    ],
  },
  {
    name: "연회비",
    price: 33,
    url: "https://www.fittobe.ac/subscribe/index.jsp",
    unit: "년",
    features: [
      "모든 혜택 및 과정 1년 연장",
      "매년 새 강좌 추가 업데이트",
      "1년 33만원으로 모든 혜택 유지",
    ],
  },
]
