import React from 'react';
import '../App.css';
import NavBar from "./NavBar";
import User from "./User";
import Category from "./Category";
import * as firebase from "firebase";

class App extends React.Component {

  constructor(){
    super();
    this.state={
      activeTab: "user"
    }
    this.db = firebase.firestore();
  }

  handleTabClick = (e) => {
    this.setState({
      ...this.state,
      activeTab: e
    });
  }

  render(){
    console.log("render");
    console.log(this.state);
    const {activeTab} = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="tabs">
          {activeTab == "user" ?
            <span className="user-tab active-tab"><button onClick={()=>this.handleTabClick("user")}>User</button></span>:
            <span className="user-tab"><button onClick={()=>this.handleTabClick("user")}>User</button></span>
          }
          {activeTab == "category" ?
            <span className="category-tab active-tab"><button onClick={()=>this.handleTabClick("category")}>Category</button></span>:
            <span className="category-tab"><button onClick={()=>this.handleTabClick("category")}>Category</button></span>
          }
          
        </div>
        {activeTab == "user" ?
          <User /> :
          <Category />
        }
      </div>
    );
  }
}

export default App;
