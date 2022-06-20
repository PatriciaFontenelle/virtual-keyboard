import { useEffect, useState } from "react";
import "./Key.css";

const Key = ({ value, onClick, uppercase, shift, setShift }) => {
  const { main, secondary, type } = value;
  const [key, setKey] = useState("");
  const [sec, setSec] = useState(secondary);

  useEffect(() => {
    if (secondary !== "" && shift) {
      setKey(secondary);
      setSec(main);
    } else {
      setKey(uppercase && type === "letter" ? main.toUpperCase() : main);
      setSec(secondary);
    }
  }, [uppercase]);

  const clicked = (e) => {
    if (key === "caps") {
      e.target.classList.toggle("active");
    }
    onClick(key);
  };

  return (
    <button
      onClick={(e) => clicked(e)}
      id={key}
      className={type === "action" ? "key-container action" : "key-container"}
    >
      <div className="secondary-value">{sec}</div>
      {key}
    </button>
  );
};

export default Key;
