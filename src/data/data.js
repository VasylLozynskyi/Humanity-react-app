import { companyConsaltPhoneNumber, companyEmail, companySupportEmail, companysupportPhoneNumber, phoneNumber } from "./companyInfo";
import { aboutus_banner, blogs_banner, contactus_banner, error404_banner, faq_banner, home_banner, licenses_banner, team_banner, volunteer_banner } from "./importbanners";
import { arrow_icon, brash_icon, care_icon, education_icon, food_icon, hand_icon, medicine_icon, message_icon, phonesupport_icon, water_icon, world_icon } from "./importIcons";
import { aboutus_child_image, faq_block_BgImage, hand_flower_image, volunteer_image1, volunteer_image2 } from "./importImages";
import { organizationsVolunteers } from "./organisationsVolunteers";
import { teamData } from "./teamData";

export const data = {
  header: {
    tell: phoneNumber,
    mail: companyEmail,
  },
  btn: "donate",
  navigation: [
    { key: 1, name: "Home", link: "/" },
    { key: 2, name: "About Us", link: "/aboutus" },
    { key: 3, name: "Pages", link: "/pages" },
    { key: 4, name: "Contacts", link: "/contacts" },
  ],
  submenu: [
    { key: 1, name: "Team", link: "/team" },
    { key: 2, name: "Volunteer", link: "/volunteer" },
    { key: 3, name: "Blogs", link: "/blogs" },
    { key: 4, name: "FAQ", link: "/FAQ" },
    { key: 5, name: "Licenses", link: "/licenses" },
  ],
  footer: {
    text: "Care about people to transforming their lives and exudes a positives Impressiono believe. fundraising NGO organizations.",
  },
  homepage: {
    bannersection: {
      title: "Being Life Saver For Someone",
      subtitle: "Need Help...",
      urlBgImage: home_banner,
      text: "BELLOW POVETRY LINE",
      nameBtn1: "Donate",
      nameBtn2: "Discover",
    },
    aboutusintrosection: {
      education: {
        title: "Education",
        text: "Below Poverty Line is enchmark used by the government of India economic disadvantege.",
      },
      volunteer: {
        title: "Become a Volunteer",
        text: "Below Poverty Line is enchmark used by the government",
        nameLink: "JOIN ORGANIZATION",
        linkNavigate: "/volunteer",
      }
    },
    aboutussection: {
      title: "Help People, Our Main Goals",
      subtitle: "About Us",
      text: {
        paragr1: "Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        paragr2: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining when an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.",
      },
      donation: [
        {key: 1, title: "Food Donation"},
        {key: 2, title: "Water Supplay"},
        {key: 3, title: "Money Donation"},
        {key: 4, title: "Education Donation"},
        {key: 5, title: "Dress Donation"},
        {key: 6, title: "Toys Donation"},
      ],
      dontitle: "Total Donation",
      textcollection: "Collection",
      collectioncount: "$5",
      textgoal: "Goal",
      goalcount: "$10",
      textM: "M",
    },
    whatwedosection: {
      title: "We do it for People in Need",
      subtitle: "What we do",
      content: [
        {key: 1, src: medicine_icon, title: "Medicine Help", text: "Centuries but also the leap into electronic typesetting, remaining specimen book."},
        {key: 2, src: water_icon, title: "Water Delivery", text: "Centuries but also the leap into electronic typesetting, remaining specimen book."},
        {key: 3, src: care_icon, title: "We Care About", text: "Centuries but also the leap into electronic typesetting, remaining specimen book."},
        {key: 4, src: food_icon, title: "Food Delivery", text: "Centuries but also the leap into electronic typesetting, remaining specimen book."},
        {key: 5, src: world_icon, title: "Spread The World", text: "Centuries but also the leap into electronic typesetting, remaining specimen book."},
        {key: 6, src: education_icon, title: "Learn Education", text: "Centuries but also the leap into electronic typesetting, remaining specimen book."},
      ]
    },
  },
  licensespage: {
    bannersection: {
      title: "Licenses",
      subtitle: "Free Assets...",
      urlBgImage: licenses_banner,
    },
    contentsection: {
      title: "Icon & Graphics",
      subtitle:
        "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below",
      prev: "Phosphor Icons :  Licenses",
      body: {
        title: "Photography",
        text: "Licenses",
        prev1: "Unsplash",
        content_prev1:
          "Image1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25, Image 26, Image 27, Image 28, Image 29, Image 30, Image 31, Image 32, Image 33, Image 34, Image 35, Image 36, Image 37, Image 38, Image 39, Image 40, Image 41, Image 42, Image 43",
        prev2: "pexels",
        content_prev2:
          "Image1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19",
      },
      fonts: {
        title: "Font",
        content:
          "Walfare template uses free licensed Google Fonts. Please check",
        contentbold: "Shippori Mincho, Work Sans",
        and: "and",
        contentbold2: "Sue Ellen Francisco.",
      },
    },
  },
  error404page: {
    title: "Page Not Found",
    subtitle: "404",
    urlBgImage: error404_banner,
  },
  faqpage: {
    bannersection: {
      title: "General Questions",
      subtitle: "Faq",
      urlBgImage: faq_banner,
    },
    contentsection: {
      asidemail: {
        title: "Any Questions?",
        subtitle:
          "We are always here to help the needy peoples any where in the world",
        urlBgImage: faq_block_BgImage,
        nameBtn: "Mail your question",
      },
      contentpart1: [
        {
          key: 1,
          question: "Health in other Countries?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 2,
          question: "We Build and Create?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 3,
          question: "Water Delivery in Africa?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 4,
          question: "How to became a volunteer?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 5,
          question: "How Do I Make Donation?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 6,
          question: "Health in other Countries?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
      ],
      contentpart2: [
        {
          key: 1,
          question: "Water Delivery in Africa?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 2,
          question: "How to became a volunteer?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 3,
          question: "How Do I Make Donation?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
        {
          key: 4,
          question: "Health in other Countries?",
          answer:
            "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        },
      ],
    },
  },
  contactuspage: {
    bannersection: {
      title: "Get in Touch",
      subtitle: "Contact",
      urlBgImage: contactus_banner,
    },
    contentsection: {
      content: {
        title: "Get in Touch With Us",
        subtitle: "Contact",
        text: "Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        contacts: [
          {key: 1, title: "Message", subcontent: companySupportEmail, urlIcon: message_icon},
          {key: 2, title: "Contact Us", subcontent: companysupportPhoneNumber, urlIcon: phonesupport_icon},
        ],
        followsection: {
          title: "Follow us on social media",
          text: "Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.",
        }
      },
      form: {
        namePlaceholder: "Enter Your Name*",
        phonePlaceholder: "Phone Number*",
        emailPlaceholder: "Email Address*",
        messagePlaceholder: "Your Message*",
        nameBtnSubmit: "Submit",
        error_name: "Name must be at least 3 characters",
        error_phone: "Enter correct phone number",
        error_email: "Enter correct email address",
        error_message: "Message must be at least 5 characters",
      }
    },
  },
  formpopupsubmitsuccess: {
    text: "Form sent successfully.",
  },
  volunteerpage: {
    bannersection: {
      title: "Become a Volunteer",
      subtitle: "Need Your Heartful Help.",
      urlBgImage: volunteer_banner,
    },
    infosection: {
      subtitle: "Help First",
      content1: {
        title: "Let's help together",
        text1: "Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        text2: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining when an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.",
        nameBtn: `CALL: ${companyConsaltPhoneNumber}`,
        number: companyConsaltPhoneNumber,
        urlImage1: volunteer_image1,
      },
      content2: {
        title: "More People More impact",
        text: "Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        urlImage2: volunteer_image2,
      },
    },
    becomevolunteersection: {
      subtitle: "Help The People With us",
      title: "Need Your Heartful Help",
      text1: "Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      text2: "Bring to the table win-win survival strategies to proactive domination.  is on the runway heading towards a streamlined cloud solution. User gener eal-time will have multiple touch points for offshoring",
      points: [
        {key: 1, number: "01", title: "Create a personal profile", text: "Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis."},
        {key: 2, number: "02", title: "Add your organization", text: "Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis."},
        {key: 3, number: "03", title: "Add volunteer opportunities", text: "Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis."},
        {key: 4, number: "04", title: "You are ready to recruit!", text: "Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis."},
      ],
      nameBtn: "Get Started",
      form: {
        title: "Complete the Form",
        subtitle: "Fill Form and Became Volunteer",
        namePlaceholder: "Enter Your Name*",
        phonePlaceholder: "Phone Number*",
        emailPlaceholder: "Email Address*",
        messagePlaceholder: "About Occupation*",
        addressPlaceholder: "Address*",
        nameBtnSubmit: "Submit",
        error_name: "Name must be at least 3 characters",
        error_phone: "Enter correct phone number",
        error_email: "Enter correct email address",
        error_message: "Message must be at least 5 characters",
        error_address: "Address must be at least 5 characters",
      }
    }
  },
  teampage: {
    bannersection: {
      title: "Team Member",
      subtitle: "Humanity Peoples...",
      urlBgImage: team_banner,
    },
    teamdata: teamData,
    joinsection: {
      title: "Join Our Organization",
      subtitle: "Beacame Volonteer",
      text: "Save the Children believes every child deserves a future. In the U.S. and around the world, we give children a healthy start in life.",
      nameBtn: "Join Us Now",
      linkBtn: "/volunteer",
    },
  },
  aboutuspage: {
    bannersection: {
      title: "About our Organization",
      subtitle: "What We Do...",
      urlBgImage: aboutus_banner,
    },
    contentsection:{
      solutionsection: {
        title: "Solutions to Help People in Need and Save the Planet",
        subtitle: "About Us",
        text: "Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        letter: "Save the Children believes every child deserves a future.",
        nameBtn: "More About",
        imagechild: aboutus_child_image,
        icon: brash_icon,
        speach: "He is truly great who has a greit charity."
      },
      organizationssection: organizationsVolunteers,
      goal_mission_section: {
        goal: {
          title: "Our Goal",
          text: "Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book.",
          tagarrow: arrow_icon,
          tags: [
            {key: 1, title: "Make Donation"},
            {key: 2, title: "Donation Reached 10M"},
            {key: 3, title: "Education For All"},
            {key: 4, title: "Become A Volunteer"},
            {key: 5, title: "Food For Poor People dayle"},
          ],
          text2: "Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book.",
        },
        mission: {
          title: "Our Mission",
          text: "Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book.",
          image: hand_flower_image,
          numbertext: "20000+",
          subnumbertext: "Thousand People Helped",
        }
      }
    },
    volunteersection: {
      title: "Meet Pur Volunteers",
      subtitle: "Team",
      teamData: teamData,
      joinblock: {
        icon: hand_icon,
        title: "Become a Volunteer",
        text: "Centuries but also the leap  electtypesetting, remaining",
        nameBtn: "Join us today",
        linkBtn: "/volunteer",
      },
    },
  },
  blogspage: {
    bannersection: {
      title: "",
      subtitle: "",
      urlBgImage: blogs_banner,
    },
    bannerblock: {
      
    }
  },
};
