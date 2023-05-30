/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import logo from "../assets/img/logo.png";
import "../assets/css/modal.css";
const Modal = ({ isvisible, onClose, productModal,personajes,
     }) => {

  

   

  if (!isvisible) return;
  null;
  return (
    <section className="modal" id="modal">
      <div className="cabecero_modal">
        <div className="cabecero_modal_centro">
          <img src={logo} alt="logo" />
          <button className="close" id="close" onClick={() => onClose()}>
            &times;
          </button>
        </div>
      </div>
      {productModal.lengt === 0 ? (
        <h3>Cargando....</h3>
      ) : (
        <div className="contenedor" id="paginas">
          <section id="muestra" className="muestra">
          <div className="modal_pelicula" key={productModal.id}>
                <div className="modal_imagen">
                  <img src={productModal.poster} alt={productModal.title} />
                </div>
                <div className="modal_titulo_descripcion">
                  <h2>{productModal.title}</h2>
                  <div className="modal_director">
                    <p>producer: {productModal.producer}</p>
                    <p>director: {productModal.director}</p>
                  </div>
                  <div className="modal_texto_largo">
                    <p>{productModal.description}</p>
                  </div>
                  <div className="modal_score_date">
                    <p>release date: {productModal.release_date}</p>
                    <p>score: <i className="bx bxs-star"></i>{productModal.rt_score}</p>
                  </div>
                </div>
                </div>
          </section>
          <section className="section_personajes">
            <h2>
              <span className="afterF">―― ✦ </span>Personajes
            </h2>
            <div id="personajes" className="personajes">
              
              {
                personajes.map((personaje) =>(
                  <div key={personaje.id} className="cont_people">
                      <img src= {personaje.img} alt={personaje.name} />
                      <div className="con_people_text">
                        <p>Name: {personaje.name}</p>
                        <p>Specie: {personaje.specie}</p>
                      </div> 
                  </div>
                ))
              }
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default Modal;
