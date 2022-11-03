import {ACTION_TYPES} from "./types";

const initialState = {
    news: [],
    isFetching: false,
    error: null,
};
export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_NEWS_REQUEST:
            return {...state, isFetching: true};
        case ACTION_TYPES.GET_NEWS_SUCCESS:
            return {...state, isFetching: false, news: action.payload};
        case ACTION_TYPES.GET_NEWS_ERROR:
            return {...state, isFetching: false, error: action.payload.error};
        case ACTION_TYPES.ADD_NEWS_REQUEST:
            return {...state, isFetching: true}
        case ACTION_TYPES.ADD_NEWS_SUCCESS:
            return {...state, isFetching: false, news: [...state.news, action.payload]}
        case ACTION_TYPES.GET_NEWS_ERROR:
            return {...state, isFetching: false, error: action.payload.error}
        default:
            return state;
    }
};