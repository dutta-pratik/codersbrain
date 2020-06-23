import React from "react";

const EditCategory = (props) => {
    console.log("p",props);
    const {category, handleEditCategory} = props;
    
    return (
        <div className="cu-container">
            <div className="heading">Edit Category</div>
            <hr/>
            <div className="cu-details">
                {category == null ?
                    <h2>Fetching...</h2>:
                    
                    <>
                   {category.map((category) => {
                      return <form key={category.id} onSubmit={handleEditCategory}>
                            <input className="field" type="hidden" value={category.id} readOnly/>
                           <input className="field" type="text" placeholder={category.name} name="name" />
                          
                           <input className="cu-del-btn" type="submit"  value="Edit"/>
                       </form>
                   })}
                   </> 
                }
                
            </div>
        </div>
    );
}

export default EditCategory;