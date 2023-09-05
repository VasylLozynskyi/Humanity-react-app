import { BannerSection } from "Components/components/BannerSection/BannerSection"
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import { ContactUsContentSectionContainer } from "./components/containers/ContactUsContentSectionContainer";
import { ContactUsFormContainer } from "./components/containers/ContactUsFormContainer";

export const ContactUsPage = () => {
  const data = useContext(DataContext).contactuspage;
  return (
    <>
      <BannerSection data={data.bannersection}/>
      <section className="container content-wrapper">
        <div className="flex-block">
          <ContactUsContentSectionContainer data={data.contentsection.content}/>
          <ContactUsFormContainer data={data.contentsection.form} />
        </div>
      </section>
    </>
  )
}