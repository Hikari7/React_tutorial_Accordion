import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

//items={items}はitemsという名前のpropsとして通信している
export default () => {
  //userが現在選択されている項目を変更するたびに選択された項目を変更する、のでuseState使う
  const [selected, setSelected] = useState(options[0]);

  //onSelectedChange=選択された状態の一部を更新する関数
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
