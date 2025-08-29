import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Alumno } from '../Modelos/Alumno';
import { useContextAlumno } from '../Provider/ProviderAlumno';

export default function ListaAlumno() {

   const {listaAlumno,eliminarAlumno} = useContextAlumno()


    return (
        <View>
            <Text>Listado de Alumnos </Text>
            {
                listaAlumno.length == 0 ? (
                    <Text>Informacion Cargando</Text>
                )
                    : (

                        <FlatList data={listaAlumno}
                            keyExtractor={(item) => item.idAlumno.toString()}
                            renderItem={({ item }) =>
                                <View>
                                    <Text>Nombre Alumno: {item.nombreAlumno}</Text>
                                    <Text>Email Alumno: {item.emailAlumno}</Text>
                                    <Text>Cantidad Clase : {item.cantidadClases}</Text>
                                    <Button title="Eliminar Alumno" onPress={eliminarAlumno(item.idAlumno.toString())}></Button>
                                </View>

                            }
                        >

                        </FlatList>
                    )
            }
        </View>
    )
}