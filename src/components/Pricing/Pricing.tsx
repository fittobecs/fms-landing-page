import { tiers } from "@/data/pricing"
import { BsPlusCircleFill } from "react-icons/bs"
import PricingColumn from "./PricingColumn"

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <PricingColumn tier={tiers[0]} />
      <div className="flex items-center justify-center">
        <BsPlusCircleFill className="h-8 w-8 text-white bg-red-600 rounded-full" />
      </div>
      <PricingColumn tier={tiers[1]} />
    </div>
  )
}

export default Pricing
