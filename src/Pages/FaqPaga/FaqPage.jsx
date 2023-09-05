import { BannerSection } from "Components/components/BannerSection/BannerSection"
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import { FaqContentSection } from "./components/FaqContentSection"

export const FaqPage = () => {
  const data = useContext(DataContext).faqpage;
  return (
    <>
      <BannerSection data={data.bannersection} />
      <section className="container content-wrapper">
        <FaqContentSection data={data.contentsection} />
      </section>
    </>
  )
}