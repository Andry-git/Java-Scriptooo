import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./Character.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

class MyButton extends React.Component {
  render() {
    const children = this.props.children;
    const onClick = this.props.onClick;
    return (
      <button className="MyButton" onClick={onClick}>
        {children}
      </button>
    );
  }
}

class Clicker extends React.Component {
  state={clicks:0};
  handleClick=()=>{
    const prevClicks=this.state.clicks;
    this.setState({
      clicks:prevClicks+1
    });
  }
  render() {
    return (
      <button className="Clicker" onClick={this.handleClick}>
        {this.state.clicks}
      </button>
    );
  }
}

class Character extends React.Component {
  render() {
    const name = this.props.name;
    const description = this.props.description;
    const avatar = this.props.avatar;
    const age = this.props.age;
    return (
      <div class="Character">
        <MyButton onClick={() => alert(name)}>{name}</MyButton>
        <p class="description">{description}</p>
        <img src={avatar} class="avatar" />
        <p class="age">{age}</p>
        <Clicker/>
      </div>
    );
  }
}

root.render(
  <div>
    <Character
      name="Вилкас"
      description="Белый"
      avatar="https://theslide.ru/img/thumbs/b13e8f3ee7ffbff2c7aa19b06521d6e8-800x.jpg"
      age="0 лет"
    />
    <Character
      name="Бокс-Кокс"
      description="Черный"
      avatar="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkyTdy7EyXYwszC7_-r6_SeaaKTM5SRkZCeTgDn6uOyic"
      age="5 лет"
    />
    <Character
      name="Буравчик"
      description="Рыжий"
      avatar="https://haski-mana.ru/wp-content/uploads/b/1/a/b1ac629beb5e9bf22414401e6413b873.jpeg"
      age="4 года"
    />
  </div>
);


 


