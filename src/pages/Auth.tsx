import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { push, Push } from "connected-react-router";

import { LogIn } from "../store/actions";

import Form from "../components/Form";
import { Options } from "../store/actions";
import { AppState } from "../store/store";

interface Props {
    LogIn: (options: Options) => void;
    push: Push;
    isAuthenticated: boolean;
    error?: string;
}

const Auth: FC<Props> = ({ LogIn, push, isAuthenticated, error }) => {
    useEffect(() => {
        isAuthenticated && push("/");
    });

    const handleSubmit = ({ email, password }: Options) => {
        LogIn({ email, password });
        push("/");
    };

    return (
        <>
            <Form error={error} onSubmit={handleSubmit} />
        </>
    );
};

const mapStateToProps = ({ auth }: AppState) => ({
    isAuthenticated: auth.isAuthenticated,
    error: auth.errors
});
const mapDispatchToProps = { LogIn, push };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
