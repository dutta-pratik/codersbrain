


import React from "react";

const CreateCategory = (props) => {
    console.log("props",props);
    const {onhandleCreate} = props;
    return (
        <div className="cu-container">
            <div className="heading">Create Category</div>
            <hr/>
            <div className="cu-details">
                <form onSubmit={onhandleCreate}>
                    <div>
                        {/* NAME */}
                        Name: &nbsp;<input  className="cu-input" name="name" type="text" placeholder="Enter Name" required="true" />
                    </div>
                    
                    <div>
                        {/* BUTTON */}
                        <input type="submit" className="cu-btn" />
                    </div>
                </form>
                

            </div>
        </div>
    );
}

export default CreateCategory;