import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario5Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario8({ formulario, handleSalvar }: Formulario5Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.audio) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela8/audio.mp3'), dados.audio)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem) {
      //converte a imagem para blob
      await uploadBytesResumable(ref(storage, 'tela8/imagem.png'), dados.imagem)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem = await getDownloadURL(snapshot.ref);
        })
    }

    handleSalvar(dados);
  }

  return (
    <Formik
      initialValues={formulario}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div className="card-body">
            <div className="row">

              {/* AUDIO */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio {formulario?.audio && <a href={formulario.audio} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio", e.target.files[0]) }} />
                </div>
              </div>

               {/* TITULO */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título</label>
                  <Field as="textarea" className="form-control" name="titulo" />
                </div>
              </div>

              {/* TEXTO */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto</label>
                  <Field as="textarea" className="form-control" name="texto" />
                </div>
              </div>

              {/* MENU 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Menu 1</label>
                  <Field as="textarea" className="form-control" name="menu1" />
                </div>
              </div>

              {/* MENU 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Menu 2</label>
                  <Field as="textarea" className="form-control" name="menu2" />
                </div>
              </div>

              {/* MENU 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Menu 3</label>
                  <Field as="textarea" className="form-control" name="menu3" />
                </div>
              </div>

              {/* IMAGEM */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Imagem {formulario?.imagem && <a href={formulario.imagem} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem", e.target.files[0]) }} />
                </div>
              </div>

              {/* BOTÃO */}
              <div className="col-md-12">
                <div className="form-group">
                  <button className='btn btn-primary w-100' type="submit" disabled={isSubmitting}>Salvar</button>
                </div>
              </div>

              {/* BOTÃO VOLTAR */}
              <div className="col-md-12">
                <div className="form-group">
                  <Link href={`/admin/formularios/`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Back form">
                    Voltar
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </Form>)}
    </Formik>
  );
}
