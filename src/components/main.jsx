/* eslint-disable react/prop-types */
import Card from './cards';
import Division from './division';
import '../assets/css/cards.css'
import Estadistica from './estadistica';

const Main = ({db,setdb,data,showModal,setProductModal,
    productModal,
    setShowModal,
     personajes,
     setPersonajes })=>{
    

    return(
        <>
        <section className="contenedor">
            <Card
                db={db}
                setdb={setdb}
                data = {data}
                showModal = {showModal}
                setShowModal = {setShowModal}
                productModal = {productModal}
                setProductModal = {setProductModal}
                personajes = {personajes}
                setPersonajes = {setPersonajes} />
        </section>
        <Division />
        <Estadistica
        data = {data} />  
        </>
    )
   
}

export default Main