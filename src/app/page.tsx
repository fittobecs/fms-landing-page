import Container from "@/components/Container"
import CTA from "@/components/CTA"
import FmsIcons from "@/components/FmsIcons"
import FMSInfo1 from "@/components/FMSInfo1"
import FMSInfo2 from "@/components/FMSInfo2"
import Hero from "@/components/Hero"
import Logos from "@/components/Logos"
import Pricing from "@/components/Pricing/Pricing"
import Section from "@/components/Section"
import UsageCases from "@/components/UsageCases"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <FMSInfo1 />
        <FMSInfo2 />
        <FmsIcons />
        <Section
          id="pricing"
          title="멤버십 가격"
          description="FMS사의 전 교육 과정 기한 동안 무제한 수강 가능"
        >
          <Pricing />
          <div className="text-center">
            <p className="text-blue-500">
              <a
                href="https://www.fittobe.ac/course/course_view.jsp?id=174227&cid=116081#course-view-174227"
                target="_blank"
                rel="noopener noreferrer"
              >
                상세 페이지 바로 가기
              </a>
            </p>
          </div>
        </Section>
        <div className="mt-16 px-4">
          <hr className="border-2 border-gray-800 w-3/4 mx-auto" />
        </div>
        <Section id="usage-case" title="실제 사용 사례" description="">
          <UsageCases />
        </Section>
        <CTA />
      </Container>
    </>
  )
}

export default HomePage
