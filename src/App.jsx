import React from "react";

const App = () => {
  const onClickButton = () => alert("aaa");
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const contentStyle2 = {
    color: "red",
    fontSize: "50px"
  };

  return (
    <>
      <h1 style={contentStyle}>こんにちは</h1>
      <p style={contentStyle2}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
