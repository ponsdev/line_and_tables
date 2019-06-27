import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Welcome from "./Welcome";
import Header from "./Header";
import TableList from "./TableList";
import ClientList from "./ClientList";

const welcome = () => (
    <div>
        <Welcome />
    </div>
);
const about = () => <div>Sobre...</div>;
const contact = () => <div>Contato...</div>;
const userInterface = () => (
    <div>
        <ClientList />
        <TableList />
    </div>
);

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={welcome} />
                        <Route exact path="/about/" component={about} />
                        <Route exact path="/contact/" component={contact} />
                        <Route path="/ui/" component={userInterface} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(App);
