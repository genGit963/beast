import React from "react";

function Footer(){

  const footerCss = {
    backgroundColor:"lightgreen",
     color:"white"
    }
    
    if(footerCss.backgroundColor !== "black"){
      footerCss.color = "black";
    }
  

  return(
    <footer>
      <h1 style={footerCss}>This is footer.</h1>
    </footer>
  );
}

export default Footer;