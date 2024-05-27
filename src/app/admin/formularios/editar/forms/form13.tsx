import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario13Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario13({ formulario, handleSalvar }: Formulario13Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.audio1 && typeof (dados.audio1) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela13/audio1.mp3'), dados.audio1)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio2 && typeof (dados.audio2) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela13/audio2.mp3'), dados.audio2)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio3 && typeof (dados.audio3) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela13/audio3.mp3'), dados.audio3)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio4 && typeof (dados.audio4) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela13/audio4.png'), dados.audio4)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio5 && typeof (dados.audio5) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela13/audio5.png'), dados.audio5)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio5 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio6 && typeof (dados.audio6) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela13/audio6.png'), dados.audio6)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio6 = await getDownloadURL(snapshot.ref);
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

               {/* TÍTULO PRINCIPAL */}
               <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título Principal</label>
                  <Field as="textarea" className="form-control" name="tituloPrincipal" />
                </div>
              </div>

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

              {/* AUDIO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 2{formulario?.audio2 && <a href={formulario.audio2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio2", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 1</label>
                  <Field as="textarea" className="form-control" name="texto1" />
                </div>
              </div>

              {/* TÍTULO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 2</label>
                  <Field as="textarea" className="form-control" name="titulo2" />
                </div>
              </div>

              {/* TEXTO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 2</label>
                  <Field as="textarea" className="form-control" name="texto2" />
                </div>
              </div>

              {/* AUDIO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 3{formulario?.audio3 && <a href={formulario.audio3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio3", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 3</label>
                  <Field as="textarea" className="form-control" name="titulo3" />
                </div>
              </div>

              {/* AUDIO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 4{formulario?.audio4 && <a href={formulario.audio4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio4", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 3</label>
                  <Field as="textarea" className="form-control" name="texto3" />
                </div>
              </div>

              {/* AUDIO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 5{formulario?.audio5 && <a href={formulario.audio5} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio5", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 4</label>
                  <Field as="textarea" className="form-control" name="titulo4" />
                </div>
              </div>

               {/* AUDIO 6 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 6{formulario?.audio6 && <a href={formulario.audio6} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio6", e.target.files[0]) }} />
                </div>
              </div>

               {/* TEXTO 4 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 4</label>
                  <Field as="textarea" className="form-control" name="texto4" />
                </div>
              </div>

              {/* TEXTO 5 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 5</label>
                  <Field as="textarea" className="form-control" name="texto5" />
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
