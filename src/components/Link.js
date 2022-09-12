import React from "react";

//Headerに必要なpropsを作る
//propsはオブジェクト{}で囲まないとエラーが出ちゃう？？？？？？？？？？
const Link = ({ className, href, children }) => {
  //event handler使ったら必ずevent object受け取る
  const onClick = (event) => {
    
    //新しいタブで開く機能をつける
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    // Route componentに対して、URLが変更されたことが伝えられる
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
