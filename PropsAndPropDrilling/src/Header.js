import React from 'react'

const Header = ({tittle}) => {
  const headerStyle = {
    //******* saving inline style in variable */
    // background: "royalblue",
    // color: "goldenrod",
    // fontSise: "30px"
  }
  return (
    <header style={headerStyle}>
      <h1>{tittle}</h1>
    </header>
    //******** Using variable in inline style */ 
    // <header style={headerStyle}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>

    //******* Direct Inline styling */
    // <header style={{background: "blue", color: "red", fontSize: "24px"}}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>
  );
};

Header.defaultProps = {
  tittle: "Default Tittle"
}

export default Header
