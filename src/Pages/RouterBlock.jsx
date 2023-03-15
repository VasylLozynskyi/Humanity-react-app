import { Route, Routes } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { AboutUsPage } from "./AboutUSPage/aboutUsPage"
import { HomePage } from "./HomePage/HomePage"

export const RouterBlock = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </>
  )
}