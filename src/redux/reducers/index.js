import {combineReducers} from 'redux';
import articles from './articlesReducer';
import articlePhotos from './articlePhotosReducer';
import value from './inputReducer';

const rootReducer = combineReducers({
    articles,
    articlePhotos,
    value,
})

export default rootReducer;
