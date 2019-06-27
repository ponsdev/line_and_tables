import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
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
                <nav>
                    <div className="nav-wrapper grey lighten-2">
                        <Link
                            to={this.props.auth ? "/ui" : "/"}
                            className="brand-logo black-text"
                        >
                            Fila pra que?
                        </Link>
                        <a
                            className="sidenav-trigger"
                            href="#"
                            data-target="mobile-demo"
                        >
                            <i className="material-icons">menu</i>
                        </a>
                        <ul
                            id="nav-mobile"
                            className="right hide-on-med-and-down  black-text"
                        >
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
                </nav>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
