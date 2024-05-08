import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { storage } from '@/config/firebase';
import Link from 'next/link';

export interface Formulario6Props {
  formulario: any;
  handleSalvar(dados: any): void;
}

export default function Formulario6({ formulario, handleSalvar }: Formulario6Props) {

  const handleSubmit = async (dados: any) => {
    //trata os arquivos
    if (dados.video1) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/video1.mp4'), dados.video1)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.video1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio1) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/audio1.mp3'), dados.audio1)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audio1 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem1) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/imagem1.jpg'), dados.imagem1)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem1 = await getDownloadURL(snapshot.ref);
        })
    }
     if (dados.video2) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/video2.mp4'), dados.video2)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.video2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio2) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/audio2.mp3'), dados.audio2)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audio2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem2) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/imagem2.jpg'), dados.imagem2)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem2 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.video3) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/video3.mp4'), dados.video3)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.video3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio3) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/audio3.mp3'), dados.audio3)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audio3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem3) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/imagem3.jpg'), dados.imagem3)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem3 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.video4) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/video4.mp4'), dados.video4)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.video4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio4) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/audio4.mp3'), dados.audio4)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audio4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem4) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/imagem4.jpg'), dados.imagem4)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem4 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.video5) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/video5.mp4'), dados.video5)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.video5 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio5) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/audio5.mp3'), dados.audio5)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audio5 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem5) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/imagem5.jpg'), dados.imagem5)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem5 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.video6) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/video6.mp4'), dados.video6)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.video6 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.audio6) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/audio6.mp3'), dados.audio6)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.audio6 = await getDownloadURL(snapshot.ref);
        })
    }

    if (dados.imagem6) {
      //converte o audio para blob
      await uploadBytesResumable(ref(storage, 'tela6/imagem6.jpg'), dados.imagem6)
        .then(async snapshot => {
          //Altera a imagem para URL
          dados.imagem6 = await getDownloadURL(snapshot.ref);
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
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Exercícios para a pelve e períneo</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

               {/* AUDIO TÍTULO 1 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 1 {formulario?.audio1 && <a href={formulario.audio1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio1", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO  1*/}
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

               {/* IMAGEM 1 */}
               <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Imagem 1 {formulario?.imagem1 && <a href={formulario.imagem1} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem1", e.target.files[0]) }} />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Técnicas de massagem</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

               {/* AUDIO TÍTULO 2 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 2 {formulario?.audio2 && <a href={formulario.audio2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio2", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO  2*/}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 2</label>
                  <Field as="textarea" className="form-control" name="titulo2" />
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

               {/* IMAGEM 2 */}
               <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Imagem 2 {formulario?.imagem2 && <a href={formulario.imagem2} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem2", e.target.files[0]) }} />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Técnicas de Respiração</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

               {/* AUDIO TÍTULO 3 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 3 {formulario?.audio3 && <a href={formulario.audio3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio3", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO  3 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 3</label>
                  <Field as="textarea" className="form-control" name="titulo3" />
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

               {/* IMAGEM 3 */}
               <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Imagem 3 {formulario?.imagem3 && <a href={formulario.imagem3} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem3", e.target.files[0]) }} />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Posições que podem ajudar</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

               {/* AUDIO TÍTULO 4 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 4 {formulario?.audio4 && <a href={formulario.audio4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio4", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO  4 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 4</label>
                  <Field as="textarea" className="form-control" name="titulo4" />
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

               {/* IMAGEM 4 */}
               <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Imagem 4 {formulario?.imagem4 && <a href={formulario.imagem4} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem4", e.target.files[0]) }} />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Banho Morno</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

               {/* AUDIO TÍTULO 5 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 5 {formulario?.audio5 && <a href={formulario.audio5} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio5", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO 5 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 5</label>
                  <Field as="textarea" className="form-control" name="titulo5" />
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

               {/* IMAGEM 5 */}
               <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Imagem 5 {formulario?.imagem5 && <a href={formulario.imagem5} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem5", e.target.files[0]) }} />
                </div>
              </div>

              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Músicas de escolha da mulher</th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>

               {/* AUDIO TÍTULO 6 */}
               <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Áudio Título 6 {formulario?.audio6 && <a href={formulario.audio6} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="audio/mp3" onChange={(e: any) => { setFieldValue("audio6", e.target.files[0]) }} />
                </div>
              </div>

              {/* TÍTULO 6 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Título 6</label>
                  <Field as="textarea" className="form-control" name="titulo6" />
                </div>
              </div>

              {/* TEXTO 6 */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Texto 6</label>
                  <Field as="textarea" className="form-control" name="texto6" />
                </div>
              </div>

              {/* VÍDEO 6 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Vídeo 6 {formulario?.video6 && <a href={formulario.video6} target="_blank">(VISUALIZAR VÍDEO)</a>} </label>
                  <input className="form-control" type="file" accept="video/mp4" onChange={(e: any) => { setFieldValue("video6", e.target.files[0]) }} />
                </div>
              </div>

               {/* AUTOR 6 */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-control-label">Autor 6</label>
                  <Field as="textarea" className="form-control" name="autor6" />
                </div>
              </div>

               {/* IMAGEM 6 */}
               <div className="col-md-12">
                <div className="form-group">
                  <label className="form-control-label">Imagem 6 {formulario?.imagem6 && <a href={formulario.imagem6} target="_blank">(VISUALIZAR AUDIO)</a>} </label>
                  <input className="form-control" type="file" accept="image/png" onChange={(e: any) => { setFieldValue("imagem6", e.target.files[0]) }} />
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
