import React, {Fragment} from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import Search from "../Search/Search";

const ContactList = ({
  ContactList,
  onFavoriteChange,
  onContactDelete,
  onSearch
}) => {
  const newItem = ContactList.map(item => {
    return (
      <ContactListItem
        key={item.id}
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
    <Fragment>
      <Search onSearch={onSearch} />
      <div className="col-md-10 offset-md-1 row-block">
        <ul id="sortable">{newItem}</ul>
      </div>
    </Fragment>
  );
};

export default ContactList;
