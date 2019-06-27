import React from "react";
import { connect } from "react-redux";

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
            <nav>
                <div className="nav-wrapper grey lighten-2">
                    <a href="/" className="brand-logo black-text">
                        Fila pra que?
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
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
