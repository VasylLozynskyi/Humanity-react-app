import { chsubContentContactsUs } from "helpers/functions";
import { ContactUsContentSection } from "../ContactUsContentSection";

export const ContactUsContentSectionContainer = ({ data }) => {
  return (
      <ContactUsContentSection
        data={data}
        pathFn={(value) => chsubContentContactsUs(value)}
      />
  );
};
