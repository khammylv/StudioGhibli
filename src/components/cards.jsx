/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {movieApi} from '../api/movies';
import {mostrarPeliculaIndividual} from '../services/data'
import '../assets/css/cards.css';
import  {  useEffect } from "react";
const Card = ({db,setdb,
    data,
    showModal,
    setShowModal,
    setProductModal,
    productModal,
    personajes,
    setPersonajes})=>{
    
    
    useEffect(() => {
        const getdata = () => {
            movieApi().then((res) => setdb(res));
        };
        getdata();
      }, [setdb]);
      
  const movieModal =(id)=>{
    const pelicula = mostrarPeliculaIndividual(id, data)
    setProductModal(pelicula[0])
    setPersonajes(pelicula[0].people)
    setShowModal(true);
  }
  return(
    <div className="peliculas" id="peliculas">
        {db.map((movies)=>(
           <div className="card_pelicula" key={movies.id}>
               <img src={movies.poster} alt={movies.title} />
               <div className="textos_card">
                <h2>{movies.title}</h2>
                <p>director: {movies.director}</p>
                <p>year: {movies.release_date}</p>
               </div>
               <div className="boton_card">
                <span> <p> <i className="bx bxs-star"></i> {movies.rt_score}</p></span>
                <button className="select" onClick={()=> movieModal(movies.id) }>view more...</button>
               </div>
           </div>
        ))}    
            
    </div>
  )
}
 export default Card
