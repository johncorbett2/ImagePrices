import React from "react";

function Dropdown() {
    return <div>
        <form>
            <label>Choose Image: </label>
            <input placeholder="Enter Image"/>
            <br></br>
            <label>Choose Body Part: </label>
            <input placeholder="Enter Body Part"/>
            <br></br>
            <label>Choose Contrast: </label>
            <input placeholder="Enter Contrast"/>
            <br></br>
            <input type="submit" value="Search"/>
        </form>
    </div>

}

export default Dropdown;