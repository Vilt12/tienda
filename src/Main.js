import React from 'react';
import Foother from "./foother";
import Section from "./section-1";
import Section2 from "./section-2";
import Navbar from "./nav-bar";


function Main() {
    return(
        <div classname="body-main">
          
            <Navbar></Navbar>  
            <Section></Section>
            <Section2></Section2>
            <Foother></Foother>
          
        </div>
    )
}
export default Main;