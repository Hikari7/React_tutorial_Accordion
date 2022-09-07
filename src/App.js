import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
const App = () => {
  //userが現在選択されている項目を変更するたびに選択された項目を変更する、のでuseState使う
  //onSelectedChange=選択された状態の一部を更新する関数
  const [selected, setSelected] = useState(options[0]);

  //Route componentをそれぞれ分けて書く
  //whenever we provide on inside of another tag, that inner element right there
  //is provided to the outer one as a prop called children

  //propsも渡さないとエラー出てしまう(dropdown component)
  //useStateも定義しとく(defaule valueはoptions[0])
  return (
    <div>
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
