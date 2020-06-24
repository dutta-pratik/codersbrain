import React from "react";

const ListUser = (props) => {
    console.log("p",props);
    const {users, handleDeleteUser, handleEditUser,handleDownload} = props;
    
    return (
        <div className="cu-container">
            <div className="heading">List User</div>
            <hr/>
            <div className="cu-details">
                {users == null ?
                    <h2>Fetching...</h2>:
                    <>
                    <table>
                        <tbody>

                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                
                                <th>Delete</th>
                            </tr>
                            

                            {users.map((user) => {
                            
                            return <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><button className="cu-del-btn" onClick={()=>handleDeleteUser(user.id)}>Delete</button></td>
                                    </tr>
                                }) }

                        </tbody>
                        
                    </table>
                   <button className="cu-btn" onClick={handleDownload}>Download</button>
                   </>
                }
                
            </div>
        </div>
    );
}

export default ListUser;





