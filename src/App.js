import React from "react";
import useProduct from "./Store/useProduct";
import Header from "./header";
import Posts from "./posts";
import "./App.css";  

const App = () => {
  const { count, increase, decrease, multiply } = useProduct();

  return (
    <>
    
      <div className="btn-group">
      <h1>{count}</h1>
  <button onClick={increase}>INCREASE</button>
  <button onClick={decrease}>DECREASE</button>
  <button onClick={multiply}>MULTIPLY</button>
</div>
<Header/>
<Posts/>
    </>
  );
};

export default App;
