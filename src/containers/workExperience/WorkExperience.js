import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

export default function WorkExperience() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  console.log();
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  var str = "experience." + i + ".role";
                  return (
                    <ExperienceCard
                      key={i}        
                      isDark={isDark}
                      cardInfo={{
                        company: t(["experience.0.company"]),
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: t(str),
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
