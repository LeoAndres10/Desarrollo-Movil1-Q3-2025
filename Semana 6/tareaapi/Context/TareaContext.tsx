import { createContext } from "react";

import { Alumno } from "../Modelos/Alumno";

export const TareaContext=createContext({
    listaAlumno: [] as Alumno[],
    listarAlumnos:()=>{},
    agregarAlumno:(item: Alumno)=>{},
 
    eliminarAlumno:(id: number)=>{}


})