import React, { Component } from "react";

class ClassApp extends React.Component {
  clickHandler(name) {
    alert(`Hello ${name}`);
  }
  render() {
    return (
      <div>
        <h5>From Class Component</h5>
        <button name="Arya" onClick={() => this.clickHandler("Arya")}>
          Arya
        </button>
        <button name="John" onClick={() => this.clickHandler("John")}>
          John
        </button>
        <button name="Bran" onClick={() => this.clickHandler("Bran")}>
          Bran
        </button>
      </div>
    );
  }
}
export default ClassApp;
