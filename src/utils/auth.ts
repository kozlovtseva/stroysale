export const getToken = (): string | null => {
    return localStorage.getItem("jwt");
};

export const setToken = (token: string) => {
    localStorage.setItem("jwt", token);
};

export const isAuthenticated = (): boolean => {
    return Boolean(localStorage.getItem("jwt"));
};
