import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  //タブをopeした時用の関数も作る
  //初期値のfalseは最初は閉じている状態ってことで
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) => {
        console.log(e.target);
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    //選ばれているものを非表示にする
    //Reactでnullをreturnすると、再レンダリングされなくなるってこと
    if (option.value === selected.value) {
      return null;
    }
    //1つのdivをクリックする度に選択された変更を呼び出している
    //onSelectedChangeはAppの中のonSelectedChangeを呼ぶ
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  //onClickにsetOpen(!open))ってして、

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
