import React, { Component } from 'react';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <footer>
                <div className="text-center pt-4 pb-3 mt-5" style={{ backgroundColor: '#C7C7C7' }}>
                    <span>Quienes Somos</span><br />
                    <span>Aviso legal</span><br />
                    <span>Contacto</span><br />
                </div>
            </footer>
        )
    }
}