import React from 'react';
import '../App.css';
import CreateCategory from "./CreateCategory";
import ListCategory from "./ListCategory";
import SearchCategory from "./SearchCategory";
import EditCategory from "./EditCategory";



import * as firebase from "firebase";

class User extends React.Component {

    constructor(){
        super();
        this.state={
            activeTab: "create-category",
            category: null,
            searchedcategory: null
        }
        this.db = firebase.firestore();
    }

    handleCategoryTab = (e) => {
        this.setState({
            ...this.state,
            activeTab: e
        });
    }

    handleCreateCategory = (e) => {
        e.preventDefault();
        console.log("name",e.target[0].value);
        

        this.db
        .collection("category")
        .add({
            name: e.target[0].value,
            
            
        })
        .then(docRef => {
            docRef.get().then(snapshot => {
            console.log("category has been added", snapshot.data());
            });
        })
        .catch(error => {
            console.log(error);
        });
    }


    handleListCategory = () => {
        console.log("fetching category");
        this.db
            .collection("category")
            .onSnapshot(snapshot => {
                const category = snapshot.docs.map(doc => {
                    const data = doc.data();
                    data["id"] = doc.id;
                    return data;
                });
                this.setState({ category: category });
            });
    }

    handleDeleteCategory = (id) => {
        console.log("delete category");
        const {category} = this.state;
        console.log(category);
        console.log("id", id);
        this.db.collection("category").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }


    handleEditCategory = (e) => {
        e.preventDefault();
        console.log("id",e.target[0].value);
        console.log("name",e.target[1].value);
        const docRef = this.db.collection("user").doc(e.target[0].value);
        console.log(docRef);
        docRef
        .update({ name: e.target[1].value})
        .then(() => {
            console.log("Document Updated")
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleSearchCategory = (e) => {
        e.preventDefault();
        console.log("search");
        console.log(e.target[0].value);
        const {category} = this.state;
        const filtercategory = category.filter((ele) => {
            return ele.name ==  e.target[0].value
        });
        console.log("fa",filtercategory);
        this.setState({
            ...this.state,
            searchedcategory: filtercategory
        });
    }

    render(){
        const {activeTab, category, searchedcategory} = this.state;
        console.log(category)
        return(
            <div className="user-container">
                <span className="user-sidebar">
                    <button className="btn-user" onClick={()=>this.handleCategoryTab("create-category")}>Create Category</button>
                    <button className="btn-user" onClick={()=>{this.handleCategoryTab("list-all"); this.handleListCategory()}}>List All Category</button>
                    <button className="btn-user" onClick={()=>{this.handleCategoryTab("edit-category"); this.handleListCategory()}}>Edit Category</button>
                    <button className="btn-user" onClick={()=>{this.handleCategoryTab("search-category"); this.handleListCategory()}}>Search Category</button>
                </span>
                <span className="user-display">
                    {activeTab == "create-category" ?
                        <CreateCategory onhandleCreate={this.handleCreateCategory}/> :
                        activeTab == "list-all" ?
                        <ListCategory category={category} handleDeleteCategory={this.handleDeleteCategory} />:
                        activeTab == "edit-category" ?
                        <EditCategory category={category} handleEditCategory={this.handleEditCategory}/> :
                        <SearchCategory searchedcategory={searchedcategory} handleSearchCategory={this.handleSearchCategory} />
                    }
                </span>
            </div>
        );
    }
    
}

export default User;