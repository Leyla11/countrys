
import Cards from '../components/Cards'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Principal = () => {
    const [paises, setPaises]= useState([]) 
    const traerPaises = async() => {
        try {
            let response = await axios.get ("https://restcountries.com/v3.1/all")
            console.log(response)
            let datos = response.data
            setPaises(datos)
        }catch (error) {
            console.log(error)
        }
    }
 useEffect(() =>{
    traerPaises()
 }, [])

  return (
    <div className='container'>
        {paises.map(pais=>(
            <Cards key={pais.name.common} pais={pais}/>
        ))

        }
    </div>
  )
}

export default Principal