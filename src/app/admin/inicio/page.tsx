import * as React from 'react';
import { AdminHeader } from '../components';

export default function InicioPage () {

    return (
      <main>
      <AdminHeader titulo='Bem-vindo!' />
      <div className="row">
        <h6>O que é?</h6>
        <p>De modo geral, os Sistemas Gerenciadores de Banco de Dados são softwares responsáveis por gerenciar o acesso, o armazenamento, a organização e a manipulação de dados em um banco de dados.</p>
        <h6>Objetivo</h6>
        <p>Retirar da aplicação cliente a responsabilidade de gerenciar o acesso, manipulação e organização dos dados. Disponibilizando uma interface para que os seus clientes possam incluir, alterar ou consultar dados.</p>
      </div>
    </main>
    );
}
