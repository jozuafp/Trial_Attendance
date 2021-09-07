import React from "react";
import "../../App.css";
import logo from "../../logo.svg";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="contain">
          HCI-P | Attendance <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}
