import React, { Component } from 'react';

import logo from './logo.svg';
import fifaFoto from './images/fifa.jpg';
import codFoto from './images/call-of-duty-vanguard.jpg';
import farcryFoto from './images/far-cry.jpg';
import lolFoto from './images/league-of-legends.jpg';
import overwatchFoto from './images/overwatch.jpg';
import thelastofusFoto from './images/thelastofus.jpg';
import unchartedFoto from './images/uncharted.jpg';

export class GaleriaFotos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <>
                <div className="container-fluid">
                    <h2 className="text-center">Galeria de fotos</h2>
                    <br />
                
                    <div className="row mt-4">
                        <div className="col-5">
                            <h3>The Last Of Us 2:</h3>
                            <img src={thelastofusFoto } width="230px"/>
                        </div>
                        <div className="col-5">
                            <h3>FIFA 22:</h3>
                            <img src={fifaFoto} width="230px" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-5">
                            <h3>Call Of Duty: Vanguard:</h3>
                            <img src={codFoto} width="230px" />
                        </div>
                        <div className="col-5">
                            <h3>Uncharted 4:</h3>
                            <img src={unchartedFoto} width="230px" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-5">
                            <h3>League Of Legends:</h3>
                            <img src={lolFoto} width="230px" />
                        </div>
                        <div className="col-5">
                            <h3>Overwatch:</h3>
                            <img src={overwatchFoto} width="230px" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-5">
                            <h3>Far Cry 5:</h3>
                            <img src={farcryFoto} width="230px" />
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

