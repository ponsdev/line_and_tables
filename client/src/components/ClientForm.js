import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ClientForm extends React.Component {
    state = {
        name: "",
        tel1: "",
        tel2: "",
        tel3: "",
        email: "",
        seats: "",
        arrivalTime: ""
    };
    componentDidMount() {
        this.showHighlight("");
    }
    showHighlight = seats => {
        var arrTables = JSON.parse(JSON.stringify(this.props.tables));
        arrTables = arrTables.map(i => {
            if (seats === "") {
                seats = 1;
            }
            if (i.status === 0 && seats <= i.seats) {
                i.status = 0;
            } else {
                i.status = 5;
            }
            return i;
        });
        this.props.highlightTables(arrTables);
    };
    onFormSubmit = event => {
        event.preventDefault();
        let client = this.state;

        var curDate = new Date();
        var time = curDate.getHours() + ":" + curDate.getMinutes();
        var date = curDate.getDate();
        var month = curDate.getMonth(); //Be careful! January is 0 not 1
        var year = curDate.getFullYear();
        var dateString = time + " " + date + "/" + (month + 1) + "/" + year;

        client.arrivalTime = dateString;
        this.props.onSubmit(true, client);
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
                                pattern="[A-Za-z\ ]+$"
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
                                maxLength="11"
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
                                maxLength="11"
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
                                maxLength="11"
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
                                // pattern="[0-9]{1-2}"
                                maxLength="2"
                                className="validate"
                                value={this.state.seats}
                                required
                                onChange={e => {
                                    this.setState({ seats: e.target.value });
                                    this.showHighlight(e.target.value);
                                }}
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

const mapStateToProps = function(state) {
    return { tables: state.tables, tables_hl: state.tables_hl };
};
export default connect(
    mapStateToProps,
    actions
)(ClientForm);
