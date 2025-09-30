import PricingColumn from "./PricingColumn"

import { tiers } from "@/data/pricing"

const Pricing: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0">
      {tiers.map((tier, index) => (
        <div key={tier.name}>
          <PricingColumn key={tier.name} tier={tier} highlight={index === 0} />
        </div>
      ))}
    </div>
  )
}

export default Pricing
