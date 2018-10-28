import axios from 'axios';

const articlesHendler = (data) => ({
    type: 'ARTICLES',
    data
})

const url = `https://jsonplaceholder.typicode.com`;

export const postsList = () => dispatch => {
    return axios.get(`${url}/posts`)
        .then(result => dispatch(articlesHendler(result.data)))
        .catch(err => {
            console.error(err, 'fetch error')
        })
}
export const filterPosts = (filt) => dispatch => {
    return axios.get(`${url}/posts`)
        .then(result => dispatch(articlesHendler(result.data.filter(el => 
                        (el.title.includes(filt) || el.body.includes(filt)) ?
                        console.log(el)
                        : console.log('underfint needed post')
                    )
                )
            )
        .catch(err => {
            console.error(err, 'fetch error')
        })
    )
}
// export const filterPosts = (filt) => dispatch => {
//     return axios.get(`${url}/posts`)
//         .then(result => result.data.filter(el => 
//             (el.title.includes(filt) || el.body.includes(filt)) ?
//             dispatch(articlesHendler(result), console.log(result))
//             : console.log('underfint needed post')
//         )
//     )
//         .catch(err => {
//             console.error(err, 'fetch error')
//         })
// }
