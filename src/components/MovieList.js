import React from "react";
import Movie from "./Movie";
import image from "../assets/images/Celular-xiaomi-redmi-10-.png"
import image2 from "../assets/images/licuadora smartlife.jpg"
import image3 from "../assets/images/balanza-cocina-keber1-151d8ff2f7d8896da316278508265921-640-0.png"
import image4 from "../assets/images/Notebook-ASUS-X515EA.png"
import image5 from "../assets/images/lavarropas.jpg"
import image6 from "../assets/images/Maquina de afeitar.jpg"

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
    }

    async fetchMovies() {
        const response = await fetch("http://localhost:3000/api/movies");
        const result = await response.json();
        this.setState({ movies: result.data });
    }

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <>
               
                <h1 className="h3 mb-2 text-green-80">
                    Lista de Productos
                </h1>

                
                <div className="card shadow mb-4">
                <div className="card-body">
                        <div className="table-responsive">
                        
                                <thead>
                                    <tr>
                                    <div className="card-body">
                                        <img className="w-50" src={image} alt="Productos Destacados" />
                                        <td>Smartphone</td>

                                        <td>$120.890</td>

                                        <td>Xiaomi</td>
                                        <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail product 
                    </a>
                                        </div>
                                    </tr>

                                </thead>

                                <thead>
                                    <tr>
                                <div className="card-body">
                                    <img className="w-50" src={image2} alt="Productos Destacados" />
                                        <td>Licuadora</td>

                                        <td>$12.345</td>

                                        <td>Smartlife</td>
                                        <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail product 
                    </a>
                                    </div>
                                    </tr>
                                    </thead>

                                    <thead>

                                    <tr>
                                    <div className="card-body">
                                    <img className="w-50" src={image3} alt="Productos Destacados" />
                                        <td>Balanza</td>

                                        <td>$5500</td>

                                        <td>Kever</td>
                                        <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail product 
                    </a>
                                    </div>
                                    </tr>
                                    </thead>

                                    <thead>
                                    <tr>
                                    <div className="card-body">
                                    <img className="w-50" src={image4} alt="Productos Destacados" />
                                        <td>Notebook</td>

                                        <td>$199.000</td>

                                        <td>Asus</td>
                                        <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail product 
                    </a>
                                    </div>
                                    </tr>
                                    </thead>

                                    <thead>
                                    <tr>
                                    <div className="card-body">
                                    <img className="w-50" src={image5} alt="Productos Destacados" />
                                        <td>Lavarropas</td>

                                        <td>$195.000</td>

                                        <td>Philips</td>
                                        <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail product 
                    </a>
                                    </div>
                                    </tr>
                                    </thead>

                                    <thead>
                                    <tr>
                                    <div className="card-body">

                                    <img className="w-50" src={image6} alt="Productos Destacados" />
                                        <td>Afeitadora</td>

                                        <td>$20.000</td>

                                        <td>Philips</td>
                                        <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail product 
                    </a>
                                    </div>
                                    </tr>
                                    </thead>
                                <tbody>
                                    {this.state.movies.map((m) => {
                                        return <Movie key={m.id} movie={m} />;
                                    })}
                                </tbody>
                         
                        </div>
                    </div>
               </div>
            </>
 );
    }
}