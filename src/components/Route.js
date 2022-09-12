import { useEffect, useState } from "react";

//2つのpropsを渡す(path, 条件付きで表示したいコンポーネント)
const Route = ({ path, children }) => {
  //Routeを更新させるためにstate書く
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //画面がレンダリングされる時だけ、関数を実行するようにする
  useEffect(() => {
    const onLocationChange = () => {
      // console.log("location change");
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  //pathnameがpathと同じならchildrenを返して、そうでなければnullを返す
  return currentPath === path ? children : null;
};

export default Route;
