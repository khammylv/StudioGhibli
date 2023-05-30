/* eslint-disable react/prop-types */
import logo from '../assets/img/logo.png'
import  '../assets/css/header.css'
import Menu from './menu';

const Header =({db,setdb, data, setdata})=>{
    return (
    
    <header id="header_inicio">
          <section className="header">
               <div className="contenedor_header">
                
                <div className="img_header"><img src={logo} /></div>
                <div className="titulo">
                  <h1>the best stories can be found here</h1>
                </div>
         </div>
     
     </section>
     <Menu
     db = {db}
     setdb={setdb}
     data = {data}
     setdata={setdata}
     />
    </header>
    
    )
}

export default Header