import React, { useState } from "react";
import ReactDOM from "react-dom";

import PasswordInput from "./components/PasswordInput";
import Message from "./components/Message";
import Rules from './components/Rules';

import "./styles.css";

function App() {
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <PasswordInput
        type="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
          setToggle(true);
        }}
        onBlur={() => setToggle(true)}
      />
      <Message toggle={toggle}>
        <h2>Criteria:</h2>
        <Rules password={password} />
      </Message>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
