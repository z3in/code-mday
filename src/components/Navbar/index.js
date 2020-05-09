import React from "react";
import Logo from "../svg/Logo";
import s from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={s.Logo}>
      <Logo />
    </div>
  );
}
