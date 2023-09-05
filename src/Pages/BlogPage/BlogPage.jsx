import { BannerSection } from "Components/components/BannerSection/BannerSection"
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"


export const BlogPage = () => {
  const data = useContext(DataContext).blogspage;
  return (
    <>
      <BannerSection data={data.bannersection}/>
      
    </>
  )
}