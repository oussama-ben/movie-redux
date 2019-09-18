import React, {Component} from 'react'
import MovieCard from './MovieCard'
import {connect} from 'react-redux'
import {addMovie} from '../action/Movieaction'


class MovieList extends Component {
    state = {}
    render() {
        console.log(this.state)
        return (
     <div className="movie-list">
        {
            this.props.movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
         <div>
          <button  className="new-movie-card"
            onClick={()=>this.props.onAddMovie(this.state)}>
            + </button>
        </div> 
      </div>
        )}
    }
const mapStateToProps = state => {
    return {
        movies: state.movies 
    }
}
     const mapDispatchToProps = dispatch => {
     return { 
         onAddMovie: (idd) => {
             dispatch(addMovie(idd)) }
}}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)