import React from 'react';

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  return <div className="App">{message}</div>;
};

export default App;
