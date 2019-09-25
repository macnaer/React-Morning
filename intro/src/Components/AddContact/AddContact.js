import React, { Component } from "react";
import "./addContact.css";


class AddContact extends Component {
  state = {
    name: null,
    gender: null,
    desc: null
  };


    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    getDescription = (e) => {
        this.setState({
            desc: e.target.value
        }) 
    }

    onGender = (e) => {
        // console.log(e.target.value);
        this.setState({
            gender: e.target.value
        })
    }


  onSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state.name, this.state.gender, this.state.desc);
  };
  render() {
    return (
      <div className="col-md-10 offset-md-1 row-block">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={this.getName}
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="usergender"
              id="usergender1"
              value="women"
              onClick={this.onGender}
            />
            <label className="form-check-label" htmlFor="usergender1">
              Women
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="usersex"
              id="usergender2"
              value="men"
              onClick={this.onGender}
            />
            <label className="form-check-label" htmlFor="usergender2">
              Men
            </label>
          </div>
          <textarea
            type="text"
            placeholder="Description"
            className="form-control"
            onChange={this.getDescription}
          />
          <button className="btn btn-success" type="submit">
            New Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
