import  { useState} from "react";
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Modal from './components/modal'
import './App.css'



const App = ()=> {
  const [db, setdb] = useState([]);
  const [data, setdata] = useState([]);
  const[showModal, setShowModal] = useState(false);
  const [productModal, setProductModal] = useState([]);
  const [ personajes, setPersonajes] = useState([]);


  return (
    <>
    <Header
    db = {db}
    setdb={setdb}
    data = {data}
    setdata={setdata}
    />
    <Main
    db = {db}
    setdb={setdb}
    data = {data}
    setdata={setdata}
    showModal = {showModal}
    setShowModal = {setShowModal}
    productModal = {productModal}
    setProductModal = {setProductModal}
    personajes = {personajes}
    setPersonajes = {setPersonajes}
    />
    <Footer/>
    <Modal
     isvisible={showModal}  
     onClose={()=> setShowModal(false)}
     data = {data}
     setdata={setdata}
     productModal = {productModal}
     personajes = {personajes}
    setPersonajes = {setPersonajes}
     
    />
    </>
  )
}

export default App


// https://api.npoint.io/cd4c3f661abfddbe477f