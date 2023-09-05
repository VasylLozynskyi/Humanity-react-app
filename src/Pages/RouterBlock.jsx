import { Route, Routes } from "react-router-dom"
import { Header } from "Components/Header/Header"
import { AboutUsPage } from "./AboutUSPage/aboutUsPage"
import { HomePage } from "./HomePage/HomePage"
import { ContactUsPage } from "./ContactUsPage/ContactUsPage"
import { TeamPage } from "./TeamPage/TeamPage"
import { BlogPage } from "./BlogPage/BlogPage"
import { VolunteerPage } from "./Volunteerpage/VolunteerPage"
import { LicensesPage } from "./LicensesPage/LicensesPage"
import { Error404Page } from "./404Page/Error404Page"
import { FaqPage } from "./FaqPaga/FaqPage"
import { Footer } from "Components/Footer/Footer"

export const RouterBlock = () => {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contacts" element={<ContactUsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/FAQ" element={<FaqPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/licenses" element={<LicensesPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}