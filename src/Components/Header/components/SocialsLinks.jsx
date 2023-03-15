import { socialIcons } from "data/importIcons";
import "./socialslinks.scss";

export const SocialLinks = () => {
  return (
    <section className="sociallinks">
      {socialIcons.map((el) => {
        return (
          <a key={el.key} href={el.link} rel="noreferrer" target="_blank">
            <img src={el.icon} alt={el.alt} />
          </a>
        );
      })}
    </section>
  );
};
