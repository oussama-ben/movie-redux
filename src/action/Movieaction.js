import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from '../action/type'

export const addMovie = () => {
    return {
        type : ADD_MOVIE,
        newMovie: {
            id: Math.random(),
            title: prompt('movie title: '),
            rating: Number(prompt('movie rating: ')),
            year: Number(prompt('movie year: '))
        }
    }
}

export const onDelete = id => {

    return {
        type: DELETE_MOVIE,
        id
    }
}
export const onEdit = toEdit => {
    return {
        type : EDIT_MOVIE,
        toEdit: {
            id: toEdit.id,
            title: prompt('movie title: ', toEdit.title),
            rating: Number(prompt('movie rating: '), toEdit.rating),
            year: Number(prompt('movie year: '), toEdit.year)
        }
    }
}