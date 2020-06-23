import React from "react";

const CreateUser = (props) => {
    console.log("props",props);
    const {onhandleCreate} = props;
    return (
        <div className="cu-container">
            <div className="heading">Create User</div>
            <hr/>
            <div className="cu-details">
                <form onSubmit={onhandleCreate}>
                    <div>
                        {/* NAME */}
                        Name: &nbsp;<input  className="cu-input" name="name" type="text" placeholder="Enter Name" required="true" />
                    </div>
                    <div>
                        {/* EMAIL */}
                        Email: &nbsp;<input className="cu-input" name="mail" type="text" placeholder="Enter Email" required="true" />
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

export default CreateUser;