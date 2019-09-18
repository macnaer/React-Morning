import React from "react";

const ContactListItem = ({name, desc, avatar, gender}) => {

  const url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
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
          <a href="#" className="btn btn-default">
            Contact Now
          </a>
        </div>
      </div>
    </li>
  );
};

export default ContactListItem;
