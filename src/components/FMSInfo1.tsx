const FMSInfo1: React.FC = () => {
  return (
    <div id="features" className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-8xl font-black text-gray-800 mb-3 leading-tight">
            FMS ACADEMY
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
            FMS 사의 모든 온라인을 한 번에
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
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-center">
          <section className="w-full bg-white py-2 px-4 flex flex-col items-center text-center font-sans">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block border tracking-wide border-red-500 text-red-500 text-base font-bold px-5 py-1.5 rounded-full bg-red-50">
                1,000만원 상당의 가치
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm md:text-xl tracking-wide mb-3 font-bold">
              FMS사 7가지 국제 자격증을 한 번에
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-5 tracking-wide leading-tight">
              지금 <span className="text-red-500">145만원</span>
              으로 시작
            </h1>

            {/* Price breakdown */}
            <p className="text-gray-700 text-lg mb-8">
              <strong>등록비 112만원</strong>{" "}
              <span className="text-gray-500">
                + 연회비 33만원 · 1년간 무제한 수강
              </span>
            </p>

            {/* Divider */}
            <div className="w-10 h-0.5 bg-red-500 mb-8" />

            {/* Quote */}
            <blockquote className="max-w-xl text-gray-500 italic text-base tracking-wide leading-relaxed mb-3">
              &ldquo;FMS 아카데미를 발표하게 되어 매우 기쁘고 자랑스럽게
              생각합니다.
              <br />
              이를 통해 여러분의 전문성을 향상시킬 수 있는 길을 열어드리고자
              합니다.&rdquo;
            </blockquote>

            <p className="text-gray-400 text-base  tracking-widest uppercase mb-10 font-bold">
              — 공동 창립자 DR. LEE BURTON
            </p>

            {/* CTA Button */}
            <a
              href="https://www.fittobe.ac/course/course_view.jsp?id=174227&cid=116081#course-view-174227"
              target="_blank"
              className="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 transition-colors duration-150 text-white text-xl font-bold px-16 py-5 rounded-lg mb-3 w-full max-w-sm text-center"
            >
              지금 신청하기 →
            </a>

            <p className="text-gray-400 text-base mb-12">
              클릭 후 자격과정 상세 페이지로 이동합니다
            </p>

            {/* Stats Row */}
            <div className="flex items-start justify-center gap-3 md:gap-12 w-full max-w-2xl">
              <div className="flex flex-col items-center gap-1">
                <span className="text-gray-400 text-sm">과정 수</span>
                <span className="text-gray-900 text-xl font-bold">
                  7가지 자격증
                </span>
              </div>

              {/* Dot separator */}
              <div className="mt-5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />

              <div className="flex flex-col items-center gap-1">
                <span className="text-gray-400 text-sm">수강 기간</span>
                <span className="text-gray-900 text-xl font-bold">
                  1년 무제한
                </span>
              </div>

              {/* Dot separator */}
              <div className="mt-5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />

              <div className="flex flex-col items-center gap-1">
                <span className="text-gray-400 text-sm">가격</span>
                <span className="text-red-500 text-xl font-bold">
                  총 145만원
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default FMSInfo1
