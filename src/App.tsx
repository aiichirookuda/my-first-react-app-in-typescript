import React from 'react';

interface AppProps {
  message?: string;
}

// Appコンポーネントに対する型チェック。
const App: React.FunctionComponent<AppProps> = (
  { message } /* 渡ってくるProps */
) => {
  return <div className="App">{message}</div>;
};

// 他のコンポーネントから情報が渡ってこなかった場合のPropsを設定できる。
App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
