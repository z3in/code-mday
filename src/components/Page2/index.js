import React from "react";
import s from "./Page2.module.scss";

import Page3 from "../svg/Page3";

export default function Page2() {
  return (
    <div className={s.container}>
      <div className={s.svg}>
        <Page3 />
      </div>

      <div className={s.text}> your love is simply the</div>
      <div className={s.textMain}>Best</div>
      <div className={s.text}> no one can replace you</div>
      <div className={s.textMain}>I LOVE YOU</div>
    </div>
  );
}
