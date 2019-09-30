import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// API 
import APIClient from "./APIClient/api";
   

class App extends React.Component{

    state ={
     newsList: []
    }
    // lifecycle hooks
  // MOUNTING

  updateNews = (country = "ua") =>{
      const news = new APIClient();
        const newsList = news.getAllNews(country)
        .then(({articles}) =>{
            this.setState({
                newsList: articles
            })
        })
        .catch(err => console.log(err.message));
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.updateNews();
    console.log("newState = ", this.state.newsList);
  }
  // UPADTE
//   shouldComponentUpdate(prevState, nextState) {
//       console.log("prev =>",prevState);
//       console.log("next =>",nextState);
//       console.log("shouldComponentUpdate");
//       return nextState;
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

  // UNMOUNTING
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   getDerivenStateFromProps(){
//     console.log("getDerivenStateFromProps");
//   }
  // getSnapshotBeforeUpdate(){
  //   console.log("getSnapshotBeforeUpdate");
  // }
  // ERROR
//   componentDidCatch(){
//     console.log("componentDidCatch");
//   }


    render(){
        console.log("newState = ", this.state.newsList);
        return(
            <h1>News APP</h1>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

