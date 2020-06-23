import React from "react";

const SearchCategory = (props) => {
    console.log("p",props);
    const {category, searchedcategory, handleSearchCategory} = props;
    
    return (
        <div className="cu-container">
            <div className="heading">Search Category</div>
            <hr/>
            <div className="cu-details">
                <form onSubmit={handleSearchCategory}>
                    <input className="field" type="text" placeholder="Enter Category" name="search" />
                    <input className="cu-del-btn" type="submit" value="search" />
                </form>
                
                {searchedcategory == null ?
                    <>...</>:
                    <>
                       {searchedcategory.map((ele)=>{
                           return <>Name: {ele.name} </>
                       })}
                        
                    </>
                   
                }
                
            </div>
        </div>
    );
}

export default SearchCategory;