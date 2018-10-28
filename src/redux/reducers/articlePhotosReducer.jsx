export default function articlePhotos (state = {}, action) {
    switch(action.type) {
        case 'PHOTOS':
            return action.data
        default:
            return state

    }
}