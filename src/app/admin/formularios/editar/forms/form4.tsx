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
    if (dados.video1 && typeof (dados.video1) != 'string') {
      //converte o video para blob
      await uploadBytesResumable(ref(storage, 'tela4/video1.mp4'), dados.video1)
        .then(async snapshot => {
          //Altera o video para URL
          dados.video1 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.audio1 && typeof (dados.audio1) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela4/audio1.mp4'), dados.audio1)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio1 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.video2 && typeof (dados.video2) != 'string') {
      //converte o video para blob
      await uploadBytesResumable(ref(storage, 'tela4/video2.mp4'), dados.video2)
        .then(async snapshot => {
          //Altera o video para URL
          dados.video2 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.audio2 && typeof (dados.audio2) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela4/audio2.mp4'), dados.audio2)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio2 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.video3 && typeof (dados.video3) != 'string') {
      //converte o video para blob
      await uploadBytesResumable(ref(storage, 'tela4/video3.mp4'), dados.video3)
        .then(async snapshot => {
          //Altera o video para URL
          dados.video3 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.audio3 && typeof (dados.audio3) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela4/audio3.mp4'), dados.audio3)
        .then(async snapshot => {
          //Altera a audio para URL
          dados.audio3 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.video4 && typeof (dados.video4) != 'string') {
      //converte o video para blob
      await uploadBytesResumable(ref(storage, 'tela4/video4.mp4'), dados.video4)
        .then(async snapshot => {
          //Altera a video para URL
          dados.video4 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.audio4 && typeof (dados.audio4) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela4/audio4.mp4'), dados.audio4)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio4 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.video5 && typeof (dados.video5) != 'string') {
      //converte o video para blob
      await uploadBytesResumable(ref(storage, 'tela4/video5.mp4'), dados.video5)
        .then(async snapshot => {
          //Altera o video para URL
          dados.video5 = await getDownloadURL(snapshot.ref);
        })
    }
    if (dados.audio5 && typeof (dados.audio5) != 'string') {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela4/audio5.mp4'), dados.audio5)
        .then(async snapshot => {
          //Altera o audio para URL
          dados.audio5 = await getDownloadURL(snapshot.ref);
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

              {/* TÍTULO  1*/}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título Principal</label>
                  <Field as="textarea" className="form-control" name="tituloPrincipal" />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fase Latente</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* TÍTULO  1*/}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 1</label>
                  <Field as="textarea" className="form-control" name="titulo1" />
                </div>
              </div>

              {/* AUDIO SUBTÍTULO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 1 {formulario?.audio1 && <a href={formulario.audio1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio1", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 1 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 1</label>
                  <Field as="textarea" className="form-control" name="subtitulo1" />
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
                  <label className="form-control-label">Vídeo 1 {formulario?.video1 && <a href={formulario.video1} target="_blank">(VISUALIZAR VÍDEO)</a>} </label>
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

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fase Ativa</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* TÍTULO  2*/}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 2</label>
                  <Field as="textarea" className="form-control" name="titulo2" />
                </div>
              </div>

              {/* AUDIO SUBTÍTULO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 2 {formulario?.audio2 && <a href={formulario.audio2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio2", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 2</label>
                  <Field as="textarea" className="form-control" name="subtitulo2" />
                </div>
              </div>

              {/* TEXTO 2 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 2</label>
                  <Field as="textarea" className="form-control" name="texto2" />
                </div>
              </div>

              {/* VÍDEO 2 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Vídeo 2 {formulario?.video2 && <a href={formulario.video2} target="_blank">(VISUALIZAR VÍDEO)</a>} </label>
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

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fase Passiva</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* TÍTULO  3*/}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 3</label>
                  <Field as="textarea" className="form-control" name="titulo3" />
                </div>
              </div>

              {/* AUDIO SUBTÍTULO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 3 {formulario?.audio3 && <a href={formulario.audio3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio3", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 3</label>
                  <Field as="textarea" className="form-control" name="subtitulo3" />
                </div>
              </div>

              {/* TEXTO 3 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 3</label>
                  <Field as="textarea" className="form-control" name="texto3" />
                </div>
              </div>

              {/* VÍDEO 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Vídeo 3 {formulario?.video3 && <a href={formulario.video3} target="_blank">(VISUALIZAR VÍDEO)</a>} </label>
                  <input className="form-control" type="file" accept="video/mp4" onChange={(e: any) => { setFieldValue("video3", e.target.files[0]) }} />
                </div>
              </div>

              {/* AUTOR 3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Autor 3</label>
                  <Field as="textarea" className="form-control" name="autor3" />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fase Ativa</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* TÍTULO  4*/}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 4</label>
                  <Field as="textarea" className="form-control" name="titulo4" />
                </div>
              </div>

              {/* AUDIO SUBTÍTULO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 4 {formulario?.audio4 && <a href={formulario.audio4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio4", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 4</label>
                  <Field as="textarea" className="form-control" name="subtitulo4" />
                </div>
              </div>

              {/* TEXTO 4 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 4</label>
                  <Field as="textarea" className="form-control" name="texto4" />
                </div>
              </div>

              {/* VÍDEO 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Vídeo 4 {formulario?.video4 && <a href={formulario.video4} target="_blank">(VISUALIZAR VÍDEO)</a>} </label>
                  <input className="form-control" type="file" accept="video/mp4" onChange={(e: any) => { setFieldValue("video4", e.target.files[0]) }} />
                </div>
              </div>

              {/* AUTOR 4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Autor 4</label>
                  <Field as="textarea" className="form-control" name="autor4" />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Desprendimento e saída da placenta</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

              {/* TÍTULO  5*/}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Título 5</label>
                  <Field as="textarea" className="form-control" name="titulo5" />
                </div>
              </div>

              {/* AUDIO SUBTÍTULO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Subtítulo 5 {formulario?.audio5 && <a href={formulario.audio5} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio5", e.target.files[0]) }} />
                </div>
              </div>

              {/* SUBTÍTULO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Subtítulo 5</label>
                  <Field as="textarea" className="form-control" name="subtitulo5" />
                </div>
              </div>

              {/* TEXTO 5 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 5</label>
                  <Field as="textarea" className="form-control" name="texto5" />
                </div>
              </div>

              {/* VÍDEO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Vídeo 5 {formulario?.video5 && <a href={formulario.video5} target="_blank">(VISUALIZAR VÍDEO)</a>} </label>
                  <input className="form-control" type="file" accept="video/mp4" onChange={(e: any) => { setFieldValue("video5", e.target.files[0]) }} />
                </div>
              </div>

              {/* AUTOR 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Autor 5</label>
                  <Field as="textarea" className="form-control" name="autor5" />
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
