import imagenFondo from "../assets/images/balanza-cocina-keber1-151d8ff2f7d8896da316278508265921-640-0.png";

export default function LastMovieInDB() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Balanza Keber
                    </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: 40 + "rem" }}
                            src={imagenFondo}
                            alt=" Star Wars - Mandalorian "
                        />
                    </div>
                    <p>
                        Balanza Keber: Tara max: 4Kg, bandeja de vidrio,
                        USB para el cargador.
                    </p>
                    <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        Detail product 
                    </a>
                </div>
            </div>
        </div>
    );
}