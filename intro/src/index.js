import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";
import Contact from "./Components/Contact/Contact"
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
class App extends Component {

  counterID = 1000;

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
    // console.log("searchName => ", searchName);
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

  addNewContact = (name, gender, description) => {
    return {
      id: this.counterID++,
      name: name,
      desc: description,
      gender: gender,
      avatar: Math.floor(Math.random() * (99 - 1 + 1)) + 1,
      favorite: false
    };
  };
  addContact = (name, gender, description) => {
    // console.log(name, " ", gender, " ", description);
    const contact = this.addNewContact(name, gender, description);

    const newContactArr = [...this.state.List, contact];

    this.setState(state => {
      return {
        List: newContactArr
      };
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
          <Router>
            <Header />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <ContactList
                    ContactList={showContacts}
                    onFavoriteChange={this.onFavoriteChange}
                    onContactDelete={this.onContactDelete}
                    onSearch={this.onSearch}
                  />
                )}
              />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about" exact component={About} />
              <Route
                path="/add"
                exact
                render={() => <AddContact addContact={this.addContact} />}
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
