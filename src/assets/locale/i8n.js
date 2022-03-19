import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// "Inline" English and Arabic translations. 
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      greeting: "Hi! I'm Chris",
      subtitle1 : "🎮 Game designer with a professional and personal passion for all things gaming.",
      subtitle2 : "🗾 Based in Osaka, Japan",
      subtitle3 : "💼 Actively looking for opportunities.",
      experience: [
        {
          role: "Senior Game Designer",
          company: "Juego Studios",
          
          date: "Jun 2019 – Nov 2020",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          descBullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          ]
        },
        {
          role: "Game Designer",
          company: "Juego Studios",
        
          date: "Jun 2018 – Jun 2019",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          role: "Game Producer",
          company: "Juego Studios",
    
          date: "Jan 2018 – Jun 2018",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    },
  },
  ja: {
    translation: {
        greeting: "こんにちは！クリスです",
        subtitle1 : "🎮 ゲームのすべてに専門的かつ個人的な情熱を持っているゲームデザイナー。",
        subtitle2 : "🗾 日本の大阪を拠点とする",
        subtitle3 : "💼 積極的に機会を探しています。",
        experience: [
          {
            role: "JA Senior Game Designer",
            company: "Juego Studios",
            
            date: "Jun 2019 – Nov 2020",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
          },
          {
            role: "JA Game Designer",
            company: "Juego Studios",
          
            date: "Jun 2018 – Jun 2019",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          {
            role: "JA Game Producer",
            company: "Juego Studios",
      
            date: "Jan 2018 – Jun 2018",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ]
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });



export default i18next;