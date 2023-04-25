/*
  foo() {}
  export foo
  ...
  import foo
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   React.createElement("h1", {title: "Doggy"}, "Hello React!")
// )

// root.render(
//   React.createElement(
//     "div", 
//     {title: "Doggy"}, 
//     React.createElement("h1", null, "Hey!"),
//     React.createElement("p", null, "It is Magic!")
//   )
// )

root.render(
<App/>
)

/*
  JSX - html c движком js
  <h1>123</h1> => React.createElement("h1", null, "123")
*/

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.className = `switch ${props.color} ${props.isActive ? 'on' : 'off'}`;
  }
  
  render() {
    return (
    <div className={this.className}>
      <button className="img" />
      <h3>{this.props.title}</h3>
    </div>
  );
}
}

ReactDOM.render((
  <>
    <Switch title="Счастье" color="blue" isActive={false} />
  </>
), document.querySelector('#root'));