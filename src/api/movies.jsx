/* eslint-disable no-unused-vars */
import axios from "axios";

const baseUrl = "https://api.npoint.io/cd4c3f661abfddbe477f";
//const url = "https://my-json-server.typicode.com/khammylv/dpmovies"

export const movieApi = async ()=>{
    try{
       const movies = await axios.get(`${baseUrl}/films`);
       return movies.data
    }
    catch(err){
        console.error(err)
    }
}

export const movieApi2 = async ()=>{
 
   const response = await  fetch("https://my-json-server.typicode.com/khammylv/dpmovies",{
     method : "GET",
     headers: {
        "Content-Type": "application/json"
      },
   });

   const data = await response.json();

   if(response.status === 200){
    return data;
   }else{
    console.error("Error")
   }
}