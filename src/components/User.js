import React from 'react';
import '../App.css';
import CreateUser from "./CreateUser";
import ListUser from "./ListUser";
import EditUser from "./EditUser";
import SearchUser from "./SearchUser";
import * as firebase from "firebase";
import XLSX from "xlsx";

class User extends React.Component {

    constructor(){
        super();
        this.state={
            activeTab: "create-user",
            users: null,
            searchedusers: null
        }
        this.db = firebase.firestore();
    }

    handleUserTab = (e) => {
        this.setState({
            ...this.state,
            activeTab: e
        });
    }

    handleCreateUser = (e) => {
        e.preventDefault();
        console.log("name",e.target[0].value);
        console.log("email",e.target[1].value);

        this.db
        .collection("user")
        .add({
            name: e.target[0].value,
            email: e.target[1].value
            
        })
        .then(docRef => {
            docRef.get().then(snapshot => {
            console.log("User has been added", snapshot.data());
            });
        })
        .catch(error => {
            console.log(error);
        });
    }


    handleListUser = () => {
        console.log("fetching user");
        this.db
            .collection("user")
            .onSnapshot(snapshot => {
                const users = snapshot.docs.map(doc => {
                    const data = doc.data();
                    data["id"] = doc.id;
                    return data;
                });
                this.setState({ users: users });
            });
    }

    handleDeleteUser = (id) => {
        console.log("delete User");
        const {users} = this.state;
        console.log(users);
        console.log("id", id);
        this.db.collection("user").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }


    handleEditUser = (e) => {
        e.preventDefault();
        console.log("id",e.target[0].value);
        console.log("name",e.target[1].value);
        console.log("email",e.target[2].value);
        const docRef = this.db.collection("user").doc(e.target[0].value);
        console.log(docRef);
        docRef
        .update({ name: e.target[1].value, email:e.target[2].value})
        .then(() => {
            console.log("Document Updated")
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleSearchUser = (e) => {
        e.preventDefault();
        console.log("search");
        console.log(e.target[0].value);
        const {users} = this.state;
        const filterUser = users.filter((ele) => {
            return ele.email ==  e.target[0].value
        });
        console.log("fa",filterUser);
        this.setState({
            ...this.state,
            searchedusers: filterUser
        });
    }

    handleDownload = () => {
            this.handleListUser();
            let users = [["First Name", "Email"]]
            this.state.users.forEach((user) => {
              let userArray = [user.name, user.email]
              users.push(userArray)
            });
            const wb = XLSX.utils.book_new();
            const wsAll = XLSX.utils.aoa_to_sheet(users)
                XLSX.utils.book_append_sheet(wb, wsAll, "All Users")
                XLSX.writeFile(wb, "export-demo.xlsx")
          
    }

    render(){
        const {activeTab, users, searchedusers} = this.state;
        console.log(users)
        return(
            <div className="user-container">
                <span className="user-sidebar">
                    <button className="btn-user" onClick={()=>this.handleUserTab("create-user")}>Create User</button>
                    <button className="btn-user" onClick={()=>{this.handleUserTab("list-all"); this.handleListUser()}}>List All User</button>
                    <button className="btn-user" onClick={()=>{this.handleUserTab("edit-user"); this.handleListUser()}}>Edit User</button>
                    <button className="btn-user" onClick={()=>{this.handleUserTab("search-user"); this.handleListUser()}}>Search User</button>
                </span>
                <span className="user-display">
                    {activeTab == "create-user" ?
                        <CreateUser onhandleCreate={this.handleCreateUser}/> :
                        activeTab == "list-all" ?
                        <ListUser users={users} handleDownload={this.handleDownload} handleDeleteUser={this.handleDeleteUser} />:
                        activeTab == "edit-user" ?
                        <EditUser users={users} handleEditUser={this.handleEditUser}/> :
                        <SearchUser searchedusers={searchedusers} handleSearchUser={this.handleSearchUser} />
                    }
                </span>
            </div>
        );
    }
    
}

export default User;