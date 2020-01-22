import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { push, Push } from "connected-react-router";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import LockIcon from "@material-ui/icons/LockOutlined";

import { Options, LogIn } from "../store/actions";
import { AppState } from "../store/store";

import Form from "../components/Form";

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

    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="xs">
            <Icon>
                <LockIcon style={{ fill: "white", fontSize: 25 }} />
            </Icon>
            <Title>Вход в аккаунт</Title>
            <Form error={error} onSubmit={handleSubmit} />
            <Links>
                <Link href="#">Забыли пароль?</Link>
                <Link className={classes.link} href="#">
                    Еще нет аккаунта? Регистрация
                </Link>
            </Links>
            <Footer>Copyright@ Ваш сайт 2020.</Footer>
        </Container>
    );
};

const useStyles = makeStyles({
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    link: {
        textAlign: "right"
    }
});

const Links = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
`;
const Link = styled.a`
    color: #2196f3;
    font-size: 14px;
    text-decoration: none;
    max-width: 215px;
    min-width: 130px;
    &:hover {
        text-decoration: underline;
    }
`;
const Icon = styled.div`
    align-items: center;
    background-color: #e10050;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    height: 40px;
    margin: 0 auto;
    width: 40px;
`;
const Title = styled.h1`
    font: 300 24px/18px Roboto, sans-serif;
    margin-bottom: 20px;
    text-align: center;
`;
const Footer = styled.footer`
    color: rgba(0, 0, 0, 0.54);
    font: 300 14px/18px Roboto, sans-serif;
    text-align: center;
`;

const mapStateToProps = ({ auth }: AppState) => ({
    isAuthenticated: auth.isAuthenticated,
    error: auth.errors
});
const mapDispatchToProps = { LogIn, push };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
