import React from "react";

import StarIcon from "@material-ui/icons/Star";
import styled from "styled-components";

const Main: React.FC<{}> = () => {
    return (
        <>
            <Title>Главная страница</Title>
            <Text>
                <StarIcon />
                Авторизация прошла успешно
                <StarIcon />
            </Text>
        </>
    );
};

const Title = styled.h1`
    color: #2196f3;
    text-align: center;
    font-size: 26px;
    margin-top: 30px;
`;
const Text = styled.p`
    color: #2196f3;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
`;

export default Main;
