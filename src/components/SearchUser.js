import React from "react";

const SearchUser = (props) => {
    console.log("p",props);
    const {users, searchedusers, handleSearchUser} = props;
    
    return (
        <div className="cu-container">
            <div className="heading">Search User</div>
            <hr/>
            <div className="cu-details">
                <form onSubmit={handleSearchUser}>
                    <select>
                        <option value="email">Email</option>
                        <option value="name">Name</option>
                    </select>
                    <input className="field" type="text" placeholder="Enter your data" name="search" />
                    <input className="cu-del-btn" type="submit" value="search" />
                </form>
                
                {searchedusers == null ?
                    <>...</>:
                    <>
                       {searchedusers.map((ele)=>{
                           return <>Name: {ele.name} Email:{ele.email}</>
                       })}
                        
                    </>
                   
                }
                
            </div>
        </div>
    );
}

export default SearchUser;