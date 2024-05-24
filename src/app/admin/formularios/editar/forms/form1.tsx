import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario1Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario1({ formulario, handleSalvar }: Formulario1Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.audio1 && typeof (dados.audio1) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela1/audio1.mp3'), dados.audio1)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio2 && typeof (dados.audio2) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela1/audio2.mp3'), dados.audio2)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem && typeof (dados.imagem) != 'string') {
      //converte a imagem para blob
      await uploadBytesResumable(ref(storage, 'tela1/imagem.jpg'), dados.imagem)
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

              {/* AUDIO 1 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Audio 1 {formulario?.audio1 && <a href={formulario.audio1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio1", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO  1 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 1</label>
                  <Field as="textarea" className="form-control" name="texto1" />
                </div>
              </div>

              {/* AUDIO 2 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Audio 2 {formulario?.audio2 && <a href={formulario.audio2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio2", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO  2 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 2</label>
                  <Field as="textarea" className="form-control" name="texto2" />
                </div>
              </div>

              {/* IMAGEM */}
              <div className="col-md-12">
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
