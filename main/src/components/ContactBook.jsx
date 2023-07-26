import React from "react";
import NavBar from "./NavBar";

function ContactBook(props) {
  return (
    <div>
      <NavBar />
      <h1>welcome {props.name}</h1>
    </div>
  );
}

export default ContactBook;
