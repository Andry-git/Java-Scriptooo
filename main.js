import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class SmartText extends React.Component {
  state = { open: false };

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const open = this.state.open;
    const description = this.props.description;
    return (
      <div>
        <button onClick={this.handleOpen} class="Clicker">
          Описание
        </button>
        {open && <h4>{description}</h4>}
      </div>
    );
  }
}

class Bird extends React.Component {
  render() {
    //const open = this.props.open;
    return (
      <div>
        <img src={this.props.avatar} />
        <h1>{this.props.name}</h1>
        <SmartText description={this.props.description} />
        <button class="LIKE">LIKE</button>
      </div>
    );
  }
}

class Birds extends React.Component {
  state = {
    birds: [
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/ru/8/8d/%D0%AD%D0%BD%D0%B0%D0%BA%D0%B8%D0%BD_%D0%A1%D0%BA%D0%B0%D0%B9%D1%83%D0%BE%D0%BA%D0%B5%D1%80.png",
        name: "Энакин Скайуокер",
        description:
          "Легендарный чувствительный к Силе человек, мужчина, который служил Галактической Республике как рыцарь-джедай",
        heroVilian: true
      },

      {
        avatar: "https://instalook.ru/uploads/dakimakura/dart-veyder-981.jpg",
        name: "Дарт Вейдер",
        description:
          "Дарт Вейдер командовал вооружёнными силами Империи. Повстанцы иногда принимали его за Лидера Империи, а об Императоре и вовсе забывали. Он внушал страх всей галактике.",
        heroVilian: false
      },

      {
        avatar:
          "https://games.mail.ru/hotbox/content_files/news/2022/05/26/f2b74cf82bf34fc7a9348726eab58750.jpg",
        name: "Асока Тано",
        description:
          "Асока Тано, получившая от своего учителя прозвище Шпилька — тогрута женского пола, постигавшая пути джедая во время Войн клонов. Была падаваном рыцаря-джедая Энакина Скайуокера, и наравне с учителем командовала солдатами-клонами Великой армии Республики на протяжении почти всей войны в звании коммандера.",
        heroVilian: true
      },
      
      {
        avatar:
          "https://games.mail.ru/hotbox/content_files/news/2022/05/26/f2b74cf82bf34fc7a9348726eab58750.jpg",
        name: "Асока Тано",
        description:
          "Асока Тано, получившая от своего учителя прозвище Шпилька — тогрута женского пола, постигавшая пути джедая во время Войн клонов. Была падаваном рыцаря-джедая Энакина Скайуокера, и наравне с учителем командовала солдатами-клонами Великой армии Республики на протяжении почти всей войны в звании коммандера.",
        heroVilian: true
      },

      {
        avatar:
          "https://img.gazeta.ru/files3/842/10785842/shutterstock_628026569-pic905-895x505-46627.jpg",
        name: "Ворона",
        description:
          "Во́роны (лат. Corvus) — род птиц из семейства врановых (Corvidae). Род включает виды, известные как во́роны, воро́ны, грачи и галки. Между «во́ронами» и «воро́нами» нет чёткого различия, так как эти наименования присваиваются различным видам главным образом на основе их размера: во́роны, как правило, крупнее ворон.",
        heroVilian: false
      }
    ],
    avatar: "",
    name: "",
    description: "",
    heroVilian: false,
    filter: "all"
  };
  handleAdd = () => {
    const newBirds = [...this.state.birds];
    newBirds.push({
      avatar: this.state.avatar,
      name: this.state.name,
      description: this.state.description,
      heroVilian: this.state.heroVilian
    });
    this.setState({
      birds: newBirds,
      avatar: "",
      name: "",
      description: ""
    });
  };
  handleRemove = (index) => {
    const prev = this.state.birds;
    const newBirds = prev.filter((el, i) => {
      if (i == index) return false;
      else return true;
    });
    this.setState({ birds: newBirds });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleAvatarChange = (event) => {
    this.setState({ avatar: event.target.value });
  };
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };
  handleHeroVilian = (event) => {
    this.setState({ heroVilian: event.target.checked });
  };
  showHeroes = (event) => {
    this.setState({ filter: "heroes" });
  };
  showVilians = (event) => {
    this.setState({ filter: "vilians" });
  };
  showAll = () => {
    this.setState({ filter: "all" });
  };

  render() {
    let birdsToRender;
    if (this.state.filter === "all") {
      birdsToRender = this.state.birds;
    }
    if (this.state.filter === "heroes") {
      birdsToRender = this.state.birds.filter((b) => b.heroVilian === true);
    }
    if (this.state.filter === "vilians") {
      birdsToRender = this.state.birds.filter((b) => b.heroVilian === false);
    }
    return (
      <div>
        <header>
          <img
            class="logo"
            src="https://faunistics.com/wp-content/uploads/2019/09/1-13.jpg"
            alt="logo"
          />
          <div>CHARACTER</div>
        </header>
        <button onClick={this.showHeroes} className="Hero">
          Heroes
        </button>
        <button onClick={this.showVilians} className="Vilian">
          Vilians
        </button>
        <div>
          {birdsToRender.map((bird, index) => (
            <Bird
              avatar={bird.avatar}
              name={bird.name}
              description={bird.description}
              handleRemove={() => this.handleRemove(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

root.render(
  <div>
    <Birds />
  </div>
);
