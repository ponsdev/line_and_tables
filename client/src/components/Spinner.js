import React from "react";

const Spinner = props => {
    return (
        <div className="progress">
            <div className="indeterminate" />
        </div>
    );
};

Spinner.defaultProps = {
    msg: "Teste"
};

export default Spinner;
