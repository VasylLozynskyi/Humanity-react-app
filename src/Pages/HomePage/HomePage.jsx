import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import { AboutUs } from "./components/Aboutus/AboutUs"
import { AboutUsIntro } from "./components/AboutUsIntro/AboutUsIntro"
import { Banner } from "./components/Banner/Banner"
import { WhatWeDo } from "./components/WhatWeDo/WhatWeDo"

export const HomePage = () => {
  const data = useContext(DataContext).homepage;
  return (
    <div className="wrapper">
      <Banner data={data.bannersection} />
      <section className="content-wrapper">
        <AboutUsIntro data={data.aboutusintrosection} />
        <AboutUs data={data.aboutussection} />
        <WhatWeDo data={data.whatwedosection} />
      </section>
    </div>
  )
}