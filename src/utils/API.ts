import { Options } from "../store/actions";

export function authenticate(options: Options) {
    const { email, password } = options;
    const data = [
        { email: "first@mail.ru", password: "first" },
        { email: "second@mail.ru", password: "second" }
    ];
    const user = data.find(x => x.email === email);
    if (user === undefined) {
        return {
            status: 400,
            error: "Пользователь не найден"
        };
    } else if (user !== undefined && user.password !== password) {
        return {
            status: 400,
            error: "Пароль неверный"
        };
    } else {
        return {
            status: 200,
            result: {
                user: email,
                token: "86fasfgfsogHGad"
            }
        };
    }
}
