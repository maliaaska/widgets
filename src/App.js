import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
//  eslint-disable-next-line
const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color of Red",
    value: "red",
  },
  {
    label: "The Color of Green",
    value: "green",
  },
  {
    label: "The Color of Blue",
    value: "blue",
  },
];
// eslint-disable-next-line
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
