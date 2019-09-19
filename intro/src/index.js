import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";

class App extends Component {
  state = {
    List: [
      {
        id: 1,
        name: "Camilla Tery",
        desc:
          "Camilla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        avatar: 50,
        gender: "women",
        favorite: true
      },
      {
        id: 2,
        name: "Will Smith",
        desc:
          "Will Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        avatar: 12,
        gender: "men",
        favorite: false
      },
      {
        id: 3,
        name: "Arnold Swarz",
        desc:
          "Arnold Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        avatar: 96,
        gender: "men",
        favorite: false
      }
    ]
  };

  onFavoriteChange = () => {
    console.log("onFavoriteChange works");
  };
  render() {
    const { List } = this.state; 
    return (
      <section className="row-section">
        <div className="container">
          <Header />
          <ContactList
            ContactList={List}
            onFavoriteChange={this.onFavoriteChange}
          />
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
