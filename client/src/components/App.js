import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import TableList from "./TableList";
import ClientList from "./ClientList";

const about = () => <div>Sobre...</div>;
const contact = () => <div>Contato...</div>;
const options = () => <div>Opções....</div>;
const userInterface = () => (
    <div>
        <ClientList />
        <TableList />
    </div>
);

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchConfig();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Sidebar />
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/about/" component={about} />
                        <Route exact path="/contact/" component={contact} />
                        <Route exact path="/options/" component={options} />
                        <Route exact path="/ui/" component={userInterface} />
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
