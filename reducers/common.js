export const INPUT_NAME = "INPUT_NAME";

export const INPUT_NAME_SUCCESS = "INPUT_NAME_SUCCESS";

export const INPUT_NAME_FAILURE = "INPUT_NAME_FAILURE";

export const inputName = (name) => ({ type: INPUT_NAME, payload: name });

const initialState = {
    name: "",
    result: ""
}

const common = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_NAME:
            return {
                ...state,
                name: action.payload
            };
        case INPUT_NAME_SUCCESS:
            return {
                ...state,
                result: action.payload
            };
        default:
            return state;
    }
}

export default common;