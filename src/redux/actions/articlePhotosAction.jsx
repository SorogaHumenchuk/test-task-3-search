import axios from 'axios';

const articlesPhotosHendler = (data) => ({
    type: 'PHOTOS',
    data
})

const url = `https://jsonplaceholder.typicode.com`;

export const articlephotos = () => dispatch => {
    return axios.get(`${url}/photos`)
        .then(result => dispatch(articlesPhotosHendler(result.data)))
        .catch(err => {
            console.error(err, 'fetch error')
        })
}