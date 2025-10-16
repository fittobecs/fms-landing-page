"use client"

import { BsFillCheckCircleFill } from "react-icons/bs"

import { IPricing } from "@/types"

interface Props {
  tier: IPricing
  highlight?: boolean
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features, unit, url } = tier
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 shadow-lg">
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-semibold mb-4">{name}</h3>
        <p className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-red-600">
            {typeof price === "number" ? `${price}` : price}
          </span>
          <span className="text-2xl">만원</span>
          {typeof price === "number" && (
            <span className="text-lg font-normal text-gray-600">/{unit}</span>
          )}
        </p>
        <button
          className="w-full py-3 px-4 rounded-full transition-colors bg-primary hover:bg-primary-accent"
          onClick={handleClick}
        >
          구매하기
        </button>
      </div>
      <div className="p-6 mt-1 md:h-[460px]">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PricingColumn
