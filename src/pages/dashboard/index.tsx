import { Component } from "react";

import React from 'react';
import { Title, Botao} from './style'

const Dashboard: React.FC = () => {
    return (
        <>
        <Title>
            Cria tempo
        </Title>
        <Botao>
            <a href="/tempo">
                Consultar Clima
            </a>
        </Botao>
        </>
    )
};

export default Dashboard;