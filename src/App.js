import React, { Component } from 'react'; 

import { Header } from './Header';
import { Juego } from './Juego'; 
import { Footer } from './Footer'; 
import { GaleriaFotos } from './GaleriaFotos';

export default class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            descuento: 0,
            videojuegos: [
                {
                    "nombreVideojuego": "The Last Of Us 2",
                    "fechaLanzamiento": "19-06-2020",
                    "desarrollador": "Naughty Dog",
                    "genero": "Accion y aventura",
                    "precioInicial": 70,
                    "foto": "./images/thelastofus.jpg",
                    "descripcion": "The Last of Us Part II es un videojuego de terror y de accion y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.1? Ambientado cinco anos despues de The Last of Us (2013), el juego se centra en dos personajes jugables en un Estados Unidos post-apocaliptico cuyas vidas se entrelazan: Ellie, que busca venganza despues de sufrir una tragedia, y Abby, una soldado que se ve envuelta en un conflicto entre su milicia y un culto religioso. El juego se juega desde la perspectiva de la tercera persona y le permite al jugador luchar contra enemigos humanos y criaturas canibales parecidas a zombis con armas de fuego, armas improvisadas y sigilo."

                },
                {
                    "nombreVideojuego": "FIFA 22",
                    "fechaLanzamiento": "27-09-2021",
                    "desarrollador": "Electronic Arts",
                    "genero": "Deportes",
                    "precioInicial": 70,
                    "foto": "./images/fifa.jpg",
                    "descripcion": "FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Esta disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch. Es la vigesimo novena entrega en la serie FIFA y fue lanzado el 1 de octubre de manera global. El primer trailer del juego fue presentado el 11 de julio de 20214? y muestra la nueva tecnologia Hypermotion, que segun palabras de EA brindara nueva experiencia mas realista.Estas innovaciones estan disponibles unicamente para PlayStation 5, Xbox Series y Stadia. Kylian Mbappe sera el rostro de la portada por segunda vez consecutiva ."
                },

                {
                    "nombreVideojuego": "Call Of Duty: Vanguard",
                    "fechaLanzamiento": "05-11-2021",
                    "desarrollador": "Sledgehammer Games",
                    "genero": "Disparos en primera persona",
                    "precioInicial": 60,
                    "foto": "./images/call-of-duty-vanguard.jpg",
                    "descripcion": "Call of Duty: Vanguard es un videojuego de disparos en primera persona desarrollado por Sledgehammer Games y distribuido por Activision.1? Es el decimoctavo titulo de la franquicia Call of Duty. Fue lanzado internacionalmente el 5 de noviembre de 2021 en PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Microsoft Windows.2? La campana se desarrolla durante la Segunda Guerra Mundial y se centra en un equipo de fuerzas especiales compuesto por miembros de las Naciones Aliadas.3"
                },

                {
                    "nombreVideojuego": "Uncharted 4",
                    "fechaLanzamiento": "10-05-2016",
                    "desarrollador": "Naughty Dog",
                    "genero": "Accion y aventura",
                    "precioInicial": 20,
                    "foto": "./images/uncharted.jpg",
                    "descripcion": "Cronologicamente el juego toma lugar alrededor del ano 2014, entre tres y cinco anos despues de Uncharted 3: La traicion de Drake. El retirado cazafortunas Nathan Drake vive felizmente su vida junto con su esposa Elena Fisher, pero todo se derrumba cuando aparece su hermano Sam, el que Nathan pensaba que estaba muerto. Sam necesita su ayuda para desenmascarar una conspiracion historica del famoso pirata aventurero Henry Avery y su legendario tesoro. Ademas, no son los unicos que buscan el tesoro, ya que Rafe Adler, multimillonario y exsocio de los hermanos Drake mientras estuvieron en una prision, esta buscandolo tambien, con la ayuda de Nadine Ross, la lider de la red de mercenarios Shoreline. Debido a que Nathan se siente culpable por haber dado por muerto a su hermano en el pasado, decide volver al mundo de los cazatesoros. Durante el viaje, Drake ira por suburbios y zonas cubiertas de nieve, pero la localizacion principal sera Libertalia, una ciudad perdida en Madagascar."
                },

                {
                    "nombreVideojuego": "League Of Legends",
                    "fechaLanzamiento": "27-10-2009",
                    "desarrollador": "Riot Games",
                    "genero": "Multijugador",
                    "precioInicial": 20,
                    "foto": "./images/league-of-legends.jpg",
                    "descripcion": "En el juego, dos equipos de cinco jugadores luchan en un combate jugador contra jugador, cada equipo ocupando y defendiendo su mitad del mapa. Cada uno de los diez jugadores controla un personaje, conocido como campeon, con habilidades unicas y diferentes estilos de juego. Durante una partida, los campeones se vuelven mas poderosos acumulando puntos de experiencia y ganando oro que se emplea para la compra de articulos para derrotar al equipo contrario. En el modo principal de juego de LoL, League, La Grieta del Invocador, un equipo gana al abrirse paso hasta la base enemiga y destruir su nexo, una gran estructura ubicada dentro de la cual se emanan tres lineas de subditos o minions, personajes no jugadores que al ser eliminados por el equipo enemigo otorgan oro y experiencia."
                },

                {
                    "nombreVideojuego": "Overwatch",
                    "fechaLanzamiento": "24-05-2016",
                    "desarrollador": "Blizzard",
                    "genero": "Multijugador",
                    "precioInicial": 30,
                    "foto": "./images/overwatch.jpg",
                    "descripcion": "Es la nueva saga de Blizzard esta vez en forma de multijugador online en primera persona ambientado en un mundo futurista. Habra muchos personajes distintos y cada uno de ellos hara uso de sus propias armas y amplificadores. Destacar que cada uno de ellos cumplira un rol diferente dentro del equipo, como Defensa, Tanque, Apoyo y Ataque."
                },

                {
                    "nombreVideojuego": "Far Cry 5",
                    "fechaLanzamiento": "26-03-2018",
                    "desarrollador": "Naughty Dog",
                    "genero": "Accion y aventura",
                    "precioInicial": 38,
                    "foto": "./images/far-cry.jpg",
                    "descripcion": "El juego se desarrolla en el condado ficticio de Hope, Montana, donde un predicador llamado Joseph Seed ha logrado prominencia en la region. Seed cree que ha sido elegido para proteger a la gente del condado de un colapso inevitable y ha establecido una congregacion llamada La Puerta de Eden. En realidad, Seed es un predicador radical y La Puerta del Eden es un culto militar del juicio final. Bajo su gobierno, el culto ha intentado convertir a los residentes del condado de Hope y los ha amenazado para evitar que pidan ayuda al gobierno federal. Cuando un intento de detener a Seed resulta en la muerte de varios oficiales de la ley, el jugador es arrastrado al conflicto armado entre La Puerta de Eden y los residentes restantes del condado de Hope, quienes estan organizando un movimiento de resistencia"
                }
            ]
        }
            
    }

    /*descuento en euros*/
    aplicarDescuento = () => {
        this.setState({
            descuento: 3
        })
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#ECEF97' }}>
                <Header descontar={this.aplicarDescuento }/>

                <main>
                    {this.state.videojuegos.map((item, index) =>
                        <div key={index} className="container-fluid">
                            <Juego index={index} item={item}
                                descuento={this.state.descuento} />
                        </div>
                    )}
                </main>

                <GaleriaFotos />

                <Footer />
            </div>    
        )
    }
}