import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Polish",
    value: "pl",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Spanish",
    value: "es",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]); //remember to always set up initial selection- in this case a first object of options
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Text </label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
