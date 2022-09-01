import axios from 'axios'

export const fetchNews = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://gnews.io/api/v4/top-headlines?&token=a4bd63e38420904c4d39e7116b616c5c&lang=ml")

        dispatch({
            type: 'NEWS_LIST_SUCCESS',
            payload: data.articles
        })

    }
    catch (error) {
        dispatch({
            type: 'NEWS_LIST_FAIL',
            errormessage: error
        })
    }
}

