import { useEffect, useState } from "react";
import Key from "./components/Key";
import { data } from "./utils/data";

import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [shift, setShift] = useState(false);

  useEffect(() => {
    const shiftKey = document.getElementById("shift");

    if (shiftKey) {
      shift
        ? shiftKey.classList.add("active")
        : shiftKey.classList.remove("active");
    }

    setUppercase(shift);
  }, [shift]);

  const onClick = (char) => {
    switch (char) {
      case "backspace":
        setText(text.slice(0, -1));
        break;
      case "caps":
        setUppercase(!uppercase);
        break;
      case "shift":
        setShift(!shift);
        break;
      case "space":
        setText(text + " ");
        break;
      default:
        setShift(false);
        setText(text + char);
    }
  };

  return (
    <div className="app-container">
      <div className="keyboard-container">
        <div className="keyboard-input">
          <input readOnly value={text} />
        </div>
        <div className="keys-container">
          {data.map((row, index) => {
            return (
              <div key={index} className="keys-row">
                {row.map((key) => {
                  return (
                    <Key
                      key={key.main}
                      value={key}
                      onClick={onClick}
                      uppercase={uppercase}
                      shift={shift}
                      setShift={setShift}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
