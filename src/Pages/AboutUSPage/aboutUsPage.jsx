import { BannerSection } from "Components/components/BannerSection/BannerSection"
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import { AboutUsContentSection } from "./components/AboutUsContentSection";
import { AboutUsTeamSection } from "./components/AboutUsTeamSection";


export const AboutUsPage = () => {
  const data = useContext(DataContext).aboutuspage;
  return (
    <>
      <BannerSection data={data.bannersection} />
      <section className="container content-wrapper">
        <AboutUsContentSection data={data.contentsection}/>
      </section>
      <AboutUsTeamSection data={data.volunteersection} />
    </>
  )
}