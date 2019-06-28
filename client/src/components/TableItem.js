import React from "react";

class TableItem extends React.Component {
    render() {
        return (
            <div className="table">
                <div
                    className="tableIcon"
                    style={{ backgroundColor: this.props.color }}
                    onClick={this.props.onClick}
                >
                    <p>{this.props.tableID}</p>
                </div>
                <div className="tableContent">
                    <span href="/" className="tableID">
                        Mesa {this.props.tableID}
                    </span>
                    <div className="tableSeats">
                        <span className="seats">{this.props.seats}</span>
                    </div>
                    <div className="tableStatus">{this.props.status}</div>
                </div>
            </div>
        );
    }
}

export default TableItem;
