import React, { Component } from 'react';

export class Header extends Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }
    handleClick = () => {
        console.log("entra en metodo handleclick")
        this.props.descontar();
    }
    render() {
        return (
            <header>
                <div className="container-fluid p-4" style={{ backgroundColor: '#C7C7C7' }}>
                    <div>
                        <h1><a className="navbar-brand">Portal de videojuegos</a></h1>
                    </div>
                    <span className="d-flex flex-row-reverse">
                        <button className="btn btn-outline-success"
                            onClick={this.handleClick}>Darse de alta como socio</button>
                    </span>

                </div>

            </header>
            )
    }
}