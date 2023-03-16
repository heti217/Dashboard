import React from "react";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./ContentRowMovies";
import MovieList from "./MovieList";
import { Route, Switch } from "react-router-dom";
import LastMovieInDB from "./LastMovieInDb";

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
               
            </div>

            <Switch>
                <Route path="/" exact>
                    <MovieList />
                </Route>
                <Route path="/Laptops">
                    <ContentRowMovies />
                </Route>
                <Route path="/Hogar">
                    <GenresInDb />
                </Route>
                <Route path="/Cocina">
                    <LastMovieInDB />
                </Route>
                <Route>
                    <h1>404</h1>
                </Route>
            </Switch>
        </div>
    );
}
export default ContentRowTop;