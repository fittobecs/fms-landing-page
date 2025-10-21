import { tiers } from "@/data/pricing"
import { BsPlusCircleFill } from "react-icons/bs"
import PricingColumn from "./PricingColumn"
import PricingColumn2 from "./PricingColumn2"

const Pricing: React.FC = () => {
  return (
    <div>
      <div className="max-[761px]:block hidden">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <PricingColumn tier={tiers[0]} />
          <div className="flex items-center justify-center">
            <BsPlusCircleFill className="h-8 w-8 md:h-12 md:w-12 text-white bg-red-600 rounded-full" />
          </div>
          <PricingColumn tier={tiers[1]} />
        </div>
      </div>
      <div className="min-[762px]:block hidden">
        <PricingColumn2 />
      </div>
    </div>
  )
}

export default Pricing
