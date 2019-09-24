import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";
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
        gender: "men"
      },
      {
        id: 3,
        favorite: false,
        name: "Arnold Swarz",
        desc:
          "Arnold Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        avatar: 96,
        gender: "men"
      }
    ],
    findContact: ""
  };

  onFavoriteChange = id => {
    this.setState(state => {
      const index = this.state.List.findIndex(elem => elem.id === id);

      const newFavorite = this.state.List.slice();
      newFavorite[index].favorite = !newFavorite[index].favorite;
      return {
        favorite: !this.newFavorite
      };
    });
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
      return (
        item.contactName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      );
    });
  };
  addContact = (name, gender, desc) =>{
    console.log("Name: ", name, " Gender: ", gender, " Desc: ", desc);
  }

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
          <AddContact addContact={this.addContact} />
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
