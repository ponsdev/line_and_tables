import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
    renderContent() {
        switch (this.props.user) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google" className="black-text">
                            Login
                        </a>
                    </li>
                );
            default:
                return (
                    <li>
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
                    </li>
                );
        }
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey lighten-2">
                        <Link
                            to={this.props.user ? "/ui" : "/"}
                            className="brand-logo black-text"
                        >
                            {this.props.user
                                ? "Fila pra que?! - " + this.props.user.name
                                : "Fila pra que?!"}
                        </Link>
                        <Link
                            className="sidenav-trigger"
                            href="/"
                            data-target="mobile-demo"
                        >
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul
                            id="nav-mobile"
                            className="right hide-on-med-and-down  black-text"
                        >
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
                </nav>
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps)(Header);
