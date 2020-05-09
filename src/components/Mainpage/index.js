import React, { useState, useContext } from "react";
import s from "./Mainpage.module.scss";
import { useHistory } from "react-router-dom";

import Page1 from "../svg/Page1";
import { UserContext } from "../context/UserContext";

export default function Mainpage() {
  let history = useHistory();
  const { setUser } = useContext(UserContext);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setValid(true);
      setValid(false);

      setTimeout(() => {
        setValid(true);
      }, 2000);
    } else {
      setValid(true);
      setUser(text);
      history.push("/page1");
    }
  };

  return (
    <div className={s.container}>
      <Page1 />
      <div className={valid ? s.Hidden : s.Show}>"Name cannot be blank"</div>
      <div className={s.ButtonContainer}>
        <input
          className={valid ? null : s.invalid}
          placeholder="first name"
          onChange={(e) => {
            setText(e.target.value);
            setValid(true);
          }}
        />
        <button onClick={(e) => handleSubmit(e)}>Next</button>
      </div>
    </div>
  );
}
