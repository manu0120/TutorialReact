import React, { Component } from 'react';

export class Juego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <h2>{this.props.index + 1}. {this.props.item.nombreVideojuego}</h2>
                </div>
                <div className="row">
                    <div className="col-7 m-2">
                        <p><b>Fecha de lanzamiento:</b> {this.props.item.fechaLanzamiento}</p>
                        <p><b>Desarrollador:</b> {this.props.item.desarrollador}</p>
                        <p><b>Genero:</b> {this.props.item.genero}</p>
                        <p><b>Descripcion:</b> {this.props.item.descripcion}</p>
                        <h3>Precio: {this.props.item.precioInicial - this.props.descuento}&euro;</h3>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />  
            </>
        )
    }
}