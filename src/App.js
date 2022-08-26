import React from "react";
import Accordion from "./components/Accordion";

//Accordinon componentに伝達される
const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framework",
  },
  {
    title: "Why Jungkook is so cool?",
    content: "Because he is cool",
  },
  {
    title: "Who is Hikari's bias?",
    content: "JungKook from BTS",
  },
];

//items={items}はitemsという名前のpropsとして通信している
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
