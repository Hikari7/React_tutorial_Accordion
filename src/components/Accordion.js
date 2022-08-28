import React, { useState } from "react";

//Hooks書いていく
const Accordion = ({ items }) => {
  //分割代入
  //activeIndexはpart of state
  //setActiveIndesはsetActiveindexを呼んでindexのを更新する
  //useStateでデフォルト値に
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
    //これが呼び出されるとそのindexはprovideされて、const Accordingがre-renderされる (null)に戻る
  };

  //もしindexがactiveIndexと同じだったらactiveを付与して、そうじゃなかったら空
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
};

export default Accordion;
