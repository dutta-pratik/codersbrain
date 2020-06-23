import React from "react";

const ListCategory = (props) => {
    console.log("p",props);
    const {category, handleDeleteCategory, handleEditCategory} = props;
    
    return (
        <div className="cu-container">
            <div className="heading">List Category</div>
            <hr/>
            <div className="cu-details">
                {category == null ?
                    <h2>Fetching...</h2>:
                    <>
                    <table>
                        <tbody>

                            <tr>
                                <th>Name</th>
                                
                                <th>Delete</th>
                            </tr>
                            

                            {category.map((e) => {
                            
                            return <tr key={e.id}>
                                        <td>{e.name}</td>
                                       
                                        <td><button className="cu-del-btn" onClick={()=>handleDeleteCategory(e.id)}>Delete</button></td>
                                    </tr>
                                }) }

                        </tbody>
                        
                    </table>
                  
                   </>
                }
                
            </div>
        </div>
    );
}

export default ListCategory;