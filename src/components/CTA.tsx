"use client"

import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
  const handlePaymentClick = () => {
    window.open(
      "https://www.fittobe.ac/course/course_view.jsp?id=174227&cid=116081#course-view-174227",
      "_blank",
      "noopener,noreferrer"
    )
  }

  const handleDetailsClick = () => {
    window.open(
      "https://www.fittobe.ac/main/page.jsp?code=test_12121&ln=FMS_main",
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaDetails.heading}
            </h2>

            <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

            <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
              <button
                type="button"
                className="text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-4  
  font-medium rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 dark:bg-white dark:hover:bg-gray-200"
                onClick={handlePaymentClick}
              >
                FMS 결제하기
              </button>
              <button
                type="button"
                className="text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 
  font-medium rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 dark:bg-white dark:hover:bg-gray-200 "
                onClick={handleDetailsClick}
              >
                상세 페이지
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
