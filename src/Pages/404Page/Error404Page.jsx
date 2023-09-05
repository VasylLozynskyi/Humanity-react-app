import { BannerSection } from "Components/components/BannerSection/BannerSection";
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"

export const Error404Page = () => {
  const data = useContext(DataContext).error404page;
  const stylesRed="subtitlestylered";
  return (
    <>
    <BannerSection  data={data} subTitleRed={stylesRed}/>
    </>
  )
}