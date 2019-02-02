import React from "react";

const MenuButtons = props => {
  return (
    <div className="trash-div">
      <span
        onClick={() => props.deleteNote()}
        className="trash-icon far fa-trash-alt"
      />
    </div>
  );
};

export default MenuButtons;
