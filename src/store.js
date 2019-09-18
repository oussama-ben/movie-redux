import {createStore, combineReducers} from 'redux'
import ratingFilter from './reducers/ratingFilter'
import titleFilter from './reducers/titleFilter'
import Reducermovies from './reducers/movies'

const store = createStore(combineReducers({
    movies: Reducermovies,
    minRatingFilter: ratingFilter,
    titleFilter: titleFilter,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
