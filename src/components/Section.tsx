import SectionTitle from "./SectionTitle"

interface Props {
  id: string
  title: string
  description: string
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  title,
  description,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <section id={id} className="py-12 lg:py-20">
      <div className="mt-16 px-4 mb-12">
        <hr className="border-2 border-gray-800 w-3/4 mx-auto" />
      </div>
      <SectionTitle>
        <h2 className="text-center mb-4">{title}</h2>
      </SectionTitle>
      <p className="mb-12 text-center">{description}</p>
      {children}
    </section>
  )
}

export default Section
