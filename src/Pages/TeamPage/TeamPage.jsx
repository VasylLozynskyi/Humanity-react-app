import { BannerSection } from "Components/components/BannerSection/BannerSection"
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import { TeamContentSection } from "./components/TeamContentSection";
import { TeamJoinSection } from "./components/TeamJoinSection";


export const TeamPage = () => {
  const data = useContext(DataContext).teampage;
  return (
    <>
    <BannerSection data={data.bannersection} />
    <section className="container content-wrapper">
      <TeamContentSection data={data.teamdata} />
    </section>
    <TeamJoinSection data={data.joinsection} />
    </>
  )
}