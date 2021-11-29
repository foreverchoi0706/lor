export const GET_VERSION = "GET_VERSION";

const initialState = {
    version: null,
}

const lol = (state = initialState, action) => {
    switch (action.type) {
        case GET_VERSION:
            return state;
        default:
            return state;
    }
}


export default lol;