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

    getStatus = (opt, status) => {
        if (opt === "text") {
            switch (status) {
                case 0:
                    return "DISPONÍVEL";
                case 1:
                    return "EM FECHAMENTO";
                case 2:
                    return "RESERVADA";
                case 3:
                    return "OCUPADA";
                default:
                    return "-";
            }
        }
        if (opt === "color") {
            switch (status) {
                case 0:
                    return "green";
                case 1:
                    return "yellow";
                case 2:
                    return "orange";
                case 3:
                    return "red";
                default:
                    return "grey";
            }
        }
    };

    onSelectTable = e => {
        var tableSelected = e.target.parentElement.children[0].textContent;
        if (this.props.tables[tableSelected - 1].status === 0) {
            if (window.confirm("Deseja ocupar a mesa?")) {
                var newState = [...this.props.tables];
                newState[tableSelected - 1].status = 3;
                this.props.updateTables(newState);
            }
        } else {
            if (window.confirm("Deseja liberar a mesa?")) {
                newState = [...this.props.tables];
                newState[tableSelected - 1].status = 0;
                this.props.updateTables(newState);
            }
        }
    };

    renderContent() {
        if (this.props.tables_hl.length === 0) {
            return <Spinner msg="Carregando mesas..." />;
        } else {
            const rows = this.props.tables_hl.map(table => {
                return (
                    <TableItem
                        key={table.table}
                        tableID={table.table}
                        seats={"0" + table.seats + " lugares"}
                        // status={table.status === 0 ? "DISPONÍVEL" : "OCUPADA"}
                        status={this.getStatus("text", table.status)}
                        color={this.getStatus("color", table.status)}
                        onClick={this.onSelectTable}
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
    return { tables: state.tables, tables_hl: state.tables_hl };
};
export default connect(
    mapStateToProps,
    actions
)(TableList);
