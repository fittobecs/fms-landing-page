import PricingColumn from "./PricingColumn"

import { tiers } from "@/data/pricing"

const Pricing: React.FC = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center">
      {tiers.map((tier, index) => (
        <div key={tier.name}>
          <PricingColumn key={tier.name} tier={tier} highlight={index === 0} />
        </div>
      ))}
    </div>
  )
}

export default Pricing
