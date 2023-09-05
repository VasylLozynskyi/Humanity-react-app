import { useContext } from "react";
import { DataContext } from "Components/Context/DataContext";
import { LicensesContentSection } from "./components/LicensesContentSection";
import { BannerSection } from "Components/components/BannerSection/BannerSection";

export const LicensesPage = () => {
  const data = useContext(DataContext).licensespage;

  return (
    <>
      <BannerSection data={data.bannersection} />
      <section className="container content-wrapper">
        <LicensesContentSection data={data.contentsection} />
      </section>
    </>
  );
};
