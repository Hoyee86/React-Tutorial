import React from "react";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onClick={(e) => e.preventDefault()}>
       <Input 
       type="text" 
       autoFocus 
       placeholder="Add Color Name" 
       color={colorValue}
       onChange={(e)=> {
       setColorValue(e. target.value)
       setHexValue(colorNames())
      }
    }
       />
    </form>
  );
};

export default Input;
