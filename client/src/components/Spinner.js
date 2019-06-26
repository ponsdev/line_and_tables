import React from "react";

const Spinner = props => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui big text loader">{props.msg}</div>
    </div>
  );
};

Spinner.defaultProps = {
  msg: "Teste"
};

export default Spinner;
