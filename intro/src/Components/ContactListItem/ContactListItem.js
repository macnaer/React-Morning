import React from "react";
import "./ContactListItem.css";

class ContactListItem extends React.Component {
  state = {
    btnChange: false,
    btnText: "Contact Now",
    avatar: this.props.avatar,
    favorite: false
  };

  onBtnClick = () => {
    if (!this.state.btnChange) {
      this.setState({
        btnChange: true,
        btnText: "Clicked"
      });
    }
    else{
       this.setState({
         btnChange: false,
         btnText: "Contact Now"
       });
    }
  };

  onFavorivteClick = () =>{
    if (!this.state.favorite){
      this.setState({
        favorite: true
      });
    }
    else{
       this.setState({
         favorite: false
       });
    }
  }

  onAvatar = () =>{
    const newAvatar = Math.floor(Math.random() * 99); 
    console.log(newAvatar);
    this.setState({
      avatar: newAvatar
    });
  
  }

  render() {
    const { name, desc, gender } = this.props;

    let btnStyle = "btn btn-default";
    let btnStar = "fa fa-star-o fa-2x star";

    if (this.state.btnChange) {
      btnStyle = "btn btn-danger";
    }

    if (this.state.favorite){
      btnStar = "fa fa-star fa-2x star";
    }

    const url = `https://randomuser.me/api/portraits/${gender}/${this.state.avatar}.jpg`;
    return (
      <li>
        <div className="media">
          <div className="media-left align-self-center">
            <img className="rounded-circle" src={url} />
          </div>
          <div className="media-body">
            <h4>{name}</h4>
            <p>{desc}</p>
          </div>
          <div className="media-right align-self-center">
            <a href="#" className="btn btn-warning" onClick={this.onAvatar}>
              Random ava
            </a>
            <a href="#" className={btnStyle} onClick={this.onBtnClick}>
              {this.state.btnText}
            </a>
            <i className={btnStar} aria-hidden="true" onClick={this.onFavorivteClick}></i>
          </div>
        </div>
      </li>
    );
  }
}
export default ContactListItem;
