import { BannerSection } from "Components/components/BannerSection/BannerSection"
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import { BecomeVolunteerSection } from "./components/BecomeVolunteerSection";
import { VolunteerInfoSection } from "./components/VolunteerInfoSection";


export const VolunteerPage = () => {
  const data = useContext(DataContext).volunteerpage;

  return (
    <>
    <BannerSection data={data.bannersection}/>
    <section className="container content-wrapper">
      <VolunteerInfoSection data={data.infosection} />
    </section>
    <section className="container content-wrapper">
      <BecomeVolunteerSection data={data.becomevolunteersection} />
    </section>
    </>
  )
}