import React, { useState } from "react";

import { Options } from "../store/actions";

interface Props {
    onSubmit: (e: Options) => void;
    error?: string;
}

const Form: React.FC<Props> = ({ onSubmit, error }) => {
    const [email, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit && onSubmit({ email, password });
        setLogin("");
        setPassword("");
    };

    const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    };

    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };
    console.log(error);
    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={handleSetEmail} type="email" />
            <input value={password} onChange={handleSetPassword} />
            <button type="submit">Войти в аккаунт</button>
        </form>
    );
};

export default Form;
