import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario9Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario9({ formulario, handleSalvar }: Formulario9Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.audio1 && typeof (dados.audio1) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela9/audio1.mp3'), dados.audio1)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio2 && typeof (dados.audio2) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela9/audio2.mp3'), dados.audio2)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio3 && typeof (dados.audio3) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela9/audio3.mp3'), dados.audio3)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio4 && typeof (dados.audio4) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela9/audio4.mp3'), dados.audio4)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio5 && typeof (dados.audio5) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela9/audio5.mp3'), dados.audio5)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio5 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio6 && typeof (dados.audio6) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela9/audio6.mp3'), dados.audio6)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio6 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem1 && typeof (dados.imagem1) != 'string') {
      //converte o imagem para blob
      await uploadBytesResumable(ref(storage, 'tela9/imagem1.jpg'), dados.imagem1)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem2 && typeof (dados.imagem2) != 'string') {
      //converte o imagem para blob
      await uploadBytesResumable(ref(storage, 'tela9/imagem2.jpg'), dados.imagem2)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem3 && typeof (dados.imagem3) != 'string') {
      //converte o imagem para blob
      await uploadBytesResumable(ref(storage, 'tela9/imagem3.jpg'), dados.imagem3)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem4 && typeof (dados.imagem4) != 'string') {
      //converte o imagem para blob
      await uploadBytesResumable(ref(storage, 'tela9/imagem4.jpg'), dados.imagem4)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem5 && typeof (dados.imagem5) != 'string') {
      //converte o imagem para blob
      await uploadBytesResumable(ref(storage, 'tela9/imagem5.jpg'), dados.imagem5)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem5 = await getDownloadURL(snapshot.ref);
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

              {/* TÍTULO */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título</label>
                  <Field as="textarea" className="form-control" name="titulo" />
                </div>
              </div>

              {/* AUDIO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 2{formulario?.audio2 && <a href={formulario.audio2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio2", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 1</label>
                  <Field as="textarea" className="form-control" name="subtítulo1" />
                </div>
              </div>

              {/* IMAGEM 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Imagem 1 {formulario?.imagem1 && <a href={formulario.imagem1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem1", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 1</label>
                  <Field as="textarea" className="form-control" name="texto1" />
                </div>
              </div>

              {/* AUDIO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 3 {formulario?.audio3 && <a href={formulario.audio3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio3", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 2</label>
                  <Field as="textarea" className="form-control" name="subtítulo2" />
                </div>
              </div>

              {/* IMAGEM 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Imagem 2 {formulario?.imagem2 && <a href={formulario.imagem2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem2", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 2</label>
                  <Field as="textarea" className="form-control" name="texto2" />
                </div>
              </div>

              {/* AUDIO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 4 {formulario?.audio4 && <a href={formulario.audio4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio4", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 3</label>
                  <Field as="textarea" className="form-control" name="subtítulo3" />
                </div>
              </div>

              {/* IMAGEM 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Imagem 3 {formulario?.imagem3 && <a href={formulario.imagem3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem3", e.target.files[0]) }} />
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
                  <label className="form-control-label">Audio 5 {formulario?.audio5 && <a href={formulario.audio5} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio5", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 4</label>
                  <Field as="textarea" className="form-control" name="subtítulo4" />
                </div>
              </div>

              {/* IMAGEM 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Imagem 4 {formulario?.imagem4 && <a href={formulario.imagem4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem4", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 4</label>
                  <Field as="textarea" className="form-control" name="texto4" />
                </div>
              </div>


              {/* AUDIO 6 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Audio 6 {formulario?.audio6 && <a href={formulario.audio6} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio6", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 5</label>
                  <Field as="textarea" className="form-control" name="subtítulo5" />
                </div>
              </div>

              {/* IMAGEM 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Imagem 5 {formulario?.imagem5 && <a href={formulario.imagem5} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem5", e.target.files[0]) }} />
                </div>
              </div>

              {/* TEXTO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Texto 5</label>
                  <Field as="textarea" className="form-control" name="texto5" />
                </div>
              </div>

              {/* OBSERVAÇÃO */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Observação</label>
                  <Field as="textarea" className="form-control" name="observacao" />
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
