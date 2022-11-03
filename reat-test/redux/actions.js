import {ACTION_TYPES} from "./types";

export const addNews = (news) => {
    return dispatch => {
        dispatch(addNewsRequest());
        fetch("http://localhost:8080/api/post", {
            body: JSON.stringify(news),
            method: "POST",
            "Content-Type": "application/json",
        }).then(response => response.json())
            .then(result => dispatch(addNewsSuccess(result)))
            .catch(error => dispatch(addNewsFailure(error)))
    }
}
const addNewsRequest = () => ({
    type: ACTION_TYPES.ADD_NEWS_REQUEST
});

const addNewsSuccess = news => ({
    type: ACTION_TYPES.ADD_NEWS_SUCCESS,
    payload: {...news}
});

const addNewsFailure = error => ({
    type: ACTION_TYPES.ADD_NEWS_ERROR,
    payload: {
        error
    }
});

export const getNews = () => {
    return dispatch => {
        dispatch(getNewsRequest())
        fetch("http://localhost:8080/api/post", {
            method: "GET",
            "Content-Type": "application/json",
        }).then(response => response.json())
            .then(result => dispatch(getNewsSuccess(result)))
            .catch(error => dispatch(getNewsFailure(error)))
    }
}
const getNewsRequest = () => ({
    type: ACTION_TYPES.GET_NEWS_REQUEST
});

const getNewsSuccess = news => ({
    type: ACTION_TYPES.GET_NEWS_SUCCESS,
    payload: {...news}
});

const getNewsFailure = error => ({
    type: ACTION_TYPES.GET_NEWS_ERROR,
    payload: {
        error
    }
});