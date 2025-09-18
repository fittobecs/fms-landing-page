const FMSInfo1: React.FC = () => {
  return (
    <div
      id="features"
      className="w-full py-16"
      style={{ backgroundColor: "rgb(239, 239, 239)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            FMS사의 모든 온라인 강좌를
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            수강하는, <span className="tracking-wider">FMS ACADEMY</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FMS사의 모든 온라인 강좌를 수강하는, FMS ACADEMY 1천만원 값어치의
            국제 자격증 7가지, 매년 추가 되는 FMS사의 새로운 강좌들을 한 번에!
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-center">
          {/* First Section */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FMS 아카데미에 오신 것을 환영합니다 &quot;FMS 아카데미를 발표하게
              되어 매우 기쁘고 자랑스럽게 생각합니다. 1980년대말부터 저희는
              운동선수, 환자는 물론 일반인들이 더 잘 움직이고더 자주 움직일 수
              있도록 돕는 체계적인 접근법으로 FMS를 시작했습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              그동안 우리는 동료들의 피드백, 연구 결과, 그리고 우리의 실제
              경험을 바탕으로 시스템을 지속적으로 발전시키고 개선해 왔습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              이를 통해 여러분의 전문성을 향상시킬 수 있는 길을 열어드리고자
              합니다. FMS 아카데미는 FUNCTIONAL MOVEMENT SYSTEM의 모든
              커리큘럼을 담고 있으며, 여러분의 요구에 따라 교육을 더욱 쉽게 접할
              수 있는 경로를 제공합니다.&quot;
            </p>
          </div>

          {/* Quote Attribution */}
          <div className="flex justify-center">
            <div className="pb-2">
              <p className="text-lg font-medium text-gray-800 tracking-wide">
                -공동 창립자 DR. LEE BURTON-
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FMSInfo1
