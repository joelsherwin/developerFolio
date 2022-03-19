import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

import "./LanguageSwitch.scss";

const LanguageSwitch = () => {

  const { i18n } = useTranslation();


  return (
    <div className="languageSwitchContainer">

    <div>English</div>
    <label className="switch">
      <input
        type="checkbox"
        onChange={(e) => {
          if(i18n.language==="en") i18n.changeLanguage("ja")
          else i18n.changeLanguage("en")
        }}
      />
      <span className="slider round"></span>
    </label>
    <div>日本</div>

    </div>
  );
};
export default LanguageSwitch;
