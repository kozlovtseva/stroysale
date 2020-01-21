import { action } from "typesafe-actions";

export enum AuthActionTypes {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR"
}

export interface Options {
    email: string;
    password: string;
}

export const LogIn = ({ email, password }: Options) =>
    action(AuthActionTypes.LOGIN_REQUEST, { email, password });

export const LogInSuccess = (token: string) =>
    action(AuthActionTypes.LOGIN_SUCCESS, { token });

export const LogInError = (message: string) =>
    action(AuthActionTypes.LOGIN_ERROR, message);
