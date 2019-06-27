import React from "react";

class ClientForm extends React.Component {
    state = {
        name: "",
        tel1: "",
        tel2: "",
        tel3: "",
        email: "",
        seats: ""
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(true, this.state);
    };
    render() {
        return (
            <form className="col s12" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <div className="row">
                        <div className="input-field col s12">
                            <label>Nome</label>
                            <input
                                type="text"
                                className="validate"
                                value={this.state.name}
                                pattern="[a-z\s]+$"
                                required
                                onChange={e =>
                                    this.setState({ name: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s4">
                            <label>Telefone 1</label>
                            <input
                                type="tel"
                                className="validate"
                                pattern="[0-9]{2}[0-9]{4,6}[0-9]{3,4}$"
                                // pattern="\([0-9]{2}\)[0-9]{4,6}[0-9]{3,4}$"
                                value={this.state.tel1}
                                required
                                onChange={e =>
                                    this.setState({ tel1: e.target.value })
                                }
                            />
                        </div>
                        <div className="input-field col s4">
                            <label>Telefone 2</label>
                            <input
                                type="tel"
                                className="validate"
                                value={this.state.tel2}
                                onChange={e =>
                                    this.setState({ tel2: e.target.value })
                                }
                            />
                        </div>
                        <div className="input-field col s4">
                            <label>Telefone 3</label>
                            <input
                                type="tel"
                                className="validate"
                                value={this.state.tel3}
                                onChange={e =>
                                    this.setState({ tel3: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label>Email</label>
                            <input
                                type="email"
                                className="validate"
                                value={this.state.email}
                                onChange={e =>
                                    this.setState({ email: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <label>Número de Lugares</label>
                            <input
                                type="text"
                                pattern="[0-9]{2}"
                                className="validate"
                                value={this.state.seats}
                                required
                                onChange={e =>
                                    this.setState({ seats: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <button className="waves-effect waves-light btn-small grey darken-3">
                        Adicionar
                    </button>
                    <button
                        onClick={e => this.props.onSubmit(false)}
                        className="waves-effect waves-light btn-small grey darken-3"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

export default ClientForm;
