import React, {Component} from 'react'
import {connect} from 'react-redux'
import {onEdit, onDelete} from '../action/Movieaction'
import Rating from './Rating'

class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state={ 
            movie: this.props.movie
        }
    }
    render(){
        const {
            movie = {},
            deletemovie,
            editMovie
            } = this.props
                const {
                id,
                title = '',
                year = '',
                image = 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
                rating = 0
            } = movie
            return (
                <div className="movie-card">
                    <div
                        className="movie-delete-button"
                        onClick={() => deletemovie(id)} >
                        Delete
                    </div>
                    <div
                        className="movie-edit-button"
                        onClick={() => editMovie(this.state.movie)} >
                        Edit
                    </div>
                    <div className="movie-rating"><Rating count={rating} /></div>
                    <div
                        className="movie-image"
                        style={{
                            backgroundImage:
                            `url('${image}')`
                        }}
                        />
                    <div className="movie-description">{title} - {year}</div>
                    </div>
            )
        }
        
    }
const mapDispatchToProps = dispatch => {

    return {
        deletemovie: (id) => {
            dispatch(onDelete(id))
        },
        editMovie: (toEdit) => {
            dispatch(onEdit(toEdit))
        }
    }
}

const MovieCardContainer = connect(null, mapDispatchToProps)(MovieCard)

export default MovieCardContainer