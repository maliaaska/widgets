import React from "react";
// eslint-disable-next-line
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
// eslint-disable-next-line
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
// eslint-disable-next-line
export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
