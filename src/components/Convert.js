import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  //useEffect()を使うことで、新しい言語やテキストを取得する度にgoogle APIにリクエストを送ることができるように
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  //text propsが変更される度に実行する
  useEffect(() => {
    const timerId = setTimeout(() => {
      //500m描画経過し、このタイマーをキャンセルしない限り、bouncetextのstateをtcextに更新する
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  //ただ、async functionは直接useEffectに呼べないので、関数作ってその中で呼ぶ
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        //post request(データをサーバーへ情報を送る)を作るときは、
        "https://translation.googleapis.com/language/translate/v2",
        //翻訳されたテキストを取り出し、それを使って翻訳されたstateを更新する

        //axiosへの第２引数は常にgoing to be some inofrmation to send along in the body
        //なので、第２引数は空にしておく(リクエストのbodyには何も送らない)多分Google APIの仕様？
        //その代わり第3引数をにparamsを渡す
        {},
        {
          params: {
            q: debouncedText, //更新されたdebouncedTextを使う
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      //1つ目のdataは、axiosのdata
      //make sure you ipdate your translated piece of state
      // and then at the bottom of use effect make sure you call do translation itself.
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation(); //呼ぶ
  }, [language, debouncedText]);
  //langugaeかtextが更新される度に

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
