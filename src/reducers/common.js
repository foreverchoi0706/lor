export const INPUT_KEYWORD = "INPUT_KEYWORD";

export const INPUT_KEYWORD_SUCCESS = "INPUT_KEYWORD_SUCCESS";

export const INPUT_KEYWORD_FAILURE = "INPUT_KEYWORD_FAILURE";

export const inputKeyword = (keyword = "") => ({ type: INPUT_KEYWORD, payload: keyword });

const initialState = {
    result: ""
}

const common = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_KEYWORD:
            return {
                ...state,
                result: action.payload
            };
        case INPUT_KEYWORD_SUCCESS:
            return {
                ...state,
                result: action.payload
            };
        case INPUT_KEYWORD_FAILURE:
            return {};
        default:
            return state;
    }
}

export default common;