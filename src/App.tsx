import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
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
        props.isAuthenticated === true ? (
            <Route exact path="/" component={Main} />
        ) : (
            <Route path="/">
                <Redirect to="/login" />
            </Route>
        );
    return (
        <Provider store={props.store}>
            <ConnectedRouter history={props.history}>
                <Switch>
                    <Route path="/login">
                        <Auth />
                    </Route>
                    {app}
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

const mapStateToProps = ({ auth }: AppState) => ({
    isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
