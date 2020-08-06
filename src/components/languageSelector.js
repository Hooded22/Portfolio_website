import React, {useContext } from "react";
import { MyContext } from "./contexts"

const LanguageSelector = () => {
    const setLanguage = useContext(MyContext).language[1];
  
    return (
      <div className="languageSelector">
        <button
          title="Zmień język na Polski"
          onClick={() => setLanguage("PL")}
        >
          PL
        </button>
        <span>/</span>
        <button
          title="Change language to English"
          onClick={() => setLanguage("EN")}
        >
          EN
        </button>
      </div>
    )
  }

  export default LanguageSelector;