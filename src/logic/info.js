import { reactive } from "vue";
//Could have just used Sanity client
const PROJECT_ID = "9abgiydw";
const DATASET = "production";
const USE_CDN = false;
export const queryToUrl = (query) =>
  `https://${PROJECT_ID}.${
    USE_CDN ? "apiCdn" : "api"
  }.sanity.io/v2023-06-20/data/query/${DATASET}?query=${encodeURIComponent(
    query.replace(/\s{2,}/g, " ")
  )}`;
const info = reactive({
  name: "Johnson Ogbonna",
  firstName: "Johnson",
  resumeLink: null,
  email: "artspire@gmail.com",
  phoneNumber: "+234 906 1697 773",
  description:
    "Nigeria based UX designer with passion for creating enjoyable user centered products. Currently working as a freelancer.",
  numBrandingProjects: 100,
  numWebsiteDesigns: 5,
  numMobileAppDesigns: 2,
  numArtsAndIllustrations: 5,
  whatsappNumber: "+234 906 1697 773",
  whatsappMessageTemplate: "Hi, Johnson. I'd like to ",
  twitterLink: null,
  linkedInLink: null,
  instagramLink: null,
  photoURL: null,
});
if (typeof fetch !== "undefined" && typeof localStorage !== "undefined") {
  /**Update Info if possible */
  const updateInfo = (e) => {
    for (let i in e) {
      info[i] = e[i];
    }
  };
  const KEY = "artspire-portfolio-1";
  try {
    const k = localStorage.getItem(KEY);
    if (k) {
      const m = JSON.parse(k);
      updateInfo(m);
    }
  } catch (e) {
    console.error(e);
  }
  fetch(
    queryToUrl(
      `*[_type=='person']{name,firstName,resumeLink,
        description,email,phoneNumber,
        "numBrandingProjects":count(*[_type == 'portfolio' && (!defined(types) || "Brand" in types)]),
        "numMobileAppDesigns":count(*[_type == 'portfolio' && (!defined(types) || "Mobile App" in types)]),
        "numWebsiteDesigns":count(*[_type == 'portfolio' && (!defined(types) || "UI/UX" in types && !("Mobile App" in types))]),
        "numArtsAndIllustrations":count(*[_type == 'portfolio' && (!defined(types) || "Art & Illustration" in types)]),
        whatsappNumber,twitterLink,
        linkedInLink,instagramLink,photoURL}`
    )
  ).then(async (e) => {
    const x = (await e.json()).result[0];
    localStorage.setItem(KEY, JSON.stringify(x));
    updateInfo(x);
  });
}
export default info;
