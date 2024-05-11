import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario3Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario3({ formulario, handleSalvar }: Formulario3Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.audioTitulo1) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioTitulo1.mp3'), dados.audioTitulo1)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioTitulo1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audioTitulo2) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioTitulo2.mp3'), dados.audioTitulo2)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioTitulo2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audioTitulo3) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioTitulo3.mp3'), dados.audioTitulo3)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioTitulo3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audioSubtitulo1) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioSubtitulo1.mp3'), dados.audioSubtitulo1)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioSubtitulo1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audioSubtitulo2) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioSubtitulo2.mp3'), dados.audioSubtitulo2)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioSubtitulo2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audioSubtitulo3) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioSubtitulo3.mp3'), dados.audioSubtitulo3)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioSubtitulo3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audioSubtitulo4) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioSubtitulo4.mp3'), dados.audioSubtitulo4)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioSubtitulo4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audioSubtitulo5) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela3/audioSubtitulo5.mp3'), dados.audioSubtitulo5)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audioSubtitulo5 = await getDownloadURL(snapshot.ref);
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

              {/* TITULO PRINCIPAL */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título principal</label>
                  <Field as="textarea" className="form-control" name="tituloPrincipal" />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">1º Período do Trabalho de Parto</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* AUDIO TITULO 1 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 1{formulario?.audioTitulo1 && <a href={formulario.audioTitulo1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioTitulo1", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO TITULO 1 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 1</label>
                  <Field as="textarea" className="form-control" name="textoTitulo1" />
                </div>
              </div>

              {/* TEXTO SUBTITULO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 1</label>
                  <Field as="textarea" className="form-control" name="textoSubtitulo1" />
                </div>
              </div>

              {/* AUDIO SUBTITULO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 1 {formulario?.audioSubtitulo1 && <a href={formulario.audioSubtitulo1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioSubtitulo1", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO SUBTITULO  2*/}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 2</label>
                  <Field as="textarea" className="form-control" name="textoSubtitulo2" />
                </div>
              </div>
              {/* AUDIO SUBTITULO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 2 {formulario?.audioSubtitulo2 && <a href={formulario.audioSubtitulo2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioSubtitulo2", e.target.files[0]) }} />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">2º Período do Trabalho de Parto</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* AUDIO TITULO 2 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 2 {formulario?.audioTitulo2 && <a href={formulario.audioTitulo2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioTitulo2", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO TITULO 2 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 2</label>
                  <Field as="textarea" className="form-control" name="textoTitulo2" />
                </div>
              </div>

              {/* TEXTO SUBTITULO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 3</label>
                  <Field as="textarea" className="form-control" name="textoSubtitulo3" />
                </div>
              </div>

              {/* AUDIO SUBTITULO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 3 {formulario?.audioSubtitulo3 && <a href={formulario.audioSubtitulo3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioSubtitulo3", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO SUBTITULO  4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 4</label>
                  <Field as="textarea" className="form-control" name="textoSubtitulo4" />
                </div>
              </div>
              {/* AUDIO SUBTITULO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 4 {formulario?.audioSubtitulo4 && <a href={formulario.audioSubtitulo4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioSubtitulo4", e.target.files[0]) }} />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">3º Período do Trabalho de Parto</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* AUDIO TITULO 3 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 3 {formulario?.audioTitulo3 && <a href={formulario.audioTitulo3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioTitulo3", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO TITULO 3 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 3</label>
                  <Field as="textarea" className="form-control" name="textoTitulo3" />
                </div>
              </div>

              {/* TEXTO SUBTITULO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 5</label>
                  <Field as="textarea" className="form-control" name="textoSubtitulo5" />
                </div>
              </div>

              {/* AUDIO SUBTITULO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 5 {formulario?.audioSubtitulo5 && <a href={formulario.audioSubtitulo5} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audioSubtitulo5", e.target.files[0]) }} />
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
