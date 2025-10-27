"use client"
import Image from "next/image"
import React from "react"

const LogoSlider: React.FC = () => {
  // 로고 이미지와 URL을 매핑한 배열
  const logos = [
    {
      src: "/images/logos/balance.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=173234&cid=117698#course-view-173234",
    },
    {
      src: "/images/logos/csa2.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=181327&cid=117698#course-view-181327",
    },
    {
      src: "/images/logos/fcs.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=161408&cid=117698#course-view-161408",
    },
    {
      src: "/images/logos/fms_level_1.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=161325&cid=117698#course-view-161325",
    },
    {
      src: "/images/logos/fms_level_2.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=161326&cid=117698#course-view-161326",
    },
    {
      src: "/images/logos/indian_clubs.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=163547&cid=117698#course-view-163547",
    },
    {
      src: "/images/logos/sfma_1_online.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=161405&cid=117698#course-view-161405",
    },
    {
      src: "/images/logos/sfma_2_online.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=161406&cid=117698#course-view-161406",
    },
    {
      src: "/images/logos/stability_logo.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=170332&cid=117698#course-view-170332",
    },
    {
      src: "/images/logos/ybt_logo.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=161409&cid=117698#course-view-161409",
    },
  ]

  // 무한 루프 효과를 위해 로고 배열을 두 배로 복제
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="overflow-hidden w-full">
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%); /* 2배 복제로 인해 1/2 이동 */
          }
        }

        .animate-slide {
          display: flex;
          animation: slide 50s linear infinite; /* 데스크톱: 25초 */
          will-change: transform; /* 애니메이션 성능 최적화 */
        }

        .animate-slide > div {
          flex: 0 0 auto; /* 각 로고의 크기 고정 */
        }

        .logo-image {
          border-radius: 12px; /* 이미지 끝 부분 둥글게 */
          overflow: hidden; /* 둥근 모서리 밖으로 이미지가 삐져나오지 않도록 */
        }

        /* 모바일 화면 (762px 이하)에서 애니메이션 속도 2배 */
        @media screen and (max-width: 762px) {
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-326%); /* 모바일에서도 동일한 이동 거리 */
            }
          }
          .animate-slide {
            animation: slide 15s linear infinite; /* 모바일: 12.5초 (2배 빠름) */
          }
        }
      `}</style>
      <div className="flex animate-slide whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={`Logo ${(index % logos.length) + 1}`}
                width={190}
                height={96}
                className="object-cover logo-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoSlider
