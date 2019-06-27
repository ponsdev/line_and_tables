import React from "react";
import TableItem from "./TableItem";
import "./css/TableList.css";
import Spinner from "./Spinner";
// import dbJson from "./db/db.js";
// import { fetchTables } from "../actions/index";
// import { connect } from "react-redux";

import axios from "axios";

class TableList extends React.Component {
    state = {
        nTables: 1,
        listTables: []
    };

    componentDidMount() {
        const oi = async () => {
            const res = await axios.get("/api/tables");
            const dbJson = res.data;
            this.setState({
                nTables: dbJson.nTables,
                listTables: dbJson.listTables
            });
        };
        oi();
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
            const rows = this.state.listTables.map(table => {
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

// TESTE
// function mapStateToProps({ tables }) {
//     return { tables };
// }
// export default connect(mapStateToProps)(TableList);
// FIM TESTE

export default TableList;
