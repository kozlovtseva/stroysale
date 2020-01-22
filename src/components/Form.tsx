import React, { useState } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { Options } from "../store/actions";

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#2196F3"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#2196F3"
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#2196F3"
            }
        }
    }
})(TextField);

const CssCheckbox = withStyles({
    root: {
        "&$checked": {
            color: "#2196F3"
        }
    },
    checked: {}
})(Checkbox);

const useStyles = makeStyles({
    input: {
        margin: "10px 0"
    },
    button: {
        backgroundColor: "#2196F3",
        textTransform: "none",
        marginTop: "30px",
        marginBottom: "15px",
        "&:hover": {
            backgroundColor: "#2F80ED"
        }
    }
});

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
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <CssTextField
                fullWidth
                className={classes.input}
                id="email_input"
                label="Почта*"
                value={email}
                onChange={handleSetEmail}
                variant="outlined"
            />
            <CssTextField
                fullWidth
                className={classes.input}
                id="password_input"
                label="Пароль*"
                value={password}
                onChange={handleSetPassword}
                variant="outlined"
            />
            <FormControlLabel
                control={
                    <CssCheckbox
                        // onChange={handleChange("checkedB")}
                        style={{ fill: "black" }}
                        color="primary"
                    />
                }
                label="Запомнить меня"
            />
            <Button
                fullWidth
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
            >
                Войти в аккаунт
            </Button>
        </form>
    );
};

export default Form;
