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
    ],
    findContact: ""
  };

  onFavoriteChange = id => {
    // console.log("onFavoriteChange works", id);
    // console.log("before => ", this.state.List[2].favorite);
    this.setState(state => {
      const index = this.state.List.findIndex(elem => elem.id === id);

      // console.log("index", index);

      const newFavorite = this.state.List.slice();
      //console.log("newFaworite => ", newFavorite);
      newFavorite[index].favorite = !newFavorite[index].favorite;
      // console.log(newFavorite[index].favorite);
      return {
        favorite: !this.newFavorite
      };
    });

    // console.log(this.state.List[2].favorite);
  };

  onSearch = searchName => {
    console.log("searchName => ", searchName);
    this.setState({
      findContact: searchName
    });
  };

  onShowContact = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  };

  onContactDelete = id => {
    console.log("onContactDelete => ", id);
    this.setState(state => {
      const index = this.state.List.findIndex(elem => elem.id === id);
      //console.log("index", index);

      const firstPart = this.state.List.slice(0, index);
      const lastPart = this.state.List.slice(index + 1);
      const newList = [...firstPart, ...lastPart];

      return {
        List: newList
      };
    });
  };

  render() {
    const showContacts = this.onShowContact(
      this.state.List,
      this.state.findContact
    );

    return (
      <section className="row-section">
        <div className="container">
          <Header />

          <ContactList
            ContactList={showContacts}
            onFavoriteChange={this.onFavoriteChange}
            onContactDelete={this.onContactDelete}
            onSearch={this.onSearch}
          />
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
