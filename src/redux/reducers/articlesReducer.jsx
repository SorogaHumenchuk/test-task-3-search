export default function articles (state = {}, action) {
    switch(action.type) {
        case 'ARTICLES':
            return action.data
        default:
            return state

    }
}