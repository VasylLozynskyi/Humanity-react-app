import pphone_icon from "assets/icons/tell_icon.png"
import mmail_icon from "assets/icons/mail_icon.png"
import iinsta_icon from "assets/icons/Insta.png"
import ffb_icon from "assets/icons/Fb.png"
import ttwit_icon from "assets/icons/Twiter.png"
import ppint_icon from "assets/icons/Pintrest.png"
import { fb_link, insta_link, pintrest_link, twit_link } from "./socaillinks"

export const phone_icon = {icon: pphone_icon, alt: "phone_icon"};
export const mail_icon = {icon: mmail_icon, alt: "mail_icon"};

export const socialIcons = [
  {key: 1, link: insta_link, icon: iinsta_icon, alt: "instagram_icon"},
  {key: 2, link: fb_link, icon: ffb_icon, alt: "fb_icon"},
  {key: 3, link: twit_link, icon: ttwit_icon, alt: "twitter_icon"},
  {key: 4, link: pintrest_link, icon: ppint_icon, alt: "pintrest_icon"}
];
