
import axios from "axios";

const baseUrl = "https://api.npoint.io/cd4c3f661abfddbe477f";


export const movieApi = async ()=>{
    try{
       const movies = await axios.get(`${baseUrl}/films`);
       return movies.data
    }
    catch(err){
        console.error(err)
    }
}

