import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        switch (this.props.user) {
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
                    <div>
                        <li>
                            <Link to="/options" className="black-text">
                                Opções
                            </Link>
                        </li>
                        <li>
                            <a href="/api/logout" className="black-text">
                                Logout
                            </a>
                        </li>
                    </div>
                );
        }
    }

    render() {
        return (
            <div>
                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <Link to="/about" className="black-text">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="black-text">
                            Contato
                        </Link>
                    </li>
                    {this.renderContent()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps)(Sidebar);
