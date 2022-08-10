import React from "react";
import classes from "./Styles.module.css";
const App = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes["container-title"]}>Hello World</h1>
      <button>Click here</button>
    </div>
  );
};

export default App;
