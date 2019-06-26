import React from "react";

class ClientForm extends React.Component {
    state = {
        name: "",
        tel: "",
        email: "",
        seats: ""
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };
    render() {
        return (
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Nome</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                    <label>Telefone</label>
                    <input
                        type="text"
                        value={this.state.tel}
                        onChange={e => this.setState({ tel: e.target.value })}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <label>Número de Lugares</label>
                    <input
                        type="text"
                        value={this.state.seats}
                        onChange={e => this.setState({ seats: e.target.value })}
                    />
                </div>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <button className="ui button">Adicionar</button>
                </div>
            </form>
        );
    }
}

export default ClientForm;
