
/* eslint-disable react/prop-types */
import '../assets/css/menu.css'
import { filtrarDirectores, ordenarYears, ordenarScore} from '../services/data'
import  { useEffect} from "react";
import {movieApi} from '../api/movies';

const Menu =({setdb, data, setdata})=>{
    
    
    
    useEffect(() => {
        const getdata = () => {
            movieApi().then((res) => setdata(res));
        };
        getdata();
      }, [setdata]);


    const movieDirector = (dr)=>{
        const directores = filtrarDirectores(dr,data)
        setdb(directores)
    }

    const homeData = ()=>{
        setdb(data)   
    }
    const prominent = ()=>{
      const orden = ordenarScore(data);
      setdb(orden)
    }

    const recent = ()=>{
        const orden = ordenarYears(data);
        setdb(orden)
    }
    return (
    
        <div className="container__menu" id="nav">
        <div className="menu">
            <input type="checkbox" id="check__menu"/>
            <label htmlFor="check__menu" id="label__check">
                <i className="bx bx-menu icon__menu"></i>
            </label>
            <nav className="nav_menu">
                <ul className="lista_inicio">
                    <li className="menu_inicio"><a href="#header_inicio" id="home" onClick = {()=> homeData()}>home</a></li>
                    <li className="menu_inicio"><a href="#">directors</a>
                        <ul className="menu_directores">
                            <li><a href="#" onClick={() => movieDirector("Hayao Miyazaki")}  className="menu_director">Hayao Miyazaki</a></li>
                            <li><a href="#" onClick={() => movieDirector("Hiroyuki Morita")} className="menu_director">Hiroyuki Morita</a></li>
                            <li><a href="#" onClick={() => movieDirector("Yoshifumi Kondō")}  className="menu_director">Yoshifumi Kondō</a></li>
                            <li><a href="#" onClick={() => movieDirector("Hiromasa Yonebayashi")}  className="menu_director">Hiromasa Yonebayashi</a>
                            </li>
                            <li><a href="#" onClick={() => movieDirector("Isao Takahata")}  className="menu_director">Isao Takahata</a></li>
                            <li><a href="#" onClick={() => movieDirector("Gorō Miyazaki")} className="menu_director">Gorō Miyazaki</a></li>
                        </ul>
                    </li>
                    <li className="menu_inicio"><a href="#" id="fecha" onClick={()=> recent()}>more recent</a></li> 
                    <li className="menu_inicio"><a href="#" id="popular" onClick={()=> prominent()}>most prominent</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
    )
}

export default Menu