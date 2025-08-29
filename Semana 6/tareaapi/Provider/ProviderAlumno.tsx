import { View, Text } from 'react-native'
import React from 'react'
import { Alumno } from '../Modelos/Alumno';
import { Plantilla } from '../Modelos/Plantilla';
import AgregarAlumnos from '../Pages/AgregarAlumnos';
import { TareaContext } from '../Context/TareaContext';

export default function ProviderAlumno({children}: Plantilla) {

  const [listaAlumno,setListaAlumno]=useState<Alumno[]>([]);

async function agregarAlumno(item: Alumno){
       
        const respuesta= await fetch('http://192.168.0.7:5000/alumno', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });

        const respuestaApi= await respuesta.json()

        if(respuestaApi){
            Alert.alert("ALumno agregado")
        }
        else{
            Alert.alert('Ocurrio un error')
        }
    }

    async function eliminarAlumno(id: number){
       
        const respuesta= await fetch('http://192.168.0.7:5000/alumno/:id', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(id)
        });

        const respuestaApi= await respuesta.json()

        if(respuestaApi){
          setListaAlumno(listaAnterior => listaAnterior.filter(item => item.idAlumno !==id))
            Alert.alert("ALumno eliminado")
        }
        else{
            Alert.alert('Ocurrio un error')
        }
    }

    
        async function listarAlumnos() {
    
            const response = await fetch('http://192.168.0.7:5000/alumno', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            const listado = await response.json();
            setListaAlumno(listado)
    
        }
    
        useEffect(() => {
            listarAlumnos()
        }, []);
    
        useEffect(() => {
            console.log(listado)
        }, [listaAlumno])
    

  return (
    
    <TareaContext.Provider value={{agregarAlumno,listaAlumno,listarAlumnos,eliminarAlumno}}>
      {children}
    </TareaContext.Provider>
  )
}

export function useContextAlumno(){
  return useContext(TareaContext);
}


