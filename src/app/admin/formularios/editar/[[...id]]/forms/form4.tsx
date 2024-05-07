import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario4Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario4({ formulario, handleSalvar }: Formulario4Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.video) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela4/video.mp4'), dados.video)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.video = await getDownloadURL(snapshot.ref);
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

              {/* TEXTO */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto</label>
                  <Field as="textarea" className="form-control" name="texto" />
                </div>
              </div>

              {/* TEXTO 2*/}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 2</label>
                  <Field as="textarea" className="form-control" name="texto2" />
                </div>
              </div>

              {/* VÍDEO */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Vídeo {formulario?.video && <a href={formulario.video} target="_blank">(VISUALIZAR VÍDEO)</a>} </label>
                  <input className="form-control" type="file" accept="video/mp4" onChange={(e: any) => { setFieldValue("video", e.target.files[0]) }} />
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
