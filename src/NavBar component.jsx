import { Link } from "react-router-dom";

const NavBarComponent = ()=>{
    return(
        <>
        <div style = {navbarStyle}>
        <Link to = {"/"} style = {{textDecoration : "none" ,color: "inherit"}}> 
        <div style={titlestyle}>Bhabhewa</div>
        </Link>


        <div style= {menuContainerStyle}>


        <Link to = "/ToDoListComponent"
        style={linkStyle}
        >
            <div style = {menuItemStyle}> ToDo</div>
        </Link>

        <Link to = "/PracticeComponent"
        style={linkStyle}
        >
            <div style = {menuItemStyle}> Practice</div>
        </Link>

            <Link to="/about"
            style={linkStyle}
            >
                {" "}

        <div style={menuItemStyle}> About</div>
        </Link>
        <Link to="/"
        style={linkStyle}
        >
            <div style = {menuItemStyle}>Home</div></Link>
        <Link to ="/contact"
        style={linkStyle}
        >
            <div style = {menuItemStyle}>Contact</div>
            </Link>

        <Link to ="/Mui-learn"
        style={linkStyle}
        >
            <div style = {menuItemStyle}>Mui component</div>
            </Link>
        </div>

        

        {/* // React router dom library use to add new dynamic pages or to create dynamic routes. */}
        {/* // Use to create new routes  */}
        </div>
        
        
        
        </>
    );
}

const navbarStyle = {
    display:"flex" ,
    justifyContent: "space-between" ,
    padding: "10px" ,
    backgroundColor: "#333" ,
    color: "white" ,
};

const titlestyle ={
    fontSize: "1.5rem" ,

}

const menuContainerStyle = {
    display: "flex" ,
};

const menuItemStyle = {
    marginLeft : "10px",
    cursor : "pointer"
};

const linkStyle ={
    textDecoration : "none" ,
    color : "inherit"
}

export default NavBarComponent;