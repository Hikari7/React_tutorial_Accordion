//JSXがないのでreactは別にインポートしなくていい

//2つのpropsを渡す(path, 条件付きで表示したいコンポーネント)
const Route = ({ path, children }) => {
  //pathnameがpathと同じならchildrenを返して、そうでなければnullを返す
  return window.location.pathname === path ? children : null;
};

export default Route;
