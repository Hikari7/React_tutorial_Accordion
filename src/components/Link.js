import React from "react";

//Headerに必要なpropsを作る
//propsはオブジェクト{}で囲まないとエラーが出ちゃう？？？？？？？？？？
const Link = ({ className, href, children }) => {
  //event handler使ったら必ずevent object受け取る
  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

