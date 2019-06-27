import React from "react";
import ClientForm from "./ClientForm";
// import dbJson from "./db/db";

class ClientList extends React.Component {
    state = {
        formOn: 0,
        // clients: dbJson.clientList
        clients: []
    };
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
                    <button className="waves-effect waves-light btn-small grey darken-3">
                        Remover
                    </button>
                </div>
            );
        } else {
            return <ClientForm onSubmit={this.onSubmit} />;
        }
    }
    onSubmit = client => {
        var arrClients = this.state.clients;
        arrClients.push(client);
        this.setState({ formOn: 0, clients: arrClients });
    };
    clientItems = () => {
        var clientsText = "";
        for (var x in this.state.clients) {
            clientsText += `${this.state.clients[x].name} - ${
                this.state.clients[x].tel
            } - ${this.state.clients[x].seats} lugares.   `;
        }
        return clientsText;
    };
    render() {
        return (
            <div className="block">
                <h3 className="grey lighten-2">CLIENTES</h3>
                <div style={{ margin: "15px" }}>{this.clientItems()}</div>
                <div>{this.showForm()}</div>
            </div>
        );
    }
}

export default ClientList;
