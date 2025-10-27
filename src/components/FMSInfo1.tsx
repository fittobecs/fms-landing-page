const FMSInfo1: React.FC = () => {
  return (
    <div id="features" className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            FMS사의 모든 온라인 강좌를 수강하는,
            <br />
            FMS ACADEMY
          </h1>

          <div className="relative w-full gap-y-4">
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/eJpbt3efeR8"
                title="FMS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-10">
            <span className="font-bold">1천만원 값어치</span>의 FMS사의 모든
            강좌를 <span className="font-bold">FMS ACADEMY로 한 번에!</span>
            <br />
            국제 자격증 7가지부터 매년 추가되는 FMS사의 새로운 강좌까지
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-center">
          {/* First Section */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              &quot;FMS 아카데미를 발표하게 되어 매우 기쁘고 자랑스럽게
              생각합니다.
              <br /> 1980년대말부터 저희는 운동선수, 환자는 물론 일반인들이 더
              잘 움직이고 더 자주 움직일 수 있도록 돕는{" "}
              <span className="font-bold">체계적인 접근법으로 FMS를 시작</span>
              했습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              이를 통해 여러분의{" "}
              <span className="font-bold">
                전문성을 향상시킬 수 있는 길을 열어
              </span>
              드리고자 합니다.
              <br />
              <span className="font-bold">
                FMS 아카데미는 FUNCTIONAL MOVEMENT SYSTEM의 모든 커리큘럼
              </span>
              을 담고 있으며, 여러분의 요구에 따라 교육을 더욱 쉽게 접할 수 있는
              경로를 제공합니다.&quot;
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
