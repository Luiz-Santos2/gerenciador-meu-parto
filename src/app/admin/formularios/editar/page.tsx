"use client";
import * as React from 'react';
import { AdminHeader } from '../../components';
import { useFormularioService } from '../../../../services/formulario';
import { Formulario1, Formulario10, Formulario11, Formulario12, Formulario13, Formulario14, Formulario2, Formulario3, Formulario4, Formulario5, Formulario6, Formulario7, Formulario8, Formulario9 } from './forms';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FormularioEditarPage({ params }: any) {

  const formulariosSrv = useFormularioService();
  const [formulario, setFormulario] = React.useState<any>(null)
  const [ id, setId ] = React.useState(0);
  const [mensagem, setMensagem] = React.useState<null | boolean>(null)
  const router = useRouter();
  const query = useSearchParams();
  // ======================================================================
  const handleSalvar = async (formulario: any) => {
    setMensagem(null);
    console.log(formulario);
    const retorno = await formulariosSrv.editar(formulario);
    setMensagem(retorno.sucesso);

  }
  // ------------
  const handleBuscar = async () => {
    const id = query.get('id');
    setId(Number(id));
    //Crie inicialmente os formulários dentro do firebase para ele ter o que buscar, mesmo que não seja os dados reais
    if (id) {
      const form = await formulariosSrv.buscar(id);
      console.log(form);
      setFormulario(form);
    }


  }
  // ------------
  React.useEffect(() => {
    handleBuscar();
  }, [])
  // ======================================================================
  return (
    <main>
      <AdminHeader titulo={`Editar formulário da Tela #${id}`} />
      <h6>Tela #{id}</h6>

      {mensagem != null && mensagem == false && <p className="alert alert-danger">Não foi possível editar formulário</p>}
      {mensagem != null && mensagem == true && <p className="alert alert-success">Editado com sucesso</p>}

      {formulario &&
        <>
          {id == 1 && <Formulario1 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 2 && <Formulario2 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 3 && <Formulario3 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 4 && <Formulario4 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 5 && <Formulario5 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 6 && <Formulario6 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 7 && <Formulario7 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 8 && <Formulario8 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 9 && <Formulario9 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 10 && <Formulario10 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 11 && <Formulario11 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 12 && <Formulario12 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 13 && <Formulario13 formulario={formulario} handleSalvar={handleSalvar} />}
          {id == 14 && <Formulario14 formulario={formulario} handleSalvar={handleSalvar} />}
        </>
      }

    </main>
  );
}
