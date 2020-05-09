import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

import s from "./Page1.module.scss";
import Page2svg from "../svg/Page2";

export default function Page1() {
  let history = useHistory();
  const { user } = useContext(UserContext);
  return (
    <div className={s.container}>
      <div className={s.svg}>
        <Page2svg />
      </div>
      <div className={s.textMain}>Happy Mother's Day</div>
      <div className={s.textMain}>{user}</div>
      <div className={s.text}>this is a just a simple message</div>
      <div className={s.text}>for a very special person.</div>
      <div className={s.text}>please enjoy your day!</div>
      <div className={s.ButtonContainer}>
        <button onClick={() => history.push("/page2")}>Next</button>
      </div>
    </div>
  );
}
