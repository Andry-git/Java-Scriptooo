import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

import App from "./App";

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
        <button class="Remove" onClick={this.props.handleRemove}>
          X
        </button>
        <h1>{this.props.name}</h1>
        <img src={this.props.avatar} />
        <SmartText description={this.props.description} />
        <h3>{this.props.areal}</h3>
        <h3>Год открытия: {this.props.date}</h3>
        <h3>{this.props.size}</h3>
        <h3>Перелётная: {this.props.fliesForWinter ? "Да" : "Нет"}</h3>
      </div>
    );
  }
}

class Birds extends React.Component {
  state = {
    birds: [
      {
        avatar: "https://faunistics.com/wp-content/uploads/2019/09/1-13.jpg",
        name: "Ласточка",
        description:
          "Небольшая птица, длина тела 14,6—23 см, размах крыльев 31,8—35 см. Вес птицы составляет 17—24 грамм. Окраска сверху — сине-чёрная с металлическим отблеском, снизу бледно-бежевая. На лбу и передней части шеи имеются светло-коричневые пятна. Хвост длинный, с глубоким вырезом посередине. Самцы и самки выглядят приблизительно одинаково, хотя самки часто окрашены чуть менее контрастно, и их хвост чуть короче.",
        areal: "Везде, за исключением Австралии и Антарктиды",
        date: "1880",
        size: "Маленькая",
        fliesForWinter: false
      },

      {
        avatar:
          "https://ryba-love.ru/wp-content/uploads/2021/07/oryol-stepnoj.jpg",
        name: "Орёл",
        description:
          "Орлы́ (лат. Aquila) — род хищных птиц семейства ястребиных. Длина тела 75—88 см, хвост довольно короткий, крылья широкие, до 2,4 м в размахе, ноги оперены до пальцев.",
        areal:
          "Распространены в Евразии, Африке и Северной Америке от лесотундры до пустынь.",
        date: "890",
        size: "Большая",
        fliesForWinter: true
      },

      {
        avatar:
          "https://img.gazeta.ru/files3/842/10785842/shutterstock_628026569-pic905-895x505-46627.jpg",
        name: "Ворона",
        description:
          "Во́роны (лат. Corvus) — род птиц из семейства врановых (Corvidae). Род включает виды, известные как во́роны, воро́ны, грачи и галки. Между «во́ронами» и «воро́нами» нет чёткого различия, так как эти наименования присваиваются различным видам главным образом на основе их размера: во́роны, как правило, крупнее ворон.",
        areal: "Везде, за исключением Южной Америки и Антарктиды",
        date: "1100",
        size: "Средняя",
        fliesForWinter: false
      }
    ],
    avatar: "",
    name: "",
    description: "",
    areal: "",
    date: "",
    size: "",
    fliesForWinter: false,
    filter: "all"
  };
  handleAdd = () => {
    const newBirds = [...this.state.birds];
    newBirds.push({
      avatar: this.state.avatar,
      name: this.state.name,
      description: this.state.description,
      areal: this.state.areal,
      date: new Date(this.state.date).getFullYear(),
      size: this.state.size,
      fliesForWinter: this.state.fliesForWinter
    });
    this.setState({
      birds: newBirds,
      avatar: "",
      name: "",
      description: "",
      areal: "",
      date: "",
      size: ""
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
  handleArealChange = (event) => {
    this.setState({ areal: event.target.value });
  };
  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  };
  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };
  handleFliesForWinterChange = (event) => {
    this.setState({ fliesForWinter: event.target.checked });
  };
  showYes = (event) => {
    this.setState({ filter: "yes" });
  };
  showNo = (event) => {
    this.setState({ filter: "no" });
  };
  showAll = () => {
    this.setState({ filter: "all" });
  };

  render() {
    let birdsToRender;
    if (this.state.filter === "all") {
      birdsToRender = this.state.birds;
    }
    if (this.state.filter === "yes") {
      birdsToRender = this.state.birds.filter((b) => b.fliesForWinter === true);
    }
    if (this.state.filter === "no") {
      birdsToRender = this.state.birds.filter(
        (b) => b.fliesForWinter === false
      );
    }
    return (
      <div>
        <button onClick={this.showYes} className="Clicker">
          Показать кто улетает
        </button>
        <button onClick={this.showNo} className="Clicker">
          Показать кто не улетает
        </button>
        <button onClick={this.showAll} className="Clicker">
          Показать всех
        </button>
        <div>
          {birdsToRender.map((bird, index) => (
            <Bird
              avatar={bird.avatar}
              name={bird.name}
              description={bird.description}
              areal={bird.areal}
              date={bird.date}
              size={bird.size}
              fliesForWinter={bird.fliesForWinter}
              handleRemove={() => this.handleRemove(index)}
            />
          ))}
          <div>
            <h2>Добавить новую птичку:</h2>
            <label>Название:</label>
            <br />
            <input value={this.state.name} onChange={this.handleNameChange} />
            <br />
            <label>Фото:</label>
            <br />
            <input
              value={this.state.avatar}
              onChange={this.handleAvatarChange}
            />
            <br />
            <label>Описание:</label>
            <br />
            <input
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <br />
            <label>Ареал:</label>
            <br />
            <input value={this.state.areal} onChange={this.handleArealChange} />
            <br />
            <label>Дата открытия:</label>
            <br />
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleDateChange}
            />
            <br />
            <label>Размер: </label>
            <select value={this.state.size} onChange={this.handleSizeChange}>
              <option value=""></option>
              <option value="Маленькая">Маленькая</option>
              <option value="Средняя">Средняя</option>
              <option value="Большая">Большая</option>
            </select>
            <br />
            <label>Улетает на зиму:</label>
            <input
              type="checkbox"
              checked={this.state.fliesForWinter}
              onChange={this.handleFliesForWinterChange}
            />
            <br />
            <button className="MyButton" onClick={this.handleAdd}>
              Добавить
            </button>
          </div>
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
