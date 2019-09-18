import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from '../action/type'

const initialState = [
    {
        id: 0,
        title: 'movie1',
        rating: 5,
        year: 2010
    },
    {
        id: 1,
        title: 'movie2',
        year: 1994,
        rating: 5
    },
    {
        id: 2,
        title: 'movie3',
        year: 2000,
        rating: 3
    }
]

const Reducermovies = (state = initialState, action) => {
    switch(action.type){
        case ADD_MOVIE:
            return(
                state.concat(action.newMovie)
            )
        case EDIT_MOVIE:
            return (
                state.map(el => el.id === action.toEdit.id ? action.toEdit : el)
            )
        case DELETE_MOVIE:
            return (
                state.filter(el => el.id !== action.id)
            )
        default:
            return state
    }
}
export default Reducermovies