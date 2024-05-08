"use client";
import * as React from 'react';
import { AdminHeader } from '../../../components';
import { useFormularioService } from '../../../../../services/formulario';
import { Formulario1, Formulario10, Formulario11, Formulario12, Formulario13, Formulario2, Formulario3, Formulario4, Formulario5, Formulario6, Formulario7, Formulario9 } from './forms';
import { useRouter } from 'next/navigation';
import Formulario8 from './forms/form8';

export default function FormularioEditarPage({ params }: any) {

  const formulariosSrv = useFormularioService();
  const [formulario, setFormulario] = React.useState<any>(null)
  const [mensagem, setMensagem] = React.useState<null | boolean>(null)
  const router = useRouter();

  // ======================================================================
  const handleSalvar = async (formulario: any) => {
    setMensagem(null);
    console.log(formulario);
    const retorno = await formulariosSrv.editar(formulario);
    setMensagem(retorno.sucesso);

  }
  // ------------
  const handleBuscar = async () => {
    //Crie inicialmente os formulários dentro do firebase para ele ter o que buscar, mesmo que não seja os dados reais
    const form = await formulariosSrv.buscar(params.id[0]);
    console.log(form);
    setFormulario(form);


  }
  // ------------
  React.useEffect(() => {
    handleBuscar();
  }, [])
  // ======================================================================
  return (
    <main>
      <AdminHeader titulo={`Editar formulário da Tela #${params.id[0]}`} />
      <h6>Tela #{params.id[0]}</h6>

      {mensagem != null && mensagem == false && <p className="alert alert-danger">Não foi possível editar formulário</p>}
      {mensagem != null && mensagem == true && <p className="alert alert-success">Editado com sucesso</p>}

      {formulario &&
        <>
          {params.id && params.id[0] == "1" && <Formulario1 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "2" && <Formulario2 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "3" && <Formulario3 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "4" && <Formulario4 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "5" && <Formulario5 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "6" && <Formulario6 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "7" && <Formulario7 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "8" && <Formulario8 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "9" && <Formulario9 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "10" && <Formulario10 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "11" && <Formulario11 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "12" && <Formulario12 formulario={formulario} handleSalvar={handleSalvar} />}
          {params.id && params.id[0] == "13" && <Formulario13 formulario={formulario} handleSalvar={handleSalvar} />}
        </>
      }

    </main>
  );
}
