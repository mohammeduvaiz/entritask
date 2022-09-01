export const newsListReducer = (state = { news: [] }, action) => {
    switch (action.type) {
        case 'NEWS_LIST_SUCCESS':
            return { news: action.payload }

        case 'NEWS_LIST_FAIL':
            return { news: action.errormessage }
            
        default:
            return state
    }
}