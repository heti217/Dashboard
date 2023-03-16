/*import React, { Component } from "react"
import Genre from "./Genre";

let genres = [
    { genre: "Acción" },
    { genre: "Animación" },
    { genre: "Aventura" },
    { genre: "Ciencia Ficción" },
    { genre: "Comedia" },
    { genre: "Documental" },
    { genre: "Drama" },
    { genre: "Fantasia" },
    { genre: "Infantiles" },
    { genre: "Musical" },
];


class GenresInDb extends Component{
	constructor(){
		super()
		this.state = { genres: null }
	}

	componentDidMount () {
        fetch("http://localhost:3000/api/genres")
        .then(res =>(res.json()))
        .then(result => {this.setState({genres: result.data})
			
		})
        .catch(err =>(console.log(err)))
    }
	

	render(){
	return (
		<>
			
			<div class="col-lg-6 mb-4">
				<div class="card shadow mb-4">
					<div class="card-header py-3">
						<h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
					</div>
					<div class="card-body">
                    <div class="row">


                            

                                
                                


                                { this.state.genres.map((genre,index)=> {
                                    return <Genre {...genres} key={index}/>
                                 })
                                }
                            

</div>
</div>
</div>
</div>
</>
)
	}
}

export default GenresInDb;*/
import React, { Component } from "react"
import Genre from "./Genre";
import image from "../assets/images/lavarropas.jpg"

class GenresInDb extends Component{
	constructor(){
		super()
		this.state = { genres: null }
	}

	componentDidMount () {
        fetch("http://localhost:3000/api/genres")
        .then(res =>(res.json()))
        .then(result => {
			this.setState({genres: result.data})
		})
    }
	

	render(){
	return (
		<>
			{/* <!-- Genres in DB --> */}
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Lavarropas Electoluz</h5>
					</div>
					<div className="card-body">
						<div className="row">

							{this.state.genres === null 
							
							? 
								<div>
                                    <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: 40 + "rem" }}
                            src={image}
                            alt=" Star Wars - Mandalorian "
                        />
                    
                    <p>
                        Lavarropas Electoluz: Tara max: 9Kg, tapa horizontal,
                        para agua caliente y fria.
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
							
							:
								this.state.genres.map((genreMap,index)=> {
									return <Genre {...genreMap} key={index}/>
								})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
	}
}

export default GenresInDb;