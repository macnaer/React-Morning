import React from "react";
import "./Search.css";

class Search extends React.Component{

    onSearch = (e) => {
        //console.log(e.target.value);
        let searchName = e.target.value;
        this.props.onSearch(searchName);
    }

    render(){

        return(
            <div className="col-md-10 offset-md-1 row-block">
                <input onChange={this.onSearch} name="Search" className="form-control" />
            </div>
        )
    }
}
export default Search;