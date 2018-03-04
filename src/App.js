import React from "react";
import ReactDOM from "react-dom";
//import styles from './index.css';

const App = () => {
  return (
    <div>
      <p style={divStyle}>React here!</p>
    </div>
  );
};

const divStyle = {
    color: 'blue',
    fontSize:'50px',
  };

export default App;
ReactDOM.render(<App />, document.getElementById("app"));