import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";

import { History } from "history";
import { AppState } from "./store/store";

import Auth from "./pages/Auth";
import Main from "./pages/Main";

interface Props {
    history: History;
    store: Store<AppState>;
    isAuthenticated: boolean | null;
}

const App: React.SFC<Props> = props => {
    const app =
        props.isAuthenticated !== null ? (
            <Router history={props.history}>
                <Route component={Main} />
            </Router>
        ) : (
            <Redirect to={{ pathname: "/login" }} /> //если пользователь не прошел авторизацию
        );
    return (
        <Provider store={props.store}>
            <ConnectedRouter history={props.history}>
                <Switch>
                    {app}
                    <Route exact path="/login" component={Auth} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

const mapStateToProps = ({ auth }: AppState) => ({
    isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
