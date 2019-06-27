import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google" className="black-text">
                        Login
                    </a>
                );
            default:
                return (
                    <a href="/api/logout" className="black-text">
                        Logout
                    </a>
                );
        }
    }

    render() {
        return (
            <div>
                <ul class="sidenav" id="mobile-demo">
                    <li>
                        <a href="/about" className="black-text">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="black-text">
                            Contato
                        </a>
                    </li>
                    <li>{this.renderContent()}</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Sidebar);
