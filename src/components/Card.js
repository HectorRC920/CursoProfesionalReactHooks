import React from 'react';
import './Card.css';
const Card = (props) =>{
    const [hover, setHover] = React.useState('adios');
    const onHover = () => {
        setHover('hola')
    }
    const onLeave = () => {
        setHover('adios')
    }
    return (
        <div className='CardContainer' onMouseEnter={onHover} onMouseLeave={onLeave}>
            <img className='image' src={props.image}></img>
            <h2 className='name' key={props.name}>{props.name}</h2>
            <div className={`hover--${hover}`}>
                <p>Estatus: {props.status}</p>
                <p>Especie:{props.species}</p>
                <p>Genero: {props.gender}</p>
                <p>Origen: {props.origin.name}</p>
            </div>
        </div>
    );
}

export default Card;