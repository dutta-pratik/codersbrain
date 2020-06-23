import React from "react";

const EditUser = (props) => {
    console.log("p",props);
    const {users, handleEditUser} = props;
    
    return (
        <div className="cu-container">
            <div className="heading">Edit User</div>
            <hr/>
            <div className="cu-details">
                {users == null ?
                    <h2>Fetching...</h2>:
                   
                    <div className="edit-user">
                    <h5>*Please write in both fields</h5>
                   {users.map((user) => {
                      return <form  key={user.id} onSubmit={handleEditUser}>
                            <input type="hidden" value={user.id} readOnly/>
                           <input className="field" type="text" placeholder={user.name} name="name" />
                           <input className="field" type="text" placeholder={user.email} name="email"/>
                           <input className="cu-del-btn" type="submit"  value="Edit"/>
                           <hr/>
                       </form>
                      
                   })}
                   </div> 
                }
                
            </div>
        </div>
    );
}

export default EditUser;