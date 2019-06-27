import React from "react";
import TableItem from "./TableItem";
import "./css/TableList.css";
import Spinner from "./Spinner";
import dbJson from "./db/db.js";

class TableList extends React.Component {
    state = {
        nTables: 1,
        listTables: []
    };

    componentDidMount() {
        this.setState({
            nTables: dbJson.nTables,
            listTables: dbJson.listTables
        });
    }

    onClickTest = e => {
        var tableSelected = e.target.parentElement.children[0].textContent;
        var tableObj = this.state.listTables[tableSelected - 1];
        if (window.confirm("Deseja ocupar a mesa?")) {
            tableObj.status = 1;
            this.setState({ tableObj });
        }
    };

    renderContent() {
        if (this.state.listTables.length === 0) {
            return <Spinner msg="Carregando mesas..." />;
        } else {
            let rows = [];
            for (var x in this.state.listTables) {
                let seats = "0" + this.state.listTables[x].seats + " lugares";
                let status = "";
                let color = "";
                if (this.state.listTables[x].status === 0) {
                    status = "DISPONÍVEL";
                    color = "green";
                } else {
                    status = "OCUPADA";
                    color = "red";
                }
                rows.push(
                    <TableItem
                        key={"table_" + x}
                        tableID={this.state.listTables[x].table}
                        seats={seats}
                        status={status}
                        color={color}
                        onClick={this.onClickTest}
                    />
                );
            }
            return <div className="tables_container">{rows}</div>;
        }
    }

    render() {
        return (
            <div className="block">
                <h3>LISTA DE MESAS</h3>
                {this.renderContent()}
            </div>
        );
    }
}

export default TableList;
