import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./Welcome";
import TableList from "./TableList";
import ClientList from "./ClientList";

const userInterface = () => (
    <div>
        <ClientList />
        <TableList />
        <a href="/auth/google">Clique aqui para logar</a>
    </div>
);

const welcome = () => (
    <div>
        <Welcome />
    </div>
);

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={welcome} />
                        <Route path="/ui/" component={userInterface} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
