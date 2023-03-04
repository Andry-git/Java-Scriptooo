import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./Character.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const students = [
//                   {firstName: "дэн", lastName:"-"},
//                   {firstName: "Макс", lastName:"Сакм"},
//                   {firstName: "Никитос", lastName:"Никита? Я Никита"}
//                 ];

// class Students extends React.Component {
//   render() {
//     return (
//       <div>
//         {students.map((student) => (
//           <div>
//           <h1>Имя: {student.firstName}</h1>
//           <h1>Фамилия: {student.lastName}</h1>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

class Students extends React.Component {
  state = {
    students: [{ FirstName: "Андрей", LastName: "Йердна" }],
    FirstName: "",
    LastName: ""
  };
  handleAdd = () => {
    const newStudents = [...this.state.students];
    newStudents.push({
      FirstName: this.state.FirstName,
      LastName: this.state.LastName
    });
    this.setState({
      students: newStudents,
      FirstName: "",
      LastName: ""
    });
  };
  handleRemove = (index) => {
    const prev = this.state.students;
    const newStudent = prev.filter((el, i) => {
      if (i == index) return false;
      else return true;
    });
    this.setState({ students: newStudent });
  };
  handleFirstNameChange = (event) => {
    this.setState({ FirstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ LastName: event.target.value });
  };

  //1
  // handleDelete = (index) => {
  //   const prev = this.state.students;
  //   const newStudent = [];
  //   for(let i=0; i<prev.length;i++){
  //     if(i!==index){
  //       newStudent.push(prev[i]);
  //     }
  // }
  //   this.setState({ students: newStudent });
  // };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.students.map((student, i) => (
          <div>
            <h1>{student.FirstName}</h1>
            <h1>{student.LastName}</h1>
            <button
              className="MyButton"
              onClick={() => {
                this.handleRemove(i);
              }}
            >
              X
            </button>
          </div>
        ))}
        <div>
          <input
            type="text"
            value={this.state.FirstName}
            onChange={this.handleFirstNameChange}
          />
          <input
            type="text"
            value={this.state.LastName}
            onChange={this.handleLastNameChange}
          />
        </div>
        <button className="MyButton" onClick={this.handleAdd}>
          Добавить
        </button>
      </div>
    );
  }
}

class MyButton extends React.Component {
  state = { clicks: 0 };
  handleClick = () => {
    const prevClicks = this.state.clicks;
    this.setState({
      clicks: prevClicks + 1
    });
  };
  render() {
    const children = this.props.children;
    const clicks = this.state.clicks;
    if (clicks % 2 === 0) {
      return (
        <div>
          TRUE
          <button className="MyButton" onClick={this.handleClick}>
            {children}
          </button>
        </div>
      );
    } else
      return (
        <div>
          FALSE
          <button className="MyButton" onClick={this.handleClick}>
            {children}
          </button>
        </div>
      );
  }
}

export class DateInput extends React.Component {
  state = { dateValue: "" };

  handleChange = (event) => {
    this.setState({ dateValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="date"
          value={this.state.dateValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export class Checkbox extends React.Component {
  state = { checkboxValue: "" };

  handleChange = (event) => {
    this.setState({ checkboxValue: event.target.checked });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          class="myinput large custom"
          checked={this.state.checkboxValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export class Select extends React.Component {
  state = { selectedValue: "" };

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    return (
      <div>
        <select onChange={this.handleChange} value={this.state.selectedValue}>
          <option value="A">Серёжа</option>
          <option value="B">Рустам</option>
          <option value="C">Андрей</option>
          <option value="C">Макс</option>
        </select>
      </div>
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
        <MyButton>{name}</MyButton>
        <p class="description">{description}</p>
        <img src={avatar} class="avatar" />
        <p class="age">{age}</p>
      </div>
    );
  }
}

root.render(
  <div>
    <Checkbox />
    <Select />
    <DateInput />
    <Students />
    <Character
      name="Вилкас"
      description="Белый"
      avatar="https://74.img.avito.st/image/1/1.q5ywqra6B3WGA8Vw6ryNg3MJAXEEiQ-3AQkDfQwBBQ.2s44fR8OOjPUDZeFB81_5gnpHwXT5-A_iFR9elqMqQI"
      age="0 лет"
    />
    <Character
      name="Бокс-Кокс"
      description="Черный"
      avatar="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkyTdy7EyXYwszC7_-r6_SeaaKTM5SRkZCeTgDn6uOyic"
      age="5 лет"
    />
    <Character
      name="Ч̸̞̖̫̤̳͈͈̬̟̳̮̱̞̄̌͗͂͛͑͂͌͒͊̾̃̂͐̃̿̄̄̽͂̑̋̚̚ͅӗ̴̭͚̭̖̮̲̳̤̖̭͈̱̠͓̖͗̆̆̅̀͋̉͗̋̍̉̽̚р̸̲͉̯͖̩̥̥͍͇͖̜̠̮̮̣͙̝̙̯̣̲͛͐͐̌̔͌͊͒̋̈́̃͋̅͛̆̓̾̌̓̐̀̚ͅͅн̶̥̜̘͈͇̘͕̪̩̪͚̙͙̭̗̠̈̀̀͐̀͊͛͋̄̈͑̄̾̒̒̍́͛̏̅̊̚̚̚а̶̫̖̝͖̝͕̥͔̭͓̦͓̬͇͔͖̠̀̔̉͐̐̈́̃̈̂͆̌̽̅̀͊̌̍̔̍̊͗̋͑ͅͅя̵̣̲̤̟̥̦̩̬̙̙̗͕̃̍̆̊̐̈́̎̈̈̎̀̀̚ͅ д̷̳̱̤̮͈̣͈̝̟̯̫̮̪͈̗̭̬̭͕͔͒̐͗͑͑̓͂̋͛͒͋̊̑̅̎̀́͆̅͛̈͑̎ͅы҈̭̭̝̯͙͇͈̝͉̰͓̩̟̜͉̪̜̣̞̞͔͓͉̃̌̅̏̑͗͂͛̓͒͒͊̓̀̀̈́̒̋͒̈́́̏̑̚р̴̲̥͇̙̲͎̙̠̭͇̖̞̞̰̯̓̒̽́̀̔͂̏̀́͑̔̾͐̀̾́̎͗̐а̵͈̭̳̘̗͔̭͙͉͙̠̟͚̫̲̗͕̪͎͇͒̐̀̃̅̀́̉͂́́̒̌̌́̀̚̚ͅ"
      description="Ч̴̳̗̫͖͇̩̘̦͔̝͉̙̳̘͉̲͈̘̲̔̔̿́̽̉͗́̓̒̆͑̇͑̀̚ͅ?҈͈̜͉͎̥̮͔̖̬̠͚̗͉͎̪͕͐̓͆́̿̀̓̓͆̾̅̍́̎̚е̴͕̬͚̝͔̞̤͙̦̪͖͓̱́̂̅́́̎̃͑̋͆̔͛͑̈̅̄͛̿р҉̭͕̭̩̲͖͈͚̗͚̣͇͔͙̾͌̀̅̏̀̅̂͌̇̊̄̊̓̈͌̄́̀̚н҈̗̜̰̝̞̜̱̙̗͇̣́̇̍͌̍͑͒̔͛̉̌̀̒͐̈̈́͊͋̑̈̅̔͗ͅͅ?҉̟̯̯̫͔͓͈̘̭͈͚̮͙̠̞̳͖̫͈̙̯̟̩͛͋͆́̽̔̏̅̃́̄͐͑̇͂͂̀͛̏ͅы҉͍̰̮̩̖̤̰̦̘̩̮̥̫̭̳̥̯̦̮͎̜͍̲̇́̾̄͑̔͆̑̂̂̐̔̿̎̀̽̈¿̸̩͇̰͚̗̳̣̖̰̙͓͚̥̳͙̱̮̯̲͖̘͓̘̳͒̈́̋͗̑͊̃͊̿̽͛̑͂͐̇̎͂й̸̭̭̝͎̩̲͍̠̝̘͓̬͙̫̙͓̤̓̀̀̽̽͗̆̽̾͋̿̊̾̔͐̍̂͑̿̊̀"
      avatar="https://universemagazine.com/wp-content/uploads/2019/01/Post-December-2015-5-1.jpg"
      age="¿̷̟̭̰͎̫̭̥̫̲̯̱̭̥͙̮͚͉͙͚̀̎̒̅͋̃̐̄̓͐͌͒̀̄̂̓̎̚?̸̯̣̮̫̥͉͓̪̜̲̱̖̯̊͆̒̏́̓̉̈́̈́͊̌͑̂̚¿̸̮̝̩͙̫͓̤͇̭̫͙̥͂̍̍̔͂̀̄́̄́̿̚?҈͓̜͖̣̠̝͖̜̫͉̣̫̜̳̣͍͔̥̘̤̠̪̞͛̅̏͌̃̒̋̂̌̾́́̿̍̍̀̋̀̑̎ͅ?̶̲̜̥͇̱̳̘̭̘̥͎̣͕͔͊͌̽̂̿̅̌̈́̀̄͊̓̊̀̇̓ͅͅ¿̷͕̲̝̬͉̠̬͚̞͙̝̉͛̒̆̒̓̀̇̐̓̌̐͋̃́̽ͅͅͅ?̸͓̲̠̬̬̠̲͍̯͙̠̩͚̟̮̗͓͎̥̊̄̓̊̈̾̿̍͒͋̍̑̓͒͆̉̀̿̎̈̿̀̎͌ͅͅ¿҉̳̮͉̘̥̟͚̘͈͎̣̤̪̭͉̲̤̦̯̦̝͕̩̫͛̆̄̃͌̿̄̍̐̓̍̒̃́?̵͎̫͉͈͉͇̣̝͇͎͕̘̲͉̣̓̊̉̽͂̆̉͛̉̅͛͊̅͋͛̀ͅͅ¿̷̙̙̲̬͙̠̞͚͎͔͖̮͕̣͓̲͐̌͆̍̀̿̊̇͊̋́̍̓̇͛̒̆̀͑̂?҈͍͇̥̠̖͎̣͇͚̭̟̲͍̰̔͋̒̃̽̉̉̉̌̉̐̌ͅ?҉̪̟̤̗͍̜͔̬̲͔̲̊̔͋̎̍͊͋̄̿́͑̉̅̀͗͆̀̈̈̌̽̽ͅ¿̵͙͔̩̞͉͉͙͔̙̯͎̩̞̪͕̬̲͎̯͙͈̩̀̔̑̈́̊͆͛̄̒̉̆̎̀̈̄̽͋̊́́̐̀?̶̗͓̣̫̭͎͎̫̦̖̞̳̇̌́́̌̌̾̇͂̒̔̉̌̄̅́̏̀́̓́͒̐̋ͅ¿҉̞̥͔͍̬̭̘̱͍̳͓̤̟̘̤̭̜̌̏͛̍͆̒͗͗͊̒̑̔̍͆̌̑?̶̤̤̖̫̟̱͇̰̪͇̯͓͛̓̎̏̃̃̽̃̉̏̀͑̀̑̀̂̏̎̈́̊̎ͅ¿̷̫̜̣͈̝͕̬̖̬͕̩̥̌̍̋͒͋̑̄̑͂̈̇́͐̃̌͒͒̐ͅͅ?҈͙̱̦̞͍͍̤̭̟̘̤̱͇͈̖͚̩̳̪̑́̏͗͊̇́͆̉͂̌͆?̶͕̬̭̠̬̮̖̣̗̮̣̬͕͍͆̓͆̐̂̏̑̃̏̉̊̿̊̄̑̍̀̐̐̚ͅͅ¿̶͚̠̘̣̯̙͈̩͍͖̬̠̱͆̋̔͐̎͂̈̍͑̎̌̂͒͐̂̚?҉͙͔͇̖͇͎̣͕͍̣̮͙̩͓̪̱͔͊̓̃͊͑́͗́̈̄̃͂̓́́̈́̿̀̑͌̄͑¿̶̞̟̯̪̥̦̫̩͙̪͈̖̟̞̰̦̝̯͚̩̬̣̓̐̌̅̑͑̒͂̓̂̒́̉̀̾̚?҉̩͈͉̙̬̦̙͔͚͉̘̳̯̘̰̥̜̯͚̇̔͌͗̊̾̾̈̐̈́͊̀̑̇́̓͌̈̒̒͒̀¿̵̱̣͚̞͈͇̤͔̩̲̟̮̦̳͕͊̃́̊͂̒͌͆͛̿̊͂̅̆̄́͂̚̚ͅ?̶͈̝̤̠̳̝̠̳͖̗̪̤̪̳͈̩͔͚̝͛͊̓̏̄̐̈́͗̎́̉͗̌͋̎̉̾̋ͅ?̵͕̣̜̘̗͖͔͚̗̙̤̜̬͎̥̰̯̲̞̫͓͈̤͖̑͛͂̽͐̍̏̅̑͗̈́͌¿̵̩͕͈̱̜͈͖͍̫͕͕͎̩̤͔̥͇̜̲̾͋̃̔́̈͒̆̊͐̀̈̚̚̚?҈͕̭̣͉̞̗͖̯̳̲͔̠͇̣̤͉͈͆̆̾͑͐̌̿́̉̏͌̀͋́̚"
    />
  </div>
);
