import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ ContactList, onFavoriteChange, onContactDelete }) => {
  const newItem = ContactList.map(item => {
    return (
      <ContactListItem
        id={item.id}
        name={item.name}
        desc={item.desc}
        avatar={item.avatar}
        gender={item.gender}
        favorite={item.favorite}
        onFavoriteChange={() => onFavoriteChange(item.id)}
        onContactDelete={() => onContactDelete(item.id)}
      />
    );
  });

  return (
    <div className="col-md-10 offset-md-1 row-block">
      <ul id="sortable">{newItem}</ul>
    </div>
  );
};

export default ContactList;
