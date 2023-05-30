/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../assets/css/estadistica.css'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts'

import  { useState, useEffect} from "react";
import {estadisticaData} from "../services/data"


const Estadistica =({data})=>{
    const [esta, setesta] = useState([]);
    
    useEffect(() => {
        const getdata = () => {
          setesta(estadisticaData(data))
        };
        getdata();
       
      }, [data]);
     
     //console.log(esta)
 return(
    <section className="contenedor texto_estadistica">
            <h2>Statistics</h2>
            <p className="textos_p_estadistica" id="textos_p_estadistica">In the next statistics we can see a graph with the percentages of the films that each director has made, in this data we manage a total of 20 films that are included in our website.</p>
            
            <ResponsiveContainer width="100%" aspect={2}>
            <BarChart 
        data={esta}
        width={500}
        height={200}
        margin={{
            top:5,
            right:30,
            left:20,
            bottom:5
        }}
    >
    <CartesianGrid strokeDasharray="4 1 2" />    
    <XAxis dataKey= "name"/>
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="cant" fill="#9d002b"/>
    
    </BarChart>
            </ResponsiveContainer>     

                
                
           
           

        </section>
 )
}

export default Estadistica