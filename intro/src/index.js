import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
	
    const List = [
      {
        id: 1,
        name: "Camilla Tery",
        desc:
          "Camilla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        avatar: 50,
        gender: "women",
      },
      {
        id: 2,
        name: "Will Smith",
        desc:
          "Will Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        avatar: 12,
        gender: "men",
        test: "test"
      },
      {
        id: 3,
        name: "Arnold Swarz",
        desc:
          "Arnold Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        avatar: 96,
        gender: "men"
      }
    ];
    return (
      <section className="row-section">
        <div className="container">
          <Header />
          <ContactList ContactList={List} />
        </div>
      </section>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

