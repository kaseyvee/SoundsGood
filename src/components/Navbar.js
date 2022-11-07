import React from "react"


const Navbar = () => {
    
    return (

        <div 
            id="container" 
            className="navbar"
        >

            <div className="navbar_logo-container">
                <img
                    className="navbar_logo-container_image" 
                    src={process.env.PUBLIC_URL + "image.png"}
                /> 
            </div>
            
            <div className="navbar_button"> 
                <div className="navbar_button_child">
                        <h1>WELCOME</h1>
                </div>

                <div className="navbar_button_child">
                    <h1>CODY WRITE SOME T_childEXT</h1>
                </div>

                <div className="navbar_button_child">
                    <h1>KASEY WRITE SOME _childTEXT</h1>
                </div>
            </div>


        </div>
    );
}

export default Navbar;