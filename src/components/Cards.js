import React from 'react'

export const Cards = (props) => {
    return (
        <div className='card'>
            <div className='uno'>
                <h2>Name: {props.pais.name.common}</h2>
                <h3>Official name: {props.pais.name.official}</h3>
                <p>Capital: {props.pais.capital}</p>
            </div>
            <div className='dos'>
                <img src={props.pais.flags.png} alt={props.pais.name.common} />
                {props.pais.flags.alt && <p>{props.pais.flags.alt}</p>}
            </div>
            <div className='tres'>
                <p>Region: {props.pais.region}</p>
                <p>Area: {props.pais.area}</p>
                <p>Population: {props.pais.population}</p>
                <p>Continent: {props.pais.continents}</p>
            </div>
            <div className='cuatro'>
                <p>Escudo de la armada</p>
                <img src={props.pais.coatOfArms.png} alt={props.pais.name.common} />
            </div>
        </div>
    )
}

export default Cards
