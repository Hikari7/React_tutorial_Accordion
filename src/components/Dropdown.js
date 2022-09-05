import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  //タブをopeした時用の関数も作る
  //初期値のfalseは最初は閉じている状態ってことで
  const [open, setOpen] = useState(false);

  //DOM要素を直接参照させるためにuseRef使う
  const ref = useRef();
  //クリックされた要素がコンポーネントの中にあるかどうか見る

  useEffect(() => {
    const onBodyClick = (event) => {
      //クリックされたspecificな要素を参照する
      if (ref.current.contains(event.target)) {
        return;
      }
      // console.log(e.target);
      //flaseを設定することで、ドロップダウンを閉じようとする
      setOpen(false);
    };

    //クリーンアップ関数(上のイベントリスナーをもう呼ばないようにする)
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
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

  //onClickにsetOpen(!open))ってする
  //refオブジェクトは、componenetの内部の要素のいずれかに割り当てる

  console.log(ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
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
