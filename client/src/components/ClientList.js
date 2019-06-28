import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import ClientForm from "./ClientForm";
import Spinner from "./Spinner";

class ClientList extends React.Component {
    state = {
        formOn: 0,
        selected: {}
    };
    componentDidMount() {
        this.props.fetchClients();
    }
    showForm() {
        if (this.state.formOn === 0) {
            return (
                <div style={{ margin: "5px", textAlign: "center" }}>
                    <button
                        className="waves-effect waves-light btn-small grey darken-3"
                        onClick={e => this.setState({ formOn: 1 })}
                    >
                        Adicionar
                    </button>
                    <button
                        className="waves-effect waves-light btn-small grey darken-3"
                        onClick={this.onRemove}
                    >
                        Remover
                    </button>
                </div>
            );
        } else {
            return <ClientForm onSubmit={this.onSubmit} />;
        }
    }
    onSubmit = (opt, client = null) => {
        if (opt === true) {
            var arrClients = this.props.clients;
            arrClients.push(client);
            this.props.addClient(client);
            this.props.updateClients(arrClients);
        }
        this.setState({ formOn: 0 });
        const arrTables = [...this.props.tables];
        this.props.updateTables(arrTables);
    };
    onSelect = e => {
        var client = e.target.text.split(" - ");
        this.setState({
            selected: { name: client[0].trim(), tel1: client[2].trim() }
        });
    };
    onRemove = e => {
        var arrClients = this.props.clients;
        arrClients = arrClients.filter(item => {
            return item.name !== this.state.selected.name.trim();
        });
        this.props.updateClients(arrClients);
        // console.log(arrClients);
    };
    renderContent() {
        if (this.props.clients === null) {
            return <Spinner msg="Carregando clientes..." />;
        } else {
            const rows = this.props.clients.map(client => {
                return (
                    <a
                        key={this.props.clients.indexOf(client)}
                        href="#!"
                        className={
                            this.state.selected.name === client.name &&
                            this.state.selected.tel1 === client.tel1
                                ? "collection-item active"
                                : "collection-item"
                        }
                        onClick={this.onSelect}
                    >
                        {`${client.name}   -   ${client.seats} lugares   -   ${
                            client.tel1
                        }   -   Chegada: ${client.arrivalTime}`}
                    </a>
                );
            });
            return rows;
        }
    }
    render() {
        return (
            <div className="block">
                <h3 className="grey lighten-2">CLIENTES</h3>
                <div className="collection">{this.renderContent()}</div>
                <div>{this.showForm()}</div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return { clients: state.clients, tables: state.tables };
};
export default connect(
    mapStateToProps,
    actions
)(ClientList);
