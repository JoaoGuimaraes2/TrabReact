import React from 'react';
import { Title, Previsao, Botao} from './style'

const Prev: React.FC = () => {
    return (
        <>
        <Title>
            Previsão Diária
        </Title>
        <Previsao>
        <ul>
          <li>Temperatura atual: 25°</li>
          <li>Temperatura Máxima: 34°</li>
          <li>Temperatura Mínima: 17°</li>
          <li>Pressão: 1022 hpa</li>
          <li>Umidade: 90%</li>
      </ul>
        </Previsao>
        <Botao>
            <a href="/">
                Voltar
            </a>
        </Botao>
        </>
    )
};

export default Prev;