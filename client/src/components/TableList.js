import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import TableItem from "./TableItem";
import Spinner from "./Spinner";
import "./css/TableList.css";

class TableList extends React.Component {
    componentDidMount() {
        this.props.fetchTables();
    }

    onClickTest = e => {
        var tableSelected = e.target.parentElement.children[0].textContent;
        if (window.confirm("Deseja ocupar a mesa?")) {
            var newState = { ...this.props.tables };
            newState.listTables[tableSelected - 1].status = 1;
            this.props.updateTables(newState);
        }
    };

    renderContent() {
        if (this.props.tables === null) {
            return <Spinner msg="Carregando mesas..." />;
        } else {
            const rows = this.props.tables.listTables.map(table => {
                return (
                    <TableItem
                        key={table.table}
                        tableID={table.table}
                        seats={"0" + table.seats + " lugares"}
                        status={table.status === 0 ? "DISPONÍVEL" : "OCUPADA"}
                        color={table.status === 0 ? "green" : "red"}
                        onClick={this.onClickTest}
                    />
                );
            });
            return <div className="tables_container">{rows}</div>;
        }
    }

    render() {
        return (
            <div className="block">
                <h3 className="grey lighten-2">MESAS</h3>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return { tables: state.tables };
};
export default connect(
    mapStateToProps,
    actions
)(TableList);
