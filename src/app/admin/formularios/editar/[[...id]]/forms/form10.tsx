import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario10Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario10({ formulario, handleSalvar }: Formulario10Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.audio1) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela10/audio1.mp3'), dados.audio1)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio2) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela10/audio2.mp3'), dados.audio2)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio3) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela10/audio3.mp3'), dados.audio3)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio4) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela10/audio4.mp3'), dados.audio4)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.video1) {
      //converte o video para blob
      await uploadBytesResumable(ref(storage, 'tela10/video1.mp4'), dados.video1)
        .then(async snapshot => {
          //Altera o video para URL
          dados.video1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.video2) {
      //converte o video para blob
      await uploadBytesResumable(ref(storage, 'tela10/video2.mp4'), dados.video2)
        .then(async snapshot => {
          //Altera o video para URL
          dados.video2 = await getDownloadURL(snapshot.ref);
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

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Pega Correta</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* AUDIO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 1 {formulario?.audio1 && <a href={formulario.audio1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio1", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 1</label>
                  <Field as="textarea" className="form-control" name="titulo1" />
                </div>
              </div>

              {/* TEXTO 1 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 1</label>
                  <Field as="textarea" className="form-control" name="texto1" />
                </div>
              </div>

              {/* VÍDEO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Video 1 {formulario?.video1 && <a href={formulario.video1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="video/mp4" onChange={(e: any) => { setFieldValue("video1", e.target.files[0]) }} />
                </div>
              </div>

              {/* AUTOR 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Autor 1</label>
                  <Field as="textarea" className="form-control" name="autor1" />
                </div>
              </div>

              {/* AUDIO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 2{formulario?.audio2 && <a href={formulario.audio2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio2", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 2</label>
                  <Field as="textarea" className="form-control" name="texto2" />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Cuidando das rachaduras na mama</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* AUDIO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 3 {formulario?.audio3 && <a href={formulario.audio3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio3", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 2</label>
                  <Field as="textarea" className="form-control" name="titulo2" />
                </div>
              </div>

              {/* TEXTO 3 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 3</label>
                  <Field as="textarea" className="form-control" name="texto3" />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Pega correta</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* AUDIO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 4 {formulario?.audio4 && <a href={formulario.audio4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio4", e.target.files[0]) }} />
                </div>
              </div>


              {/* TÍTULO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 3</label>
                  <Field as="textarea" className="form-control" name="titulo3" />
                </div>
              </div>

              {/* TEXTO 4 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 4</label>
                  <Field as="textarea" className="form-control" name="texto4" />
                </div>
              </div>

              {/* OBSERVAÇÃO */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Observação</label>
                  <Field as="textarea" className="form-control" name="observacao" />
                </div>
              </div>

              {/* VÍDEO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Video 2 {formulario?.video2 && <a href={formulario.video2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="video/mp4" onChange={(e: any) => { setFieldValue("video2", e.target.files[0]) }} />
                </div>
              </div>

              {/* AUTOR 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Autor 2</label>
                  <Field as="textarea" className="form-control" name="autor2" />
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
